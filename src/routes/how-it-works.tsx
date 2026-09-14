import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckSquare, ClipboardList, MessageCircle, Package, Truck, ShieldCheck, LockKeyhole } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — PocketPill" },
      { name: "description", content: "See how easy it is to get care with PocketPill: request medicine, pharmacist review, and discreet delivery." },
      { property: "og:title", content: "How It Works — PocketPill" },
      { property: "og:description", content: "See how easy it is to get care with PocketPill: request medicine, pharmacist review, and discreet delivery." },
      { property: "og:url", content: "/how-it-works" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
});

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us the medicine or send a photo",
    description: "Start by requesting the medicine you need or uploading a prescription securely on our platform or via WhatsApp.",
    features: ["Upload prescription", "Request specific medicines"],
  },
  {
    icon: CheckSquare,
    title: "A pharmacist checks it",
    description: "Our licensed clinical pharmacists review your request for safety, interactions, and appropriateness before moving forward.",
    features: ["Clinical review", "Safety check", "Interaction screening"],
  },
  {
    icon: Package,
    title: "We source it",
    description: "We work with trusted manufacturers and distributors to reliably source high-quality, authentic medications.",
    features: ["Authentic medicines", "Reliable sourcing"],
  },
  {
    icon: MessageCircle,
    title: "We revert on WhatsApp",
    description: "You get a text with availability, pricing, and timing. We arrange delivery to your home or a local pharmacy.",
    features: ["WhatsApp support", "Discreet delivery"],
  },
  {
    icon: Truck,
    title: "If it is for a parent who cannot use the site — Lineage",
    description: "You set it up, you fund it from abroad, and a pharmacist calls them before they run out. They never have to log in.",
    features: ["Parent care", "Continuous support"],
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Private and secure",
    description: "All records, orders, and messages are encrypted and stored in secure, NDPR-compliant infrastructure.",
  },
  {
    icon: LockKeyhole,
    title: "Confidential care",
    description: "Your health information and orders stay strictly private. No public waiting rooms or awkward handovers.",
  },
];

function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight max-w-4xl">
            <SectionHeader
              eyebrow="How it works"
              title="Pharmacy care, simplified"
              description="PocketPill makes getting medical care and trusted medicines as simple as sending a message. Here is what to expect."
            />

            <div className="mt-16 space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="grid gap-8 rounded-2xl border border-border/60 bg-cream p-8 md:grid-cols-[auto_1fr]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#123d2d] text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#123d2d]">Step {index + 1}</span>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {step.features.map((feature) => (
                        <li key={feature} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground shadow-sm border border-black/5">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {guarantees.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background p-6">
                  <item.icon className="h-8 w-8 text-[#123d2d]" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-8" asChild>
                <a href="https://wa.me/2347083725382" target="_blank" rel="noreferrer">
                  Talk to a pharmacist <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
