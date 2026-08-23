import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ClipboardList, MessageSquare, ShieldCheck, Video } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — PocketPill" },
      { name: "description", content: "See how easy it is to get care with PocketPill: book, visit, get treatment — all from your phone." },
      { property: "og:title", content: "How It Works — PocketPill" },
      { property: "og:description", content: "See how easy it is to get care with PocketPill: book, visit, get treatment — all from your phone." },
      { property: "og:url", content: "/how-it-works" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
});

const steps = [
  {
    icon: Calendar,
    title: "Create your account and book",
    description: "Sign up in under a minute. Choose your reason for visit, pick a provider, and select a time that works for you — same-day slots available.",
    features: ["No paperwork", "Choose provider or specialty", "Calendar sync"],
  },
  {
    icon: Video,
    title: "Join your secure video visit",
    description: "Meet with certified doctors, pharmacists and team of healthcare professionals through a private, HIPAA-compliant video call. No app download required.",
    features: ["HD video on any device", "Encrypted connection", "Bring a guest if needed"],
  },
  {
    icon: ClipboardList,
    title: "Get a personalized care plan",
    description: "Your provider will diagnose, recommend treatment, and send prescriptions to your preferred pharmacy if appropriate.",
    features: ["Digital prescriptions", "Lab orders", "Care instructions"],
  },
  {
    icon: MessageSquare,
    title: "Follow up anytime",
    description: "Questions after your visit? Message your care team through the app for quick answers and prescription adjustments.",
    features: ["Secure messaging", "Prescription refills", "Ongoing support"],
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Private and secure",
    description: "All visits, records, and messages are encrypted and stored in HIPAA-compliant infrastructure.",
  },
  {
    icon: Video,
    title: "Works on any device",
    description: "Use your phone, tablet, or computer. No special software required — just a modern browser.",
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
              title="Healthcare that comes to you"
              description="PocketPill makes getting medical care as simple as a video call. Here's what to expect from start to finish."
            />

            <div className="mt-16 space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="grid gap-8 rounded-2xl border border-border/60 bg-muted p-8 md:grid-cols-[auto_1fr]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Step {index + 1}</span>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {step.features.map((feature) => (
                        <li key={feature} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground shadow-sm">
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
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                <Link to="/contact">Get started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
