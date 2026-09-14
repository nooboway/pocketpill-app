import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/lineage")({
  component: LineagePage,
  head: () => ({
    meta: [
      { title: "Lineage | PocketPill" },
      {
        name: "description",
        content:
          "You are abroad. They are at home. A pharmacist calls before the medicine finishes. They never log in.",
      },
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
            <span className="text-[#123d2d] font-bold tracking-widest text-sm uppercase mb-6 block">
              LINEAGE
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8">
              Their health, cared for. Even when they can't go online.
            </h1>
            <div className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-6">
              <p>
                Lineage is the system that keeps your parent on their medicine when you are not in
                the country and they cannot use an app.
              </p>
              <p>That is the whole idea.</p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-8 w-full sm:w-auto"
                asChild
              >
                <Link to="/lineage/start">
                  Set up care for a parent <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 w-full sm:w-auto border-border/60 hover:bg-black/5"
                asChild
              >
                <a
                  href="https://wa.me/2347083725382?text=Hi%2C%20I%20want%20to%20set%20up%20Lineage%20for%20my%20parent%20in%20Nigeria."
                  target="_blank"
                  rel="noreferrer"
                >
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
              You are abroad. Your parent is in Lagos or Onitsha. They are not going to download
              anything, remember a refill date, or argue with a caregiver about a missing drug. You
              also do not want to keep sending money on WhatsApp and hoping it became the right
              tablets.
            </p>
            <p>So Lineage does the remembering for both of you.</p>
            <p>
              You set up their name, their caregiver's phone, and their prescription. You put money
              in a wallet that can only be used for their treatment. Not for cash. Not for "I will
              buy it when I pass the shop." The system checks that the prescription is real and has
              not already been used somewhere else. Then it watches the calendar.
            </p>
            <p>
              Before the pack in the house runs out, a pharmacist calls. The next pack is already
              arranged. If something is wrong (fake script, missed call, drug that never showed up)
              the next payment stops and you get told. If everything is fine, it just happens again.
            </p>
            <p>
              They never log in. They hear a phone call and someone they trust collects the medicine
              from a place they already know.
            </p>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="py-24 bg-[#123d2d] text-white">
          <div className="container-tight max-w-4xl text-center">
            <p className="text-green-200/80 uppercase tracking-widest text-sm font-semibold mb-8">
              So if a relative asks &ldquo;what is this thing?&rdquo;
            </p>
            <blockquote className="font-heading text-2xl sm:text-3xl leading-snug font-medium italic space-y-6">
              <p>It is not a delivery app and it is not another pharmacy.</p>
              <p>
                It is the automatic loop that pays for my parent&rsquo;s drugs, checks the
                prescription, calls them before they run out, and will not spend the next kobo if
                something is off.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Pharmacy Note */}
        <section className="py-16 bg-background">
          <div className="container-tight max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <p>
              For the small pharmacy down the road, Lineage is also how they get expensive cold
              drugs they cannot afford to keep on the shelf. They do not gamble their capital. The
              system holds the stock and releases it only for a patient with a validated
              prescription.
            </p>
          </div>
        </section>

        {/* How it starts */}
        <section className="section-padding bg-cream/30 border-t border-border/50">
          <div className="container-tight max-w-3xl">
            <SectionHeader eyebrow="How it starts" title="Four simple steps" align="center" />
            <div className="mt-12 space-y-6">
              {[
                "You send their name, the caregiver's number, and a photo of the prescription.",
                "A pharmacist checks the paper.",
                "You fund the wallet.",
                "We take it from there.",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-border/40 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123d2d] text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-medium text-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-12 h-14 text-lg"
                asChild
              >
                <Link to="/lineage/start">
                  Set up care for a parent <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
