import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "@tanstack/react-router";
import { conditions } from "@/lib/conditions";
import { products } from "@/lib/products";
import {
  Activity,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  HeartPulse,
  MessageSquare,
  Pill,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Video,
} from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-nigerian.png";
import doctorsImage from "@/assets/doctors-nigerian.png";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PocketPill — Nigeria's Private Telehealth & ePharmacy for Men" },
      { name: "description", content: "PocketPill — Nigeria's private telehealth & ePharmacy platform for men. Pharmacist-led consultations for erectile dysfunction, premature ejaculation, hair loss, weight management, and wellness. Discreet. Secure. Same-day." },
      { property: "og:title", content: "PocketPill — Nigeria's Private Telehealth & ePharmacy for Men" },
      { property: "og:description", content: "PocketPill — Nigeria's private telehealth & ePharmacy platform for men. Pharmacist-led consultations for erectile dysfunction, premature ejaculation, hair loss, weight management, and wellness. Discreet. Secure. Same-day." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

// Services are now driven by the conditions data file

const steps = [
  {
    icon: MessageSquare,
    title: "Consult online privately",
    description: "Start a secure, private session. Answer a few questions about your situation.",
  },
  {
    icon: UserRound,
    title: "Get personalized guidance",
    description: "Receive a structured review and action plan from a licensed professional.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing support",
    description: "Reach out anytime to adjust your protocol or ask follow-up questions.",
  },
];

const pharmacistAdvantages = [
  {
    title: "Medication Expertise",
    description: "Pharmacists know drug interactions, side effects, and safety better than most — helping you avoid red flags.",
  },
  {
    title: "Root-Cause Guidance",
    description: "We look beyond symptoms to discuss lifestyle, stress, medication, and health contributors.",
  },
  {
    title: "Faster Access",
    description: "No long wait for a doctor's appointment. Get guidance quickly without the gate-keeping.",
  },
  {
    title: "Referral When Needed",
    description: "When physician evaluation or specialist care is needed, we'll tell you. Support, not guesswork.",
  },
  {
    title: "NDPC-Certified Privacy",
    description: "Your conversations are encrypted and handled with strict NDPR confidentiality. We are officially NDPC registered.",
  },
  {
    title: "Culturally Aware",
    description: "Built for West African men and the diaspora. We understand the context, the culture, and the barriers.",
  },
];

const testimonials = [
  {
    quote: "I delayed reaching out for months because I felt embarrassed. The consultation was private, calm, and practical. I left with clearer next steps than I had from weeks of searching online.",
    author: "Tunde A.",
    location: "Lagos",
    rating: 5,
  },
  {
    quote: "What stood out was the discretion. No awkwardness, no judgment — just a direct conversation that helped me understand what questions I should be asking.",
    author: "Michael O.",
    location: "Abuja",
    rating: 5,
  },
  {
    quote: "I expected generic advice. What I got was a thoughtful conversation tailored to my situation. The written follow-up was especially useful.",
    author: "K.",
    location: "London",
    rating: 5,
  },
  {
    quote: "Living in the diaspora, finding culturally aware healthcare felt impossible. PocketPill bridged that gap for me — the pharmacist understood my concerns without me having to over-explain.",
    author: "Chidi E.",
    location: "Houston",
    rating: 5,
  },
  {
    quote: "I was sceptical about an online consultation. But the pharmacist was thorough, asked the right questions, and the action plan was incredibly detailed. Worth every naira.",
    author: "Emeka N.",
    location: "Port Harcourt",
    rating: 5,
  },
  {
    quote: "The follow-up message a week later genuinely surprised me. It showed they cared beyond just the session. That's rare in healthcare here.",
    author: "Dapo S.",
    location: "Ibadan",
    rating: 5,
  },
  {
    quote: "I've been dealing with performance anxiety for years and never told anyone. PocketPill made it easy to finally talk about it without feeling judged.",
    author: "Femi B.",
    location: "Lagos",
    rating: 5,
  },
  {
    quote: "Fast, private, and the pharmacist knew exactly what to look for. Saved me an awkward trip to the pharmacy. 10/10.",
    author: "Victor U.",
    location: "Enugu",
    rating: 5,
  },
  {
    quote: "My wife noticed the difference within weeks. That alone made the consultation priceless. Thank you, PocketPill.",
    author: "Segun D.",
    location: "Abeokuta",
    rating: 5,
  },
  {
    quote: "As a busy professional, I appreciated the flexibility. I had my consultation during a lunch break and received my summary the same evening.",
    author: "Nonso K.",
    location: "Abuja",
    rating: 5,
  },
  {
    quote: "The pharmacist helped me understand why my previous medications weren't working. That clarity alone changed everything for me.",
    author: "Yemi O.",
    location: "Benin City",
    rating: 5,
  },
  {
    quote: "I tried three different clinics before finding PocketPill. This was the first time someone actually listened and explained things properly.",
    author: "James A.",
    location: "Warri",
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₦10,000",
    period: "Text consultation",
    description: "Perfect for gaining clarity quickly.",
    features: ["Written consultation", "Follow-up questions included", "24-hour response target"],
    cta: "Book now",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₦15,000",
    period: "30-min voice",
    description: "A private session with a written summary.",
    features: ["Private voice session", "Written summary", "Action plan included", "Priority scheduling"],
    cta: "Book now",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₦27,000",
    period: "Deep-dive",
    description: "Comprehensive review + tailored protocol.",
    features: ["Extended consult", "Protocol document", "7-day follow-up access", "Ongoing guidance"],
    cta: "Book now",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Is this really private?",
    answer: "Yes. Consultations happen on our secure, encrypted communication platform. There is no public profile, no waiting room, no front-desk handover. Your name is never shared, and notes are kept confidentially.",
  },
  {
    question: "Will anything show up on my bank or card statement?",
    answer: "Payments are processed securely under a discreet descriptor. No medical or condition-specific wording appears on your statement — only the platform name.",
  },
  {
    question: "Can the pharmacist prescribe medication?",
    answer: "No. Pocketpill is a pharmacist consultation and education service. We can explain treatment options, flag interactions, and tell you what a prescriber needs to hear — but a licensed physician must issue any prescription.",
  },
  {
    question: "I live outside Nigeria. Can I still book?",
    answer: "Yes. The service is built for the West African community at home and across the diaspora. Sessions run on our secure online portal and secure payment links, both of which work globally.",
  },
  {
    question: "What if I'm not sure which tier I need?",
    answer: "Contact our care team before booking. A short exchange is enough to point you toward the right format — text, voice, or deep-dive. There is no pressure to upgrade.",
  },
];

/* ── Animated count-up component ── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1600; // ms
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startAnimation();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <p ref={ref} className="font-heading text-4xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </p>
  );
}

function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    if (window.location.hostname.startsWith('shop.')) {
      router.navigate({ to: '/shop', replace: true });
    }
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div className="container-tight grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Private Men's Health · West Africa & Diaspora
              </span>
              <h1 className="heading-xl text-foreground">
                You've carried this long enough. Start here.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Private pharmacist-led consultations for erectile dysfunction, premature ejaculation, hair loss, weight management, and more — from your phone, same day.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/book">
                    Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#what-we-treat">What we treat</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Private & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Fast scheduling</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute -inset-4 rounded-full bg-primary/10/50 blur-3xl" />
                <img
                  src={heroImage}
                  alt="A friendly doctor on a video call with a prescription bottle nearby"
                  width={1024}
                  height={1024}
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Next available</p>
                      <p className="text-xs text-muted-foreground">in 12 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-border bg-muted">
          <div className="container-tight py-10">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <AnimatedCounter target={500} suffix="+" />
                <p className="mt-1 text-sm text-muted-foreground">Trusted by over 500 men across West Africa and the diaspora.</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-foreground">Private</p>
                <p className="mt-1 text-sm text-muted-foreground">Consultations are conducted confidentially through secure channels.</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-foreground">Fast</p>
                <p className="mt-1 text-sm text-muted-foreground">Same-day scheduling may be available depending on demand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Treat — Condition Selector */}
        <section id="what-we-treat" className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="What We Treat"
              title="Specialized care built for men."
              description="From erectile dysfunction to hair loss to weight management, PocketPill gives you access to private, actionable protocols."
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {conditions.map((condition) => (
                <Link
                  key={condition.slug}
                  to="/conditions/$slug"
                  params={{ slug: condition.slug }}
                  className="group block"
                >
                  <Card className="h-full border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                        <condition.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{condition.shortTitle}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{condition.tagline}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding bg-muted">
          <div className="container-tight">
            <SectionHeader
              eyebrow="How it works"
              title="Getting started is easy and private."
              description="No waiting rooms. No paperwork. Just clear guidance online."
            />
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Step {index + 1}</span>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Pharmacist-Led */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <SectionHeader
                  align="left"
                  eyebrow="Why Pharmacist-Led?"
                  title="The advantage most men don't know about."
                  description="Most telehealth platforms connect you with a doctor who writes a prescription. PocketPill connects you with a pharmacist who actually understands the medication — interactions, timing, side effects, and what to avoid. When you need a doctor, we refer you."
                />
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {pharmacistAdvantages.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 rounded-full bg-primary/10/40 blur-3xl" />
                <img
                  src={doctorsImage}
                  alt="A diverse group of certified doctors, pharmacists and team of healthcare professionals"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials – infinite scrolling marquee */}
        <section className="section-padding bg-black text-white overflow-hidden">
          <div className="container-tight">
            <SectionHeader
              eyebrow="In Their Words"
              title="Quiet conversations. Lasting clarity."
              description="Shared with permission. Names and details have been adjusted to protect privacy."
              className="[&_h2]:text-white [&_p]:text-white/70 [&_span]:text-primary"
            />
          </div>
          {/* Marquee row */}
          <div className="mt-16 flex animate-marquee pause-on-hover">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <Card
                key={`${testimonial.author}-${idx}`}
                className="mx-3 min-w-[320px] max-w-[360px] shrink-0 border-white/10 bg-white/5 text-white backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-white/90 whitespace-normal">"{testimonial.quote}"</p>
                  <div className="mt-6">
                    <p className="font-heading text-sm font-semibold text-white">{testimonial.author}</p>
                    <p className="text-xs text-white/60">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Pricing"
              title="Simple pricing. Clear next steps."
              description="No hidden fees. No surprise bills. Choose the plan that fits your needs."
            />
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col border-border/60 ${plan.highlighted ? "border-2 border-primary shadow-xl" : "bg-card"}`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-6">
                      <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-sm text-muted-foreground"> {plan.period}</span>}
                    </div>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-8 w-full bg-black text-white hover:bg-black/90" asChild>
                      <Link to="/book" search={{ plan: plan.name, price: parseInt(plan.price.replace(/[^0-9]/g, '')) }}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted">
          <div className="container-tight max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="The questions men don't ask out loud."
              description="If something here isn't covered, reach out to our team before booking. There's no obligation to continue."
            />
            <div className="mt-12">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Shop"
              title="Wellness products & diagnostics"
              description="Browse our curated selection of health products, screening kits, and wellness packages."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter(p => p.featured && p.active).slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  to="/checkout/$slug"
                  params={{ slug: product.slug }}
                  className="group block"
                >
                  <Card className="h-full border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30 overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-muted/20 overflow-hidden">
                      {product.coverImage ? (
                        <img src={product.coverImage} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Pill className="h-10 w-10 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{product.category}</span>
                      <h3 className="mt-1 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
                      <div className="mt-3 flex items-baseline gap-2">
                        {product.compareAtPrice && (
                          <span className="text-xs text-muted-foreground line-through font-mono">₦{(product.compareAtPrice / 100).toLocaleString()}</span>
                        )}
                        <span className="text-lg font-bold text-primary font-mono">₦{(product.price / 100).toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg" asChild>
                <a href="https://shop.pocketpill.co">
                  Visit the full shop <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* NDPC Certification */}
        <section className="py-12 bg-muted">
          <div className="container-tight flex flex-col items-center justify-center text-center">
            <a 
              href="/ndpc-certificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl bg-background p-8 shadow-sm transition-all hover:shadow-md max-w-md w-full border border-border/50"
              title="View NDPC Registration Certificate"
            >
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary shadow-inner">
                <div className="absolute inset-1.5 rounded-full border-2 border-white/40 border-dashed"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">NDPC Certified Platform</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  PocketPill is officially registered and compliant with the Nigeria Data Protection Commission. Your consultation and medical data are encrypted and handled with strict NDPR confidentiality.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                  View Official Certificate <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="heading-lg text-white">The hardest part is the first message.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Start privately online. Ask the question you've been postponing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
                <Link to="/book">Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
                <a href="https://shop.pocketpill.co">Visit the Shop</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

