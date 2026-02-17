import { kv } from "@vercel/kv";

export type DownloadTokenValue = {
  file: string;
  createdAt: number;
};

export async function createDownloadToken(
  token: string,
  value: DownloadTokenValue,
  ttlSeconds: number
) {
  await kv.set(`dl:${token}`, value, { ex: ttlSeconds });
}

export async function consumeDownloadToken(token: string) {
  const key = `dl:${token}`;

  const value = await kv.get<DownloadTokenValue>(key);
  if (!value) return null;

  await kv.del(key);
  return value;
}