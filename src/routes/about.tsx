import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About PocketPill" },
      { name: "description", content: "A Nigerian e-pharmacy. Pharmacists you can reach. Medicines we will go and find." },
      { property: "og:title", content: "About PocketPill" },
      { property: "og:description", content: "A Nigerian e-pharmacy. Pharmacists you can reach. Medicines we will go and find." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight max-w-3xl pt-12 sm:pt-24 pb-12">
            <span className="text-[#123d2d] font-bold tracking-widest text-sm uppercase mb-6 block">ABOUT</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-12">
              We are fostering trusted access to emergency medicines, clinical pharmacists, and specialized mental healthcare.
            </h1>
            
            <div className="space-y-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              <p>
                That is the whole story. It is why we started. So anyone can reach a pharmacist, and get medicines they can trust, when they need to.
              </p>
              <p>
                PocketPill is a Nigerian telepharmacy. If the medicine is for you, tell us what you need and we will go find it. If it is for a parent back home who will never open this website, that is what Lineage is for.
              </p>
              <p>
                We work hard to be who you think of when you want proper care and medicines you can be sure of.
              </p>
              
              <div className="pt-8 flex flex-col items-start">
                <span 
                  className="text-4xl text-foreground/80 mb-1 -rotate-2 origin-left italic" 
                  style={{ fontFamily: "'Dancing Script', 'Caveat', 'Brush Script MT', cursive" }}
                >
                  J. Onile
                </span>
                <p className="font-heading font-medium text-foreground">Dr. J. Onile</p>
                <p className="text-sm">Bpharm, PharmD, MPSN</p>
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-border/50 pt-8">
              <Link to="/find" className="text-primary font-medium hover:underline flex items-center">
                Find a medicine <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/lineage" className="text-primary font-medium hover:underline flex items-center">
                Lineage <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-16 text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-4">
                If you want to talk to a person before anything else, talk to a pharmacist.
              </p>
              <Button size="lg" className="bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-8 w-full sm:w-auto" asChild>
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
