import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

// Stripe needs the Node.js runtime.
export const runtime = "nodejs";

type IncomingItem = { id: string; quantity: number };

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;

  // If no key is configured yet, fail gracefully so the UI can show a message.
  if (!secret) {
    return NextResponse.json(
      { error: "Payments are not configured yet." },
      { status: 503 }
    );
  }

  const stripe = new Stripe(secret);

  let items: IncomingItem[] = [];
  try {
    const body = await req.json();
    items = Array.isArray(body?.items) ? body.items : [];
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  // Build line items from TRUSTED server-side prices (never the client's).
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const item of items) {
    const product = getProduct(item.id);
    const quantity = Math.max(1, Math.min(50, Math.floor(Number(item.quantity) || 0)));
    if (!product) {
      return NextResponse.json(
        { error: `Unknown product: ${item.id}` },
        { status: 400 }
      );
    }
    line_items.push({
      quantity,
      price_data: {
        currency: "usd",
        unit_amount: product.price * 100, // cents
        product_data: {
          name: product.name,
          description: product.blurb,
        },
      },
    });
  }

  // Derive the site origin for the redirect URLs.
  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    site.url;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: true },
      // The Triangle Card is a physical card. Collect a US shipping address so
      // you can mail it. Remove this block if you only do local pickup.
      shipping_address_collection: { allowed_countries: ["US"] },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
