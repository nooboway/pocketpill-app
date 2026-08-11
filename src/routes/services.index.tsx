import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Zap, ShieldCheck, Dumbbell, Sparkles, Droplet } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Performance & Confidence Services — PocketPill" },
      { name: "description", content: "Explore performance and confidence services from PocketPill: sexual health, hair loss, skin clarity, and weight management." },
      { property: "og:title", content: "Performance & Confidence Services — PocketPill" },
      { property: "og:description", content: "Explore performance and confidence services from PocketPill: sexual health, hair loss, skin clarity, and weight management." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const liveVerticals = [
  {
    id: "sexual-health",
    icon: Zap,
    title: "Sexual Health",
    description: "Reclaim your peak performance with personalized protocols for erectile dysfunction and premature ejaculation.",
    path: "/services/sexual-health",
    tag: "Live",
  },
  {
    id: "hair-loss",
    icon: ShieldCheck,
    title: "Hair Loss",
    description: "Stop thinning in its tracks and regrow your confidence with clinically proven hair recovery plans.",
    path: "/services/hair-loss",
    tag: "Live",
  },
  {
    id: "acne",
    icon: Sparkles,
    title: "Acne",
    description: "Clear skin is confident skin. Get a tailored, prescription-grade acne protocol that actually works.",
    path: "/services/acne",
    tag: "Live",
  },
  {
    id: "scarring",
    icon: Droplet,
    title: "Scarring & Hyperpigmentation",
    description: "Even out your skin tone and erase past damage with powerful, personalized dermatological treatments.",
    path: "/services/scarring",
    tag: "Live",
  },
  {
    id: "weight-loss",
    icon: Dumbbell,
    title: "Weight & Energy",
    description: "Maximize your energy, stamina, and drive. Science-backed weight management protocols built for men.",
    path: "/services/weight-loss",
    tag: "Live",
  },
];

const upcomingVerticals = [
  {
    id: "low-t",
    icon: Activity,
    title: "Low Testosterone",
    description: "Restore your drive and vitality with comprehensive testosterone screening and management protocols.",
    path: "#",
    tag: "Coming Soon",
  },
  {
    id: "fertility",
    icon: Activity,
    title: "Fertility Support",
    description: "Couples-facing protocols and testing to optimize your chances of conceiving.",
    path: "#",
    tag: "Coming Soon",
  },
];

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Our Protocols"
              title="Built for performance and confidence."
              description="Targeted, science-backed protocols designed to help you look, feel, and perform at your absolute best."
            />
            
            <div className="mt-16">
              <h2 className="mb-6 font-heading text-2xl font-bold">Active Protocols</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {liveVerticals.map((service) => (
                  <Card key={service.id} className="border-border/60 bg-card transition-shadow hover:shadow-lg flex flex-col h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-grow">{service.description}</p>
                      <div className="mt-6">
                        <Button variant="outline" className="w-full" asChild>
                          <Link to={service.path as any}>View Protocol <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h2 className="mb-6 font-heading text-2xl font-bold text-muted-foreground">In Development</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 opacity-60">
                {upcomingVerticals.map((service) => (
                  <Card key={service.id} className="border-border/60 bg-muted/50 transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                          <service.icon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider bg-background px-2 py-1 rounded-md text-muted-foreground">Coming Soon</span>
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
