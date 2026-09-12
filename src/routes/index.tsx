import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  LockKeyhole,
  MessageCircle,
  Pill,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import catConsult from "@/assets/oh-cat-consult.jpg";
import catIntimacy from "@/assets/oh-cat-intimacy.jpg";
import catPerformance from "@/assets/oh-cat-performance.jpg";
import catSupplements from "@/assets/oh-cat-supplements.jpg";
import heroPharmacist from "@/assets/oh-hero-2-branded.jpg";
import heroSmartphone from "@/assets/oh-hero-1.jpg";
import pocketpillEditorial from "@/assets/pocketpill-editorial.png";
import pocketpillPortrait from "@/assets/pocketpill-portrait.png";
import staminaCover from "@/assets/stamina_cover.png";

const WHATSAPP = "https://wa.me/2347083725382";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PocketPill — Medicines and care, made simple" },
      {
        name: "description",
        content:
          "Shop trusted medicines in Nigeria, talk to a pharmacist, and book private telehealth support from home.",
      },
      { property: "og:title", content: "PocketPill — Medicines and care, made simple" },
      {
        property: "og:description",
        content:
          "Shop trusted medicines in Nigeria, talk to a pharmacist, and book private telehealth support from home.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const careCategories = [
  {
    image: catPerformance, // We keep the image mapping but repurpose it for Oncology
    eyebrow: "Specialty Care",
    title: "Oncology & Therapeutics",
    description: "Reliable sourcing, adherence support, and expert clinical guidance for oncology medications.",
    to: "/services" as const,
  },
  {
    image: catIntimacy, // Repurposed for Mental Health
    eyebrow: "Psychiatric Pharmacy",
    title: "Mental Health Care",
    description: "Discreet access and compassionate pharmacist support for mental health prescriptions.",
    to: "/services" as const,
  },
  {
    image: catSupplements,
    eyebrow: "Pharmacy",
    title: "Clinical Pharmacy",
    description: "Comprehensive medication reviews, interaction checks, and safety profiling.",
    to: "/shop" as const,
  },
  {
    image: catConsult,
    eyebrow: "Telehealth",
    title: "Virtual Consultations",
    description: "Connect with licensed clinical pharmacists via voice or text on your schedule.",
    to: "/book" as const,
  },
];

const faqs = [
  {
    question: "How do I order my medications?",
    answer:
      "You can shop directly on our website, ask our Enoré AI assistant, or message us on WhatsApp. Once confirmed, we process and dispatch your order swiftly and discreetly.",
  },
  {
    question: "Are your medications genuine?",
    answer:
      "Yes. We source directly from trusted manufacturers and verified distributors. PocketPill is committed to delivering only safe and authentic medications.",
  },
  {
    question: "Do I need a prescription to order?",
    answer:
      "Over-the-counter (OTC) medications can be ordered directly. For prescription-only medicines (POM), you will need to upload a valid prescription during checkout or share it with our pharmacists via WhatsApp.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "We offer fast, discreet delivery across Nigeria. Delivery availability and timing depend on your specific area and order, and our team will confirm the exact details before you pay.",
  },
  {
    question: "Can I speak to a pharmacist before buying?",
    answer:
      "Absolutely. Our licensed pharmacists are available for private consultations via WhatsApp or voice call. We provide expert advice on dosage, side effects, and drug interactions.",
  },
  {
    question: "Is my consultation really private?",
    answer:
      "Yes. Consultations happen on your personal WhatsApp thread with the pharmacist. There is no public profile, waiting room, or front-desk handover. Your conversations and data are treated with strict confidentiality.",
  },
  {
    question: "Do you offer specialized care for chronic conditions?",
    answer:
      "Yes. We specialize in sourcing and delivering medications for oncology, mental health, and other chronic conditions, ensuring you never run out of essential care and have the right guidance.",
  },
  {
    question: "What happens after I reach out for a consultation?",
    answer:
      "A licensed pharmacist asks a few focused questions, listens to what is going on, and shares clear next steps. If you need a prescriber, we will tell you what to ask for and when to seek further care.",
  },
  {
    question: "Can the pharmacist prescribe medication?",
    answer:
      "PocketPill is a pharmacist consultation and education service. We can explain treatment options, flag interactions, and help you prepare for a prescriber, but a licensed physician must issue any new prescription.",
  },
  {
    question: "What if I am not sure where to start?",
    answer:
      "Start a message on WhatsApp before paying. A short back-and-forth is enough to point you toward the right route. There is no pressure to book.",
  },
];



