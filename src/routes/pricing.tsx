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
    name: "Starter",
    price: "₦10,000",
    period: "Text consultation",
    description: "Perfect for gaining clarity quickly.",
    features: ["Written consultation", "Follow-up questions included", "24-hour response target"],
    cta: "Book a visit",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₦15,000",
    period: "30-min voice",
    description: "A private session with a written summary.",
    features: ["Private voice session", "Written summary", "Action plan included", "Priority scheduling"],
    cta: "Book a visit",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₦27,000",
    period: "Deep-dive",
    description: "Comprehensive review + tailored protocol.",
    features: ["Extended consult", "Protocol document", "7-day follow-up access", "Ongoing guidance"],
    cta: "Book a visit",
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
                      <Link to="/book" search={{ plan: plan.name, price: parseInt(plan.price.replace(/[^0-9]/g, '')) }}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-muted p-8 text-center">
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
