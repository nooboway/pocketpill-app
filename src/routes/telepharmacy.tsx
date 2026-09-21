import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Stethoscope } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/telepharmacy")({
  component: TelepharmacyPage,
  head: () => ({
    meta: [
      { title: "Telepharmacy | PocketPill" },
      {
        name: "description",
        content:
          "Access clinical pharmacist support remotely. Ask medication questions, review interactions and manage your treatment.",
      },
    ],
  }),
});

function TelepharmacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-background pt-12 sm:pt-24 pb-24">
          <div className="container-tight max-w-4xl">
            <span className="text-[#123d2d] font-bold tracking-widest text-sm uppercase mb-6 block">
              TELEPHARMACY
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              A real pharmacist, when you need help.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
              Get answers about medication use, interactions, side effects, and ongoing care without
              leaving home.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#f5f7f2] p-8 rounded-2xl border border-border/40">
                <MessageCircle className="h-8 w-8 text-[#123d2d] mb-4" />
                <h3 className="font-heading text-xl font-bold text-[#133c2c] mb-2">
                  Medication Questions
                </h3>
                <p className="text-[#6b7b73] text-sm leading-relaxed">
                  Not sure how to take a new medicine? Experiencing a side effect? Chat with our
                  team for clear, clinical guidance.
                </p>
              </div>
              <div className="bg-[#f5f7f2] p-8 rounded-2xl border border-border/40">
                <Stethoscope className="h-8 w-8 text-[#123d2d] mb-4" />
                <h3 className="font-heading text-xl font-bold text-[#133c2c] mb-2">
                  Clinical Review
                </h3>
                <p className="text-[#6b7b73] text-sm leading-relaxed">
                  Taking multiple medications? We'll review your regimen to flag potential
                  interactions and optimize your therapy.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/2347083725382"
                target="_blank"
                rel="noreferrer"
                className="pill-button pill-button--mint w-full sm:w-auto justify-center"
              >
                Talk to a pharmacist <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