function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-frame min-h-screen bg-white text-[#0b2119]">
      <main className="overflow-x-clip">
        <section className="hero-shell">
          <div className="hero-shell__image">
            <img
              src={pocketpillPortrait}
              alt="PocketPill campaign portrait"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hero-shell__scrim" />
          <SiteHeader overlay />

          <div className="hero-shell__body">
            <div className="hero-shell__heading">
              <span className="hero-eyebrow">Nigeria e-pharmacy + telehealth</span>
              <h1 className="hero-title">
                <span className="hero-title__line">Your health,</span>
                <span className="hero-title__line hero-title__line--accent">handled.</span>
              </h1>
            </div>

            <div className="hero-shell__bottom">
              <div className="hero-tagline">
                <span>Order simply.</span>
                <span>Feel looked after.</span>
              </div>
              <div className="hero-shell__actions">
                <div className="hero-glass-card hidden md:flex">
                  <div className="hero-glass-card__icon">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b6e3c7]">
                      Pharmacist support
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      A real person when you need help.
                    </p>
                  </div>
                </div>
                <Link to="/book" className="pill-button pill-button--light">
                  Shop medicines <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-scroll-cue hidden sm:flex">
            <span>Scroll to explore</span>
            <span className="hero-scroll-cue__line" />
          </div>
        </section>

        <section className="trust-band">
          {[
            ["01", "Trusted medicines", "Order pharmacy essentials without the guesswork."],
            ["02", "Talk to a pharmacist", "Get practical guidance before you choose."],
            ["03", "Virtual consultations", "Connect with care from wherever you are in Nigeria."],
            ["04", "Discreet delivery", "Your health information and order stay private."],
          ].map(([number, title, description]) => (
            <div key={number} className="trust-band__item" data-reveal>
              <span className="trust-band__number">{number}</span>
              <div>
                <p className="font-heading text-sm font-bold text-[#133c2c]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[#718078]">{description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="editorial-section bg-white" id="care">
          <div className="editorial-container">
            <div className="editorial-heading-row" data-reveal>
              <div>
                <span className="eyebrow">Pharmacy + telehealth</span>
                <h2 className="section-title mt-5 max-w-3xl">
                  Everything you need to take the next step.
                </h2>
              </div>
              <Link to="/services" className="text-link">
                Explore all care <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="program-list">
              {[
                {
                  number: "01",
                  icon: Pill,
                  title: "Specialty & Oncology Sourcing",
                  body: "Dedicated supply chains, protocol adherence support, and expert clinical guidance for oncology and rare condition medications.",
                  cta: "Request specialty medication",
                  to: "/shop" as const,
                },
                {
                  number: "02",
                  icon: ShieldCheck,
                  title: "Psychiatric Pharmacy Care",
                  body: "Discreet access, regimen management, and compassionate continuous pharmacist support for mental health prescriptions.",
                  cta: "Start a private consultation",
                  to: "/book" as const,
                },
                {
                  number: "03",
                  icon: Stethoscope,
                  title: "Comprehensive Clinical Telehealth",
                  body: "1-on-1 virtual sessions with licensed pharmacists to review complex regimens, check interactions, and create actionable safety profiles.",
                  cta: "Book a clinical review",
                  to: "/book" as const,
                },
              ].map((item, index) => (
                <Link
                  key={item.number}
                  to={item.to}
                  className="program-row"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <span className="program-row__number">{item.number}</span>
                  <span className="program-row__icon">
                    <item.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="program-row__copy">
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </span>
                  <span className="program-row__cta">
                    {item.cta} <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section" id="about">
          <div className="story-section__ghost" aria-hidden="true">
            <span>Human</span>
            <span>Care</span>
          </div>
          <div className="editorial-container story-section__grid">
            <div className="story-section__visual" data-reveal>
              <img
                src={pocketpillEditorial}
                alt="PocketPill editorial campaign"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="story-section__caption">
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b6e3c7]">
                  From shelf to doorstep
                </p>
                <p className="mt-2 max-w-xs font-heading text-xl font-semibold leading-tight text-white">
                  Your medicines and care, in one calmer place.
                </p>
              </div>
            </div>
            <div className="story-section__copy" data-reveal>
              <span className="eyebrow eyebrow--light">Care that fits Nigerian life</span>
              <h2 className="section-title section-title--light mt-6">
                Healthcare should feel easier to access.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#c4d8cc]">
                Whether you need a trusted medicine, a quick pharmacist answer, or a virtual consultation,
                PocketPill gives you a clear place to begin. No long queues. No confusing language. No
                awkward handover.
              </p>
              <div className="story-checks">
                {[
                  "Licensed pharmacist guidance",
                  "Prescription support",
                  "Discreet ordering and delivery",
                  "Telehealth from home",
                ].map((item) => (
                  <span key={item}>
                    <Check className="h-4 w-4 text-[#b6e3c7]" /> {item}
                  </span>
                ))}
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="pill-button pill-button--mint mt-10"
              >
                Chat with a pharmacist <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="editorial-section facilities-section bg-[#f5f7f2]">
          <div className="editorial-container facilities-grid">
            <div className="facilities-copy" data-reveal>
              <div className="facilities-mark">
                <LockKeyhole className="h-5 w-5" />
              </div>
              <span className="eyebrow mt-6">Your care, your pace</span>
              <h2 className="section-title mt-5 max-w-xl">
                Your pharmacy, with a human on the other end.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-[#6b7b73]">
                Good care is more than a product in a basket. Get help finding the right option,
                understand how to use it, and know when to speak to a doctor.
              </p>
              <div className="difference-list">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Quality pharmacy care",
                    body: "Straightforward explanations from a licensed pharmacist.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Discreet by design",
                    body: "Private support and delivery that respect your time and your story.",
                  },
                  {
                    icon: Truck,
                    title: "Delivered in Nigeria",
                    body: "Order from home and let our team help with the next step.",
                  },
                ].map((item) => (
                  <div key={item.title} className="difference-list__item">
                    <span>
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="facilities-photos">
              <figure
                className="photo-card photo-card--tall"
                data-reveal
                style={{ "--reveal-delay": "80ms" } as CSSProperties}
              >
                <img
                  src={heroPharmacist}
                  alt="Pharmacist ready to answer questions"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Human-first</strong>
                  <span>Clear answers, without the clinical distance.</span>
                </figcaption>
              </figure>
              <figure
                className="photo-card photo-card--short"
                data-reveal
                style={{ "--reveal-delay": "220ms" } as CSSProperties}
              >
                <img src={heroSmartphone} alt="Always within reach" loading="lazy" />
                <figcaption>
                  <strong>Always within reach</strong>
                  <span>Care that fits into real life.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="dark-band" id="numbers">
          <div className="editorial-container">
            <div data-reveal>
              <span className="eyebrow eyebrow--light">The PocketPill promise</span>
              <h2 className="section-title section-title--light mt-5 max-w-2xl">
                The essentials, without the runaround.
              </h2>
            </div>
            <dl className="stats-grid">
              {[
                ["Rx", "prescription support when you need it"],
                ["1:1", "human guidance from a pharmacist"],
                ["Nigeria", "delivery designed around your city"],
                ["Care", "pharmacy and telehealth in one place"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className="stat-cell"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <dd>{value}</dd>
                  <dt>{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="editorial-section testimonials-section bg-white" id="testimonials">
          <div className="editorial-container">
            <div data-reveal>
              <span className="eyebrow">Why people choose PocketPill</span>
              <h2 className="section-title mt-5 max-w-2xl">Private, calm, and practical.</h2>
            </div>
            <div className="testimonials-marquee-wrapper" data-reveal>
              <div className="testimonials-marquee">
                {[...[
                  [
                    "“",
                    "I did not know what to ask for at the pharmacy. The pharmacist explained my options clearly and helped me choose the next step.",
                    "Tunde A.",
                    "Nigeria",
                  ],
                  [
                    "“",
                    "Ordering was discreet and straightforward. I got the support I needed without spending the day in traffic or a queue.",
                    "Emeka C.",
                    "Lekki",
                  ],
                  [
                    "“",
                    "It felt like talking to someone who understood the question, not just the symptom. I would absolutely recommend PocketPill.",
                    "Kelechi O.",
                    "Ikeja",
                  ],
                  [
                    "“",
                    "A total game-changer. They guided me through the treatment plan and checked in on me. Very professional.",
                    "Chima U.",
                    "Abuja",
                  ],
                  [
                    "“",
                    "I was skeptical at first, but the quality of care and how quickly they deliver is unmatched.",
                    "Femi D.",
                    "Nigeria",
                  ],

                ], ...[
                  [
                    "“",
                    "I did not know what to ask for at the pharmacy. The pharmacist explained my options clearly and helped me choose the next step.",
                    "Tunde A.",
                    "Nigeria",
                  ],
                  [
                    "“",
                    "Ordering was discreet and straightforward. I got the support I needed without spending the day in traffic or a queue.",
                    "Emeka C.",
                    "Lekki",
                  ],
                  [
                    "“",
                    "It felt like talking to someone who understood the question, not just the symptom. I would absolutely recommend PocketPill.",
                    "Kelechi O.",
                    "Ikeja",
                  ],
                  [
                    "“",
                    "A total game-changer. They guided me through the treatment plan and checked in on me. Very professional.",
                    "Chima U.",
                    "Abuja",
                  ],
                  [
                    "“",
                    "I was skeptical at first, but the quality of care and how quickly they deliver is unmatched.",
                    "Femi D.",
                    "Nigeria",
                  ],

                ]].map(([quote, body, name, role], index) => (
                  <figure
                    key={`${name}-${index}`}
                    className="testimonial-card"
                  >
                    <span className="testimonial-card__quote">{quote}</span>
                    <blockquote>{body}</blockquote>
                    <figcaption>
                      <strong>{name}</strong>
                      <span>{role}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>



        <section className="editorial-section faq-section bg-[#f5f7f2]" id="faq">
          <div className="editorial-container faq-container">
            <div className="text-center" data-reveal>
              <span className="eyebrow">Questions, answered</span>
              <h2 className="section-title mt-5">Good care starts with a question.</h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#6b7b73]">
                Not sure whether to shop, chat, or book? Send us a private message before you pay. We
                will help you find the right route.
              </p>
            </div>
            <div className="faq-card" data-reveal>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-section__inner" data-reveal>
            <span className="eyebrow eyebrow--light">Made for Nigeria</span>
            <h2 className="section-title section-title--light mx-auto mt-6 max-w-3xl">
              Medicines and care, without the runaround.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#c4d8cc]">
              Order trusted pharmacy products or speak to a pharmacist from the comfort of home.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/shop" className="pill-button pill-button--mint">
                Shop medicines <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="pill-button pill-button--outline-light"
              >
                Talk to a pharmacist <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
