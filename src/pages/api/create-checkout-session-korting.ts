// src/pages/api/create-checkout-session-korting.ts
import type { APIRoute } from "astro";
import Stripe from "stripe";

export const config = { runtime: "nodejs" };

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export const POST: APIRoute = async () => {
  try {
    const secretKey = import.meta.env.STRIPE_SECRET_KEY;
    if (!secretKey)
      return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);

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
              name: "Bundelkorting",
              description: "Bundel-download (zip) — korting.",
            },
            // ✅ pas dit bedrag aan naar jouw kortingprijs (in centen)
            unit_amount: 1, // TEST: €0,01 - wordt €50
          },
          quantity: 1,
        },
      ],

      // ✅ terug naar bedankt-korting met session_id
      success_url: `${origin}/bedankt-korting?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/downloads`,

      // ✅ file-key die download.ts gebruikt
      metadata: { file: "korting" },
    });

    return json({ ok: true, url: session.url, id: session.id }, 200);
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};