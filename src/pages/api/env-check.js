export const GET = async () => {
  return new Response(
    JSON.stringify({
      hasKey: !!import.meta.env.STRIPE_SECRET_KEY,
      startsWith: (import.meta.env.STRIPE_SECRET_KEY || "").slice(0, 8),
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};