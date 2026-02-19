// src/pages/api/download.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "node:stream";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export const config = { runtime: "nodejs" };

export const GET: APIRoute = async ({ url }) => {
  try {
    // ===== 0) ENV =====
    const secretKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!secretKey) return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);

    const endpoint = import.meta.env.R2_ENDPOINT;
    const accessKeyId = import.meta.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = import.meta.env.R2_SECRET_ACCESS_KEY;
    const bucket = import.meta.env.R2_BUCKET;

    if (!endpoint || !accessKeyId || !secretAccessKey || !bucket) {
      return json(
        {
          ok: false,
          error: "Missing R2 env vars",
          missing: {
            R2_ENDPOINT: !endpoint,
            R2_ACCESS_KEY_ID: !accessKeyId,
            R2_SECRET_ACCESS_KEY: !secretAccessKey,
            R2_BUCKET: !bucket,
          },
        },
        500
      );
    }

    // ===== 1) Query params =====
    const sessionIdRaw = url.searchParams.get("session_id");
    if (!sessionIdRaw) return json({ ok: false, error: "Missing session_id" }, 400);
    const sessionId = sessionIdRaw.trim();
    if (!sessionId) return json({ ok: false, error: "Missing session_id" }, 400);

    const fileKeyRaw = url.searchParams.get("file");
    if (!fileKeyRaw) return json({ ok: false, error: "Missing file" }, 400);
    const fileKey = fileKeyRaw.trim();
    if (!fileKey) return json({ ok: false, error: "Missing file" }, 400);

    // ===== 2) Stripe check: paid + complete =====
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const isPaid = session.payment_status === "paid";
    const isComplete = session.status === "complete";

    if (!isPaid || !isComplete) {
      return json(
        {
          ok: false,
          error: "Not paid/complete",
          payment_status: session.payment_status,
          status: session.status,
        },
        403
      );
    }

    // ===== 3) Map fileKey -> R2 object key =====
    // Opmerking verwerkt: jouw R2-bestand heet "een-reis-door-de-bijbel.pdf"
    const fileMap: Record<string, string> = {
      "een-reis": "een-reis-door-de-bijbel.pdf",
      "het-handboek": "het-handboek.pdf",
    };

    const objectKey = fileMap[fileKey];
    if (!objectKey) return json({ ok: false, error: "Unknown file key" }, 400);

    // ===== 4) Downloadnaam =====
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const code = sessionId.replace(/[^a-zA-Z0-9]/g, "").slice(-4).toUpperCase();

    const titleMap: Record<string, string> = {
      "een-reis": "Een-reis-door-de-Bijbel",
      "het-handboek": "Het-handboek-voor-leven",
    };

    const baseTitle = titleMap[fileKey] ?? fileKey;
    const downloadName = `${baseTitle}-${date}-${code}.pdf`;

    // ===== 5) R2 (S3 compatible) stream =====
    const s3 = new S3Client({
      region: "auto",
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
    });

    const obj = await s3.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: objectKey,
      })
    );

    if (!obj.Body) return json({ ok: false, error: "Empty file body" }, 500);

    // AWS SDK kan Body als Node Readable of Web ReadableStream geven.
    let bodyStream: ReadableStream;
    const bodyAny = obj.Body as any;

    if (typeof bodyAny?.transformToWebStream === "function") {
      bodyStream = bodyAny.transformToWebStream();
    } else if (bodyAny instanceof Readable) {
      bodyStream = Readable.toWeb(bodyAny) as unknown as ReadableStream;
    } else {
      // fallback: proberen alsof het al een web stream is
      bodyStream = bodyAny as ReadableStream;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${downloadName}"`,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store",
    };

    if (typeof obj.ContentLength === "number") {
      headers["Content-Length"] = String(obj.ContentLength);
    }

    return new Response(bodyStream, { status: 200, headers });
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};