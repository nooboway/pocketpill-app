# PocketPill.co Website Plan

## Goal
Build a professional, high-end, clean marketing website for PocketPill — a telemedicine/telehealth platform. The site should feel trustworthy, modern, and premium, differentiating from competitor DokiTami while covering all core marketing sections.

## Visual Direction

- **Color palette:** White, orange, black. Clean white backgrounds, near-black text, vibrant orange as primary accent for CTAs and highlights. Muted grays for secondary surfaces.
- **Typography:** Libre Baskerville for headings (editorial, trustworthy), IBM Plex Sans for body copy (clean, clinical, readable).
- **Homepage layout:** Split-screen hero — compelling headline and CTA on one side, supportive imagery/illustration on the other.
- **Overall feel:** Generous whitespace, sharp photography, rounded-but-contained cards, confident typography hierarchy, subtle micro-interactions.

## Pages & Sections

### 1. Home (`/`)
- **Header:** Logo, navigation links (Services, How it works, Pricing, About, Contact), primary CTA button.
- **Split-screen hero:** Headline + subheadline + two CTAs (book appointment / learn more) on the left; high-quality healthcare imagery on the right.
- **Trust bar:** Insurance partners, security badges, patient count.
- **Services/conditions:** Cards for common telehealth offerings (urgent care, mental health, prescriptions, chronic care, dermatology, etc.).
- **How it works:** 3-step process (book, visit, get care).
- **Why PocketPill:** Differentiators vs. traditional/concierge care (speed, cost, access).
- **Provider network:** Doctor cards or stats (board-certified physicians, specialties, states served).
- **Testimonials:** 3 patient quote cards with ratings.
- **Pricing:** Simple transparent tiers or a single flat-visit price.
- **FAQ:** Expandable accordion with common telehealth questions.
- **Final CTA:** Book now / get started section.
- **Footer:** Logo, links, legal, social, contact info.

### 2. Services (`/services`)
- Overview of service categories.
- Detail cards for each service with descriptions and "Book" CTAs.
- SEO metadata.

### 3. How It Works (`/how-it-works`)
- Step-by-step patient journey.
- Platform screenshots/illustrations.
- FAQ mini-section.

### 4. Pricing (`/pricing`)
- Pricing cards (individual visit, membership, family plan).
- Feature lists per tier.
- Insurance notes.

### 5. About (`/about`)
- Mission and story.
- Provider network stats.
- Trust & credentials.

### 6. Contact / Book (`/contact`)
- Contact form or booking flow (name, email, phone, reason for visit).
- Office/virtual availability note.
- SEO metadata.

### 7. 404 page
- Friendly not-found page with link back home.

## Technical Implementation

- **Framework:** TanStack Start (already in project).
- **Styling:** Tailwind CSS v4 with custom design tokens in `src/styles.css`.
- **Fonts:** Load Libre Baskerville and IBM Plex Sans via `<link>` in `src/routes/__root.tsx` head.
- **Design tokens:** Define white/orange/black semantic palette as OKLCH values in `:root` and `.dark`.
- **Components:** Build reusable components in `src/components/`: Header, Footer, Hero, SectionHeader, FeatureCard, TestimonialCard, PricingCard, FAQAccordion, CTA, BookingForm.
- **Routing:** Use file-based routes under `src/routes/`.
- **SEO:** Every route gets its own `head()` with unique title, description, og:title, og:description, og:type, twitter:card.
- **Images:** Use `imagegen--generate_image` for hero and service imagery where needed; generate premium, professional healthcare photography.
- **No backend required for v1:** Static marketing site with contact form that can submit to a simple server route or be wired later.

## Implementation Steps

1. Update `src/styles.css` with PocketPill color tokens (white, orange, black) and typography variables.
2. Load fonts in `src/routes/__root.tsx` head.
3. Build shared `Header` and `Footer` components.
4. Rewrite `src/routes/index.tsx` as the split-screen homepage with all sections.
5. Create route files: `/services`, `/how-it-works`, `/pricing`, `/about`, `/contact`.
6. Generate hero and service imagery.
7. Add SEO `head()` metadata to every leaf route.
8. Verify build, visual QA, and responsiveness.

## Open Question
The user mentioned they can add the existing git repo to improve what's already there. If an existing repo/codebase is provided, the first step should be to audit and merge it into this plan before styling changes.
