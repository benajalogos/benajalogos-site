// src/pages/api/download.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "node:stream";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const GET: APIRoute = async ({ url }) => {
  try {
    // ---------------- PARAMS ----------------
    const session_id = url.searchParams.get("session_id")?.trim();
    const file = url.searchParams.get("file")?.trim();

    if (!session_id) return json({ ok: false, error: "Missing session_id" }, 400);
    if (!file) return json({ ok: false, error: "Missing file" }, 400);

    // ---------------- STRIPE CHECK ----------------
    const STRIPE_SECRET_KEY = import.meta.env.STRIPE_SECRET_KEY as string | undefined;
    if (!STRIPE_SECRET_KEY) return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);

    const stripe = new Stripe(STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid" || session.status !== "complete") {
      return json({ ok: false, error: "Payment not completed" }, 403);
    }

    // ---------------- FILE MAP ----------------
    const fileMap: Record<string, string> = {
      "een-reis": "een-reis-door-de-bijbel.pdf",
      "het-handboek": "het-handboek-voor-leven.pdf",
      "korting": "benaja-bundel.zip",
    };

    const filename = fileMap[file];
    if (!filename) return json({ ok: false, error: "Unknown file key" }, 400);

    // ---------------- R2 CLIENT ----------------
    const R2_ENDPOINT = import.meta.env.R2_ENDPOINT as string | undefined;
    const R2_ACCESS_KEY_ID = import.meta.env.R2_ACCESS_KEY_ID as string | undefined;
    const R2_SECRET_ACCESS_KEY = import.meta.env.R2_SECRET_ACCESS_KEY as string | undefined;
    const R2_BUCKET_NAME = import.meta.env.R2_BUCKET_NAME as string | undefined;

    if (!R2_ENDPOINT) return json({ ok: false, error: "Missing R2_ENDPOINT" }, 500);
    if (!R2_ACCESS_KEY_ID) return json({ ok: false, error: "Missing R2_ACCESS_KEY_ID" }, 500);
    if (!R2_SECRET_ACCESS_KEY) return json({ ok: false, error: "Missing R2_SECRET_ACCESS_KEY" }, 500);
    if (!R2_BUCKET_NAME) return json({ ok: false, error: "Missing R2_BUCKET_NAME" }, 500);

    const r2 = new S3Client({
      region: "auto",
      endpoint: R2_ENDPOINT,
      credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
      },
    });

    // ---------------- GET OBJECT ----------------
    const obj = await r2.send(
      new GetObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: filename,
      })
    );

    if (!obj.Body) return json({ ok: false, error: "File not found in R2" }, 404);

    // ---------------- STREAM ----------------
    const stream = Readable.toWeb(obj.Body as any) as unknown as ReadableStream;

    // ---------------- UNIEKE DOWNLOADNAAM ----------------
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const code = session_id.replace(/[^a-zA-Z0-9]/g, "").slice(-6).toUpperCase();

    const titleMap: Record<string, string> = {
      "een-reis": "Een-reis-door-de-Bijbel",
      "het-handboek": "Het-handboek-voor-leven",
      "korting": "Benaja-bundel",
    };

    const baseTitle = titleMap[file] ?? file;

    const ext = filename.includes(".") ? "." + filename.split(".").pop() : "";
    const downloadName = `${baseTitle}-${date}-${code}${ext}`;

    const contentType =
      ext === ".zip"
        ? "application/zip"
        : ext === ".pdf"
          ? "application/pdf"
          : "application/octet-stream";

    // ---------------- RESPONSE ----------------
    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};