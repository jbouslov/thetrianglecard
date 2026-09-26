# The Triangle Card — Website

A slick, minimal website for **The Triangle Card**: a $20 reusable coupon card
featuring 11 local restaurants in Cary, Apex, and Morrisville, NC.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.
Designed to deploy on **Vercel** with source hosted on **GitHub**.

---

## Pages

- **Home** (`/`) — hero, how it works, restaurant strip, call to action
- **Products** (`/products`) — the card, price, what's included, add to cart
- **About Us** (`/about`)
- **Locations** (`/locations`) — the 11 restaurants + directions
- **FAQ** (`/faq`)
- **Cart** (`/cart`) — working cart, checkout placeholder (see below)
- **Privacy Policy** (`/privacy-policy`)
- **Terms of Service** (`/terms-of-service`)

---

## Run it locally

You need [Node.js](https://nodejs.org) 18.18+ (Node 20+ recommended).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Then open **http://localhost:3000**.

To check a production build:

```bash
npm run build
npm run start
```

---

## Editing the content (the important stuff)

All the content you'll want to change lives in a few plain files — no need to
touch the layout code.

| What you want to change | Edit this file |
| --- | --- |
| Business name, tagline, price, contact email, area | `lib/site.ts` |
| The 11 restaurants (name, cuisine, address, offer) | `lib/restaurants.ts` |
| The card details, description, bullet points | `lib/products.ts` |
| The card images (front/back) | Replace `public/card-front.png` and `public/card-back.png` |
| Colors (gold / black) | `tailwind.config.ts` |

### Replacing the card images

The card shown on the site flips (hover on desktop, tap on mobile) between the
**front** and **back**. Both images live in `public/`:

- `public/card-front.png` — the front artwork
- `public/card-back.png` — the back (restaurants + deals)

Replace those two files with new versions (keep the same filenames) and the
whole site updates automatically. Standard credit-card proportions (about
1.586 : 1, landscape) look best.

### Replacing the restaurant info

Open `lib/restaurants.ts` and replace the placeholder entries with the real
name, cuisine, address, city, and the offer printed on the card for each of the
11 restaurants. The "Get directions" link is generated automatically from the
address — you don't have to build map links yourself.

---

## The cart & checkout (real payments via Stripe)

The cart is fully functional (add, change quantity, see total, saved across
refreshes) and **checkout charges real money through Stripe Checkout**. When a
customer clicks **Checkout**, the site creates a Stripe Checkout session
(`app/api/checkout/route.ts`) and redirects them to Stripe's secure hosted
payment page. After paying they land on `/success`, which clears their cart.

Prices are always taken from `lib/products.ts` on the server — the client can't
tamper with them.

### To turn payments on you need a Stripe key

1. Create a free account at <https://dashboard.stripe.com>.
2. Get your **secret key** at <https://dashboard.stripe.com/apikeys>
   (use `sk_test_...` for testing, `sk_live_...` when you're ready for real
   money).
3. **Locally:** copy `.env.example` to `.env.local` and paste your key into
   `STRIPE_SECRET_KEY`. Restart `npm run dev`.
4. **On Vercel:** Project → **Settings → Environment Variables** → add
   `STRIPE_SECRET_KEY` with your key (and redeploy).

Until a key is set, the Checkout button politely tells customers to email you
instead — nothing breaks.

### Test it

With a `sk_test_...` key, use Stripe's test card `4242 4242 4242 4242`, any
future expiry, any CVC, any ZIP. Real cards only work once you switch to your
live key.

### Physical card / shipping

The card is a physical item, so checkout collects a US shipping address and
phone number. If you only do local pickup, remove the
`shipping_address_collection` block in `app/api/checkout/route.ts`.

---

## Deploying: GitHub + Vercel

### 1. Put the code on GitHub

Make sure Git is installed (`git --version`). Then, from this folder:

```bash
git init
git add .
git commit -m "Initial commit — The Triangle Card website"
```

Create a new repository:

- **Easy way (GitHub CLI):** if you have the `gh` CLI (`gh --version`):
  ```bash
  gh repo create thetrianglecard --public --source=. --push
  ```
- **Manual way:** go to <https://github.com/new>, create an empty repo named
  `thetrianglecard` (don't add a README), then run the commands GitHub shows
  you, which look like:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/thetrianglecard.git
  git branch -M main
  git push -u origin main
  ```

### 2. Deploy on Vercel

1. Go to <https://vercel.com> and sign in **with your GitHub account**.
2. Click **Add New… → Project**.
3. Import the `thetrianglecard` repository.
4. Vercel auto-detects Next.js — just click **Deploy**.
5. You'll get a live URL like `thetrianglecard.vercel.app` in about a minute.

From now on, **every `git push` to `main` automatically redeploys** the site.

### 3. Connect your domain (thetrianglecard.com)

1. Buy `thetrianglecard.com` from any registrar (Namecheap, GoDaddy, Cloudflare, etc.).
2. In Vercel: **Project → Settings → Domains → Add**, and enter
   `thetrianglecard.com` (and `www.thetrianglecard.com`).
3. Vercel shows you the exact DNS records to add (usually an **A record** for the
   root domain and a **CNAME** for `www`). Add those records at your registrar.
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues the HTTPS
   certificate automatically.

---

## Notes

- The Privacy Policy and Terms of Service are standard templates for convenience,
  **not legal advice** — have them reviewed before launch.
- No sign-in / user accounts, by design.
