export const prerender = false;

import type { APIRoute } from "astro";
import path from "node:path";
import fs from "node:fs/promises";
import { consumeDownloadToken } from "../../../lib/kv";

export const GET: APIRoute = async ({ params }) => {
  const token = params.token;

  if (!token) {
    return new Response("Missing token", { status: 400 });
  }

  const data = await consumeDownloadToken(token);

  if (!data) {
    return new Response("Invalid or expired download link", { status: 410 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "downloads",
    data.file
  );

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
  "Content-Disposition": `attachment; filename="${data.file}"`,
  "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response("File not found", { status: 404 });
  }
};