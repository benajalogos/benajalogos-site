// src/pages/api/download.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";
import fs from "node:fs";
import path from "node:path";
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
    const secretKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!secretKey) return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);

    // session_id (veilig, geen string|undefined gezeur)
    const sessionIdRaw = url.searchParams.get("session_id");
    if (!sessionIdRaw) return json({ ok: false, error: "Missing session_id" }, 400);
    const sessionId = sessionIdRaw.trim();
    if (!sessionId) return json({ ok: false, error: "Missing session_id" }, 400);

    // fileKey
    const fileKeyRaw = url.searchParams.get("file");
    if (!fileKeyRaw) return json({ ok: false, error: "Missing file" }, 400);
    const fileKey = fileKeyRaw.trim();
    if (!fileKey) return json({ ok: false, error: "Missing file" }, 400);

    // 1) Stripe check: paid + complete
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const isPaid = session.payment_status === "paid";
    const isComplete = session.status === "complete";

    if (!isPaid || !isComplete) {
      return json(
        { ok: false, error: "Not paid/complete", payment_status: session.payment_status, status: session.status },
        403
      );
    }

    // 2) Map fileKey -> echte file
    const fileMap: Record<string, string> = {
      "een-reis": "een-reis.pdf",
      "het-handboek": "het-handboek.pdf",
    };

    const filename = fileMap[fileKey];
    if (!filename) return json({ ok: false, error: "Unknown file key" }, 400);

    // 3) Pad naar betaalde PDF’s
    // (jij hebt deze map in de hoofdboom gezet)
    const filePath = path.join(process.cwd(), "server-assets", "paid", filename);

    if (!fs.existsSync(filePath)) {
      return json(
        {
          ok: false,
          error: "File not found on server",
          filename,
          filePath,
        },
        404
      );
    }

    // 4) Stream PDF
    const stat = fs.statSync(filePath);
    const nodeStream = fs.createReadStream(filePath);
    const webStream = Readable.toWeb(nodeStream) as unknown as ReadableStream;

    // 5) Mooie naam (datum + 4 tekens) zodat 2 aankopen niet overschrijven
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const code = sessionId.replace(/[^a-zA-Z0-9]/g, "").slice(-4).toUpperCase();

    const titleMap: Record<string, string> = {
      "een-reis": "Een-reis-door-de-Bijbel",
      "het-handboek": "Het-handboek-voor-leven",
    };

    const baseTitle = titleMap[fileKey] ?? fileKey;
    const downloadName = `${baseTitle}-${date}-${code}.pdf`;

    return new Response(webStream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        "Content-Length": String(stat.size),
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};