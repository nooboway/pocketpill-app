import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, ShieldCheck, Stethoscope } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/oncology")({
  component: OncologyPage,
  head: () => ({
    meta: [
      { title: "Oncology & Specialty Care — PocketPill" },
      { name: "description", content: "Expert sourcing for hard-to-find oncology medications and specialized clinical pharmacy care." },
    ],
  }),
});

function OncologyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Oncology & Specialty Care"
              title="Expert sourcing for specialized treatments."
              description="Managing cancer or a complex condition is overwhelming enough without having to hunt for the right medications. We source hard-to-find treatments and provide the clinical guidance you need."
            />

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Specialty Sourcing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We leverage our extensive network to reliably source complex oncology medications and specialty therapeutics, ensuring you get what you need without the runaround.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Side Effect Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our clinical pharmacists work with you to understand and mitigate side effects from aggressive therapies, improving your daily quality of life.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interaction Monitoring</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We rigorously review your entire medication profile to prevent dangerous interactions between your specialty treatments and daily prescriptions.
                </p>
              </div>
            </div>

            <div className="mt-20 rounded-3xl bg-[#f0f5f2] p-10 text-center">
              <h2 className="text-2xl font-bold font-heading mb-4">Get the specialized care you deserve.</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Speak with our team to help source your specialized medications or schedule a clinical consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/contact">Book a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/shop">Source a medication</Link>
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
