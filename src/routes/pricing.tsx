import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — PocketPill" },
      { name: "description", content: "Simple, transparent pricing for PocketPill telehealth visits and memberships. No surprise bills." },
      { property: "og:title", content: "Pricing — PocketPill" },
      { property: "og:description", content: "Simple, transparent pricing for PocketPill telehealth visits and memberships. No surprise bills." },
      { property: "og:url", content: "/pricing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const plans = [
  {
    name: "Single visit",
    price: "$79",
    period: "per visit",
    description: "Ideal for one-time care or occasional health needs.",
    features: [
      "30-minute video visit",
      "Diagnosis & treatment plan",
      "Prescription sent to pharmacy",
      "30-day message follow-up",
      "HSA/FSA eligible",
    ],
    cta: "Book a visit",
    highlighted: false,
  },
  {
    name: "PocketPill Plus",
    price: "$39",
    period: "per month",
    description: "Comprehensive care for you and your household.",
    features: [
      "Unlimited video visits",
      "Mental health sessions included",
      "Prescription management",
      "Priority same-day booking",
      "Family coverage up to 5 members",
      "24/7 messaging",
    ],
    cta: "Start membership",
    highlighted: true,
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "Health benefits for teams of any size.",
    features: [
      "Employee health program",
      "Dedicated account manager",
      "Usage analytics dashboard",
      "Custom integrations",
      "Volume pricing",
      "Implementation support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Are there any hidden fees?",
    answer: "No. The price you see is the price you pay for the visit. Prescriptions, labs, and specialist referrals may have separate costs depending on your insurance or pharmacy.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes. PocketPill Plus is a monthly membership and you can cancel at any time from your account settings.",
  },
  {
    question: "Is this covered by insurance?",
    answer: "Many visits are HSA/FSA eligible. We also provide superbills for insurance reimbursement. Contact us to verify coverage with your specific plan.",
  },
];

function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Pricing"
              title="Transparent care for every budget"
              description="Choose the plan that works for you. No surprise bills, no hidden fees."
            />
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
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
                      <Link to="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-cream p-8 text-center">
              <h3 className="font-heading text-2xl font-semibold text-foreground">Need help choosing?</h3>
              <p className="mt-2 text-muted-foreground">Our team can answer questions about coverage, plans, and getting started.</p>
              <Button className="mt-6 bg-black text-white hover:bg-black/90" asChild>
                <Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
