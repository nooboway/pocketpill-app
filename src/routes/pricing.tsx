import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — PocketPill" },
      { name: "description", content: "Medicine pricing at PocketPill." },
      { property: "og:title", content: "Pricing — PocketPill" },
      { property: "og:description", content: "Medicine pricing at PocketPill." },
      { property: "og:url", content: "/pricing" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Pricing
            </h1>
            <div className="mt-16 rounded-2xl bg-cream p-12 text-center">
              <p className="text-xl font-medium text-foreground">
                Medicine prices are quoted after we see the prescription. Chat a pharmacist.
              </p>
              <Button className="mt-8 bg-[#123d2d] text-white hover:bg-[#123d2d]/90" size="lg" asChild>
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
