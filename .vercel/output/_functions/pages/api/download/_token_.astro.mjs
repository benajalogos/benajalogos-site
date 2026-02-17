import nodePath from 'node:path';
import fs from 'node:fs/promises';
import { kv } from '@vercel/kv';
export { renderers } from '../../../renderers.mjs';

async function consumeDownloadToken(token) {
  const key = `dl:${token}`;
  const value = await kv.get(key);
  if (!value) return null;
  await kv.del(key);
  return value;
}

const prerender = false;
const GET = async ({ params }) => {
  const token = params.token;
  if (!token) {
    return new Response("Missing token", { status: 400 });
  }
  const data = await consumeDownloadToken(token);
  if (!data) {
    return new Response("Invalid or expired download link", { status: 410 });
  }
  const filePath = nodePath.join(
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
        "Cache-Control": "no-store"
      }
    });
  } catch {
    return new Response("File not found", { status: 404 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
