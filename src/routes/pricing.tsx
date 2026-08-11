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
      { name: "description", content: "Transparent pricing for performance and confidence protocols. Pay for the plan, not just the time." },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const verticals = [
  {
    title: "Sexual Health",
    description: "Protocols for ED and PE.",
    tiers: [
      { name: "Screening", price: "Free", frequency: "", features: ["Risk-free evaluation", "Quick intake form"], cta: "Start Screening" },
      { name: "Protocol Package", price: "₦7,500", frequency: "text / ₦15,000 voice", features: ["1-on-1 Doctor Consult", "Written Protocol Document"], cta: "Get Protocol", highlighted: true },
      { name: "Ongoing Management", price: "₦20,000", frequency: "/ mo (₦30k VIP)", features: ["Monthly check-ins", "Unlimited messaging"], cta: "Subscribe" },
    ]
  },
  {
    title: "Hair Loss",
    description: "Clinically proven hair recovery plans.",
    tiers: [
      { name: "Screening", price: "Free", frequency: "", features: ["Risk-free evaluation", "Quick intake form"], cta: "Start Screening" },
      { name: "Protocol Package", price: "₦10,000–₦15,000", frequency: "", features: ["1-on-1 Doctor Consult", "Written Protocol Document"], cta: "Get Protocol", highlighted: true },
      { name: "Ongoing Management", price: "₦20,000–₦30,000", frequency: "/ mo", features: ["Product supply bundle", "Progress photo reviews"], cta: "Subscribe" },
    ]
  },
  {
    title: "Acne",
    description: "Prescription-grade acne protocols.",
    tiers: [
      { name: "Screening", price: "Free", frequency: "", features: ["Risk-free evaluation", "Photo analysis"], cta: "Start Screening" },
      { name: "Protocol Package", price: "₦10,000", frequency: "", features: ["1-on-1 Doctor Consult", "Written Protocol Document"], cta: "Get Protocol", highlighted: true },
      { name: "Ongoing Management", price: "₦18,000", frequency: "/ mo", features: ["Monthly progress review", "Prescription refills"], cta: "Subscribe" },
    ]
  },
  {
    title: "Scarring & Hyperpigmentation",
    description: "Targeted dermatological treatments.",
    tiers: [
      { name: "Protocol Package", price: "₦20,000", frequency: "", features: ["Photo-based Consult", "Written Protocol Document"], cta: "Get Protocol", highlighted: true },
      { name: "Ongoing Management", price: "₦25,000", frequency: "/ mo", features: ["Monthly review", "Refills and supply management"], cta: "Subscribe" },
      { name: "Flat Package", price: "₦60,000", frequency: "for 3 months", features: ["Full 3-month accountability", "Comprehensive formula adjustments"], cta: "Subscribe" },
    ]
  },
  {
    title: "Weight Loss (Men)",
    description: "Science-backed weight management protocols.",
    tiers: [
      { name: "Screening", price: "₦1,500", frequency: "(credited to package)", features: ["Medical suitability check", "Deducted from final cost"], cta: "Start Screening" },
      { name: "Protocol Package", price: "₦15,000", frequency: "", features: ["1-on-1 Doctor Consult", "Written Protocol Document"], cta: "Get Protocol", highlighted: true },
      { name: "Ongoing Management", price: "₦25,000", frequency: "/ mo", features: ["Monthly progress review", "Medication management"], cta: "Subscribe" },
    ]
  }
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
              title="Transparent, Deliverable-Based Pricing"
              description="We don't charge you just to talk. You're paying for a personalized, actionable blueprint designed for your specific physiology."
            />
            
            <div className="mt-16 space-y-24">
              {verticals.map((vertical) => (
                <div key={vertical.title}>
                  <div className="mb-8 border-b pb-4">
                    <h2 className="font-heading text-3xl font-bold text-foreground">{vertical.title}</h2>
                    <p className="text-muted-foreground mt-2">{vertical.description}</p>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {vertical.tiers.map((tier) => (
                      <Card
                        key={tier.name}
                        className={`relative flex flex-col border-border/60 ${tier.highlighted ? "border-2 border-primary shadow-lg" : "bg-card"}`}
                      >
                        {tier.highlighted && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                            Most popular
                          </span>
                        )}
                        <CardContent className="flex flex-1 flex-col p-6">
                          <h3 className="font-heading text-xl font-semibold text-foreground">{tier.name}</h3>
                          <div className="mt-6 border-b border-border/40 pb-6 mb-6">
                            <span className="font-heading text-4xl font-bold text-foreground">{tier.price}</span>
                            {tier.frequency && <span className="block text-sm text-muted-foreground mt-1">{tier.frequency}</span>}
                          </div>
                          <ul className="flex-1 space-y-3">
                            {tier.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button className={`mt-8 w-full ${tier.highlighted ? '' : 'variant-outline'}`} variant={tier.highlighted ? 'default' : 'outline'} asChild>
                            <Link to="/contact">{tier.cta}</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
