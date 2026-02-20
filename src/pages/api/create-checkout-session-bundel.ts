import type { APIRoute } from "astro";
import Stripe from "stripe";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const secretKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!secretKey) return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);

    const origin = import.meta.env.PROD_ORIGIN;
    if (!origin) return json({ ok: false, error: "Missing PROD_ORIGIN" }, 500);

    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Bundel — beide boeken",
              description: "Beide boeken samen als bundel (ZIP-download).",
            },
            unit_amount: 1, // € 50,00
          },
          quantity: 1,
        },
      ],

      success_url: `${origin}/bedankt-bundel?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/downloads`,

      metadata: { file: "bundel" },
    });

    return json({ ok: true, url: session.url, id: session.id }, 200);
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};