import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cross, FileHeart, UserRoundPlus } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/clinical-pharmacy")({
  component: ClinicalPharmacyPage,
  head: () => ({
    meta: [
      { title: "Clinical Pharmacy — PocketPill" },
      { name: "description", content: "Human-first clinical guidance, medication counseling, interactions check, and chronic care management." },
    ],
  }),
});

function ClinicalPharmacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Clinical Pharmacy"
              title="Expert medication guidance, human-first care."
              description="Good care is more than just a product in a basket. Connect directly with our clinical pharmacists to understand your medications, manage side effects, and optimize your health plan."
            />

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <UserRoundPlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Medication Counseling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Get clear, straightforward explanations about what you're taking, how it works, and what to expect—without the clinical distance.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <Cross className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactions Check</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Taking multiple prescriptions? We thoroughly review your regimen to prevent dangerous drug interactions before they happen.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <FileHeart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chronic Care Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stay on top of long-term conditions like diabetes or hypertension with ongoing monitoring and proactive medication adjustments.
                </p>
              </div>
            </div>

            <div className="mt-20 rounded-3xl bg-[#f0f5f2] p-10 text-center">
              <h2 className="text-2xl font-bold font-heading mb-4">Speak to a clinical pharmacist today.</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                No long queues. No confusing language. Just reliable, professional support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/contact">Book a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
