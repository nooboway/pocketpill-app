import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Droplet } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/services/scarring")({
  component: ScarringPage,
});

function ScarringPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-24">
          <div className="container-tight text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8">
              <Droplet className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Erase the Past
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              Even out your skin tone and erase past damage. Our powerful, personalized dermatological treatments target scarring and hyperpigmentation so you can look your absolute best.
            </p>
            <Button size="lg" className="px-8" asChild>
              <Link to="/contact">Start Your Protocol <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        {/* Pricing Structure */}
        <section className="py-24 bg-background">
          <div className="container-tight">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold mb-4">Invest in Your Confidence</h2>
              <p className="text-muted-foreground">Clear, straightforward pricing. You're paying for a personalized, actionable blueprint to restore your skin's clarity.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
              {/* Tier 1 */}
              <Card className="flex flex-col border-primary/50 shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Protocol Package</div>
                <CardHeader>
                  <CardTitle className="text-xl">1. Initial Protocol</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">₦20,000</div>
                    <p className="text-muted-foreground mb-6 text-sm">Comprehensive photo analysis bundled with a personalized clinical action plan.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Photo-based Dermatologist Consult</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Written Protocol Document</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Prescription formulation</li>
                    </ul>
                  </div>
                  <Button className="w-full" asChild><Link to="/contact">Get Your Protocol</Link></Button>
                </CardContent>
              </Card>

              {/* Tier 2 */}
              <Card className="flex flex-col border-border/60">
                <CardHeader>
                  <CardTitle className="text-xl">2. Ongoing Management</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">₦25,000 <span className="text-lg text-muted-foreground font-normal">/ mo</span></div>
                    <div className="text-sm font-semibold mb-2">or ₦60,000 <span className="text-muted-foreground font-normal">flat 3-month package</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Continuous optimization, formula adjustments, and monitoring to ensure fast, consistent fading.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Monthly progress review</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Refills and supply management</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Protocol adjustments</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full" asChild><Link to="/contact">Subscribe</Link></Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/50 py-24">
          <div className="container-tight">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">Results that Speak</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg italic mb-6">"I had dark hyperpigmentation on my jawline from old shaving bumps that just wouldn't fade. The PocketPill protocol gave me clinical-strength formulas I couldn't get at the pharmacy. Faded them significantly within the first two months. Highly recommended if you want real results."</p>
                  <div className="font-semibold">— David U.</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg italic mb-6">"The 3-month package was exactly what I needed. It held me accountable to the routine, and having the doctor review my progress photos every month meant we could adjust the strength of the cream. My skin tone is finally even."</p>
                  <div className="font-semibold">— Chinedu K.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
