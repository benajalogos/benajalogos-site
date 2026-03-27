import type { APIRoute } from 'astro';
import { kv } from '@vercel/kv';

export const GET: APIRoute = async () => {
  await kv.set('ping', Date.now());
  return new Response('ok');
};