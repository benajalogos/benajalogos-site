// src/pages/api/download.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

// Zorg dat dit op Vercel als Node runtime draait (niet Edge)
export const config = { runtime: "nodejs" };

export const GET: APIRoute = async ({ url }) => {
  try {
    // --- 0) ENV ---
    const stripeKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);

    const r2AccessKeyId = import.meta.env.R2_ACCESS_KEY_ID;
    const r2SecretAccessKey = import.meta.env.R2_SECRET_ACCESS_KEY;
    const r2Endpoint = import.meta.env.R2_ENDPOINT;
    const r2Bucket = import.meta.env.R2_BUCKET;

    if (!r2AccessKeyId) return json({ ok: false, error: "Missing R2_ACCESS_KEY_ID" }, 500);
    if (!r2SecretAccessKey) return json({ ok: false, error: "Missing R2_SECRET_ACCESS_KEY" }, 500);
    if (!r2Endpoint) return json({ ok: false, error: "Missing R2_ENDPOINT" }, 500);
    if (!r2Bucket) return json({ ok: false, error: "Missing R2_BUCKET" }, 500);

    // --- 1) Query params ---
    const sessionId = (url.searchParams.get("session_id") ?? "").trim();
    if (!sessionId) return json({ ok: false, error: "Missing session_id" }, 400);

    const fileKey = (url.searchParams.get("file") ?? "").trim();
    if (!fileKey) return json({ ok: false, error: "Missing file" }, 400);

    // --- 2) Stripe check: paid + complete ---
    const stripe = new Stripe(stripeKey);
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

    // --- 3) fileKey -> R2 object key ---
    // LET OP: "een-reis" is GEEN folder. Het is alleen een “label” dat wij mappen naar de echte bestandsnaam.
    const fileMap: Record<string, string> = {
      "een-reis": "een-reis-door-de-bijbel.pdf",
      "het-handboek": "het-handboek.pdf",
    };

    const objectKey = fileMap[fileKey];
    if (!objectKey) return json({ ok: false, error: "Unknown file key" }, 400);

    // --- 4) R2 client (S3-compatible) ---
    const s3 = new S3Client({
      region: "auto",
      endpoint: r2Endpoint,
      credentials: {
        accessKeyId: r2AccessKeyId,
        secretAccessKey: r2SecretAccessKey,
      },
      forcePathStyle: true,
    });

    // --- 5) Fetch object from R2 ---
    const cmd = new GetObjectCommand({
      Bucket: r2Bucket,
      Key: objectKey,
    });

    const obj = await s3.send(cmd);

    if (!obj.Body) {
      return json({ ok: false, error: "Empty file body from R2" }, 500);
    }

    // Body is in Node meestal een Readable stream
    const bodyAny = obj.Body as any;

    // Web Response kan een Node Readable meestal direct aan; anders fallback naar transformToWebStream()
    const stream =
      typeof bodyAny.transformToWebStream === "function"
        ? bodyAny.transformToWebStream()
        : bodyAny;

    // --- 6) Download filename netjes maken ---
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const code = sessionId.replace(/[^a-zA-Z0-9]/g, "").slice(-4).toUpperCase();

    const titleMap: Record<string, string> = {
      "een-reis": "Een-reis-door-de-Bijbel",
      "het-handboek": "Het-handboek-voor-leven",
    };

    const baseTitle = titleMap[fileKey] ?? fileKey;
    const downloadName = `${baseTitle}-${date}-${code}.pdf`;

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        // Content-Length is niet altijd beschikbaar bij R2 streaming; daarom weglaten.
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};