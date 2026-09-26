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

## The cart & checkout

The cart is fully functional: visitors can add the card, change the quantity,
and see the total. The cart is saved in the browser so it survives a refresh.

**Checkout is currently a placeholder** — clicking "Checkout" shows a
"coming soon / contact us" message. When you're ready to accept real online
payments, everything is set up for a clean drop-in:

1. Look at `handleCheckout()` in `app/cart/page.tsx` — there's a commented
   example showing exactly what to replace it with.
2. Create an API route at `app/api/checkout/route.ts` that creates a payment
   session (e.g. [Stripe Checkout](https://stripe.com/docs/checkout/quickstart))
   from the cart `items` and returns a redirect URL.
3. Add your payment provider keys as environment variables in Vercel
   (Project → Settings → Environment Variables).

No cart code needs to change — the cart already carries everything the checkout
endpoint needs.

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
