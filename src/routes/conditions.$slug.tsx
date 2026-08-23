import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { getConditionBySlug, conditions } from "@/lib/conditions";

export const Route = createFileRoute("/conditions/$slug")({
  component: ConditionPage,
});

function ConditionPage() {
  const { slug } = Route.useParams();
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground">Condition not found</h1>
            <p className="mt-4 text-muted-foreground">The condition you're looking for doesn't exist.</p>
            <Button className="mt-6 bg-black text-white hover:bg-black/90" asChild>
              <Link to="/">Go home</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container-tight max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              ← Back to home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <condition.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                What We Treat
              </span>
            </div>
            <h1 className="heading-xl text-foreground">{condition.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
              {condition.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                <Link to="/book" search={{ condition: condition.slug }}>
                  Book a consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-we-help">Learn more</a>
              </Button>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section id="how-we-help" className="section-padding bg-muted">
          <div className="container-tight max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              How PocketPill helps with {condition.title.toLowerCase()}
            </h2>
            <ul className="mt-8 space-y-4">
              {condition.howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why PocketPill */}
        <section className="section-padding bg-background">
          <div className="container-tight max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Why choose PocketPill?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {condition.whyPocketPill.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-muted p-5 border border-border/50">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted">
          <div className="container-tight max-w-3xl">
            <div className="rounded-xl border border-border/50 bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Important notice
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {condition.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="heading-lg text-white">Ready to take the first step?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Start a private consultation today. No waiting rooms. No judgment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
                <Link to="/book" search={{ condition: condition.slug }}>Book a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
                <a href="https://shop.pocketpill.co">Visit the Shop</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
