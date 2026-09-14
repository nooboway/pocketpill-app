import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PhoneCall, ShieldCheck, UserMinus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/lineage")({
  component: LineagePage,
  head: () => ({
    meta: [
      { title: "Lineage | PocketPill" },
      { name: "description", content: "You are abroad. They are at home. A pharmacist calls before the medicine finishes. They never log in." },
    ],
  }),
});

function LineagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="section-padding bg-cream relative overflow-hidden">
          <div className="container-tight max-w-4xl text-center">
            <span className="text-[#123d2d] font-bold tracking-widest text-sm uppercase mb-6 block">LINEAGE</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8">
              Their health, handled &mdash; even when they never go online.
            </h1>
            <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-6">
              <p>
                Lineage is the system that keeps your parent on their medicine when you are not in the country and they cannot use an app.
              </p>
              <p>
                That is the whole idea.
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-8 w-full sm:w-auto" asChild>
                <Link to="/lineage/start">Set up care for a parent <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto border-border/60 hover:bg-black/5" asChild>
                <a href="https://wa.me/2347083725382?text=Hi%2C%20I%20want%20to%20set%20up%20Lineage%20for%20my%20parent%20in%20Nigeria." target="_blank" rel="noreferrer">
                  Talk to a pharmacist
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Body Text */}
        <section className="py-16 bg-background">
          <div className="container-tight max-w-2xl text-lg leading-relaxed text-foreground space-y-8">
            <p>
              You left home to build a future. But building a future often means leaving the people who built you.
            </p>
            <p>
              You are in London, or Dallas, or Toronto. They are in Lagos, or Onitsha. Between you are thousands of miles, time zones, and the quiet, nagging fear of a missed phone call. When they need their medicine &mdash; for their heart, for their blood sugar, for the quiet aches of growing older &mdash; you cannot be there to drive them to the pharmacy. You cannot read the label. You cannot hand them the glass of water.
            </p>
            <p>
              So, you do what you can. You send money. You make calls. You hope the money becomes the right tablets, at the right time, from a genuine shelf. But money isn't care. Money is just a transaction.
            </p>
            <p>
              Lineage is the invisible thread across the ocean. You tell us what they need, and you fund their care. We take it from there.
            </p>
            <p>
              They do not need to download an app. They do not need to remember a password. We do not ask them to navigate the future you live in; we meet them exactly where they are. Before their medicine runs out, a pharmacist calls their phone. A real, human voice checking in. The prescription is verified. The next pack is prepared.
            </p>
            <p>
              If a call goes unanswered, or if a medicine doesn't arrive, the system stops. The money is protected, and you are alerted immediately. But when everything is fine, the quiet rhythm of care simply continues.
            </p>
          </div>
        </section>

        {/* Three Lines */}
        <section className="py-16 bg-cream/40">
          <div className="container-tight max-w-5xl">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-border/50 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#d9f0df] text-[#123d2d] mb-6">
                  <UserMinus className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">They never log in.</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-border/50 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#d9f0df] text-[#123d2d] mb-6">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">They hear a human voice.</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-border/50 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#d9f0df] text-[#123d2d] mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Someone they trust collects it.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="py-24 bg-[#123d2d] text-white">
          <div className="container-tight max-w-4xl text-center">
            <p className="text-green-200/80 uppercase tracking-widest text-sm font-semibold mb-8">If anyone asks you what Lineage is, tell them this:</p>
            <blockquote className="font-heading text-2xl sm:text-3xl leading-snug font-medium italic space-y-6">
              <p>
                It is not a delivery service. It is not another app.
              </p>
              <p>
                It is the peace of mind that when you cannot be there, someone accountable is. It is the guarantee that the people who gave you the world will never have to face their health alone.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Pharmacy Note */}
        <section className="py-16 bg-background">
          <div className="container-tight max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <p>
              For the small pharmacy on their street, Lineage is a lifeline. It allows them to safely hold the expensive, life-saving drugs they could never afford to keep on a gamble. The medicine waits patiently for the patient it belongs to.
            </p>
          </div>
        </section>

        {/* How it starts */}
        <section className="section-padding bg-cream/30 border-t border-border/50">
          <div className="container-tight max-w-3xl">
            <SectionHeader
              eyebrow="How it starts"
              title="Four simple steps"
              align="center"
            />
            <div className="mt-12 space-y-6">
              {[
                "You send her name, the caregiver's number, and a photo of the prescription.",
                "A pharmacist checks the paper.",
                "You fund the wallet.",
                "We take it from there."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-border/40 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123d2d] text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-medium text-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-12 h-14 text-lg" asChild>
                <Link to="/lineage/start">Set up care for a parent <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
