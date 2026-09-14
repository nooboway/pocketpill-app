import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MessageCircle,
  Search,
} from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import pocketpillPortrait from "@/assets/pocketpill-portrait.png";

const WHATSAPP = "https://wa.me/2347083725382";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PocketPill | Care beyond the prescription" },
      {
        name: "description",
        content:
          "Find medicines, access pharmacist support, source difficult treatments and stay on track with ongoing medication care.",
      },
      { property: "og:title", content: "PocketPill | Care beyond the prescription" },
      {
        property: "og:description",
        content:
          "Find medicines, access pharmacist support, source difficult treatments and stay on track with ongoing medication care.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});



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
    question: "What happens after I reach out?",
    answer:
      "You will chat with a licensed pharmacist who will review your needs, source your medication, and arrange for discreet delivery to your home.",
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
  {
    question: "Can I use PocketPill for my parent in Nigeria if I live abroad?",
    answer:
      "Yes. That product is Lineage. You set it up. They do not need the app. A pharmacist calls them.",
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
              <h1 className="hero-title">
                <span className="hero-title__line">Care beyond</span>
                <span className="hero-title__line hero-title__line--accent">the prescription.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-white/90 font-medium">
                Find medicines, speak with a pharmacist, source hard-to-find treatments and stay on track with ongoing medication care.
              </p>
            </div>

            <div className="hero-shell__bottom">
              <p className="hidden md:block max-w-sm text-sm text-[#c4d8cc] font-medium leading-relaxed">
                Have a prescription? Upload it and let our pharmacy team review the next step.
              </p>
              <div className="hero-shell__actions ml-auto">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-button pill-button--outline-light hidden sm:flex"
                >
                  Talk to a pharmacist
                </a>
                <Link to="/find" className="pill-button pill-button--light">
                  Find a medicine <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-scroll-cue hidden sm:flex">
            <span>Scroll to explore</span>
            <span className="hero-scroll-cue__line" />
          </div>
        </section>

        <section className="bg-[#f5f7f2] py-16 sm:py-24">
          <div className="container-tight">
            <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl" data-reveal>
              What do you need today?
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "I need a medicine",
                  desc: "Search for a medicine or upload a prescription.",
                  cta: "Find a medicine",
                  to: "/find",
                },
                {
                  title: "I can't find my medicine",
                  desc: "Ask the pharmacy team to investigate sourcing options.",
                  cta: "Help me find it",
                  to: "/specialty",
                },
                {
                  title: "I need pharmacist advice",
                  desc: "Access telepharmacy and medication support.",
                  cta: "Talk to a pharmacist",
                  to: "/telepharmacy",
                },
                {
                  title: "I'm managing medication for someone else",
                  desc: "Coordinate medication care for a parent or loved one.",
                  cta: "Explore Lineage",
                  to: "/lineage",
                },
              ].map((path, index) => (
                <div key={path.title} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-border/40" data-reveal style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#133c2c]">{path.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6b7b73]">{path.desc}</p>
                  </div>
                  <Link to={path.to} className="mt-6 inline-flex items-center text-sm font-semibold text-[#123d2d] hover:underline">
                    {path.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" id="problem">
          <div className="container-tight">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl text-[#123d2d]">
                Getting the medicine shouldn't be the hardest part of treatment.
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#6b7b73]">
                A prescription may only be the beginning. Patients can still spend time searching for medicines, confirming availability, finding specialist treatments, asking medication questions and repeating the same process when a refill is due.
              </p>
              <p className="mt-4 font-semibold text-[#123d2d] text-lg">
                PocketPill brings these steps into one coordinated pharmacy experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f2] py-16 sm:py-24" id="core-model">
          <div className="container-tight">
            <div className="text-center" data-reveal>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl text-[#123d2d]">
                Find it. Understand it. Stay on it.
              </h2>
            </div>
            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              {[
                {
                  title: "Find it.",
                  desc: "Search for everyday medicines, upload a prescription or ask PocketPill to investigate difficult-to-source medication.",
                  icon: Search
                },
                {
                  title: "Understand it.",
                  desc: "Speak with a pharmacist about medication use, interactions, side effects, storage, adherence and medication reviews.",
                  icon: MessageCircle
                },
                {
                  title: "Stay on it.",
                  desc: "Make repeat treatment easier with refill support and ongoing medication care.",
                  icon: Clock3
                }
              ].map((item, index) => (
                <div key={item.title} className="flex flex-col items-center text-center" data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6eee9] text-[#123d2d]">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-[#133c2c]">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#6b7b73]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#123d2d] py-16 sm:py-24 text-white" id="hard-to-find">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center" data-reveal>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Can't find your medicine?
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/80">
                Send us the medicine name, your prescription or a photo of the pack. Our pharmacy team can review the request and investigate appropriate sourcing options.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/specialty" className="pill-button pill-button--mint">
                  Request a medicine
                </Link>
                <Link to="/find" className="pill-button pill-button--outline-light">
                  Upload prescription
                </Link>
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
              <Link to="/find" className="pill-button pill-button--mint">
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
