# Next Store — Final Project

A small e‑commerce storefront built with Next.js (App Router) as a Udemy final project.  
Features include authentication (Clerk), server actions for secure form handling, Prisma + Postgres for data, Supabase storage for images, Stripe embedded checkout, Tailwind + shadcn UI components, and Zod validation.

## Tech Stack
- Next.js (App Router) — routing, server components, server actions
- React 18
- Clerk — authentication (App Router compatible)
- Prisma + PostgreSQL — ORM & DB
- Supabase Storage — image uploads
- Stripe — payments (embedded checkout)
- Tailwind CSS + shadcn/ui (Radix) — UI primitives
- Zod — schema validation
- Axios — client / server requests
- Faker (dev) — seed data

---

## Local Setup

1. Install
   ```bash
   npm install
   ```

2. Environment variables (create `.env`)
   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   - CLERK_SECRET_KEY=
   - DATABASE_URL=
   - DIRECT_URL=
   - ADMIN_USER_ID=
   - SUPABASE_URL=
   - SUPABASE_KEY=
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   - STRIPE_SECRET_KEY=
   - NEXT_PUBLIC_WEBSITE_URL=

   Add `.env` to `.gitignore`.

3. Prisma
   ```bash
   npx prisma generate
   npx prisma db push
   # seed if provided
   node prisma/seed
   ```

4. Run
   ```bash
   npm run dev
   ```
