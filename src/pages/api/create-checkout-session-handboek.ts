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
    const secretKey = import.meta.env.STRIPE_SECRET_KEY as string | undefined;
const origin = import.meta.env.PROD_ORIGIN as string | undefined;
    if (!secretKey) return json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, 500);


if (!origin) return json({ ok: false, error: "Missing PROD_ORIGIN" }, 500);

    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
  name: "Het handboek voor leven",
description: "Inzicht in het leefproces voor een gezond, duurzaam en rechtvaardig leven.",
},
            unit_amount: 1, // = € 30
          },
          quantity: 1,
        },
      ],


      // ✅ DIT is de fix: altijd terug naar /bedankt-handboek MET session_id

      success_url: `${origin}/bedankt-handboek?session_id={CHECKOUT_SESSION_ID}`,
      
      cancel_url: `${origin}/downloads`,

      // handig voor later, maar niet verplicht
      metadata: { file: "het-handboek" },
    });

    return json({ ok: true, url: session.url, id: session.id }, 200);
  } catch (err: any) {
    return json({ ok: false, error: err?.message ?? String(err) }, 500);
  }
};