import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/services/hair-loss")({
  component: HairLossPage,
});

function HairLossPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-24">
          <div className="container-tight text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Regrow Your Confidence
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              Stop thinning in its tracks and promote aggressive regrowth. Clinically proven, highly effective hair recovery protocols tailored to your genetics.
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
              <p className="text-muted-foreground">Clear, straightforward pricing. You're paying for a personalized, actionable blueprint for hair restoration.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Tier 1 */}
              <Card className="flex flex-col border-border/60">
                <CardHeader>
                  <CardTitle className="text-xl">1. Initial Screening</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">Free</div>
                    <p className="text-muted-foreground mb-6 text-sm">Find out if our protocol is right for you with zero commitment. Credited toward your package if you proceed.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Risk-free evaluation</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Quick intake form</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full" asChild><Link to="/contact">Start Screening</Link></Button>
                </CardContent>
              </Card>

              {/* Tier 2 */}
              <Card className="flex flex-col border-primary/50 shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Most Popular</div>
                <CardHeader>
                  <CardTitle className="text-xl">2. Protocol Package</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">₦10,000 <span className="text-lg text-muted-foreground font-normal">– ₦15,000</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Consultation bundled with a comprehensive, personalized hair regrowth plan document.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 1-on-1 Doctor Consult</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Written Protocol Document</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Prescription formulation</li>
                    </ul>
                  </div>
                  <Button className="w-full" asChild><Link to="/contact">Get Your Protocol</Link></Button>
                </CardContent>
              </Card>

              {/* Tier 3 */}
              <Card className="flex flex-col border-border/60">
                <CardHeader>
                  <CardTitle className="text-xl">3. Ongoing Management</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">₦20,000 <span className="text-lg text-muted-foreground font-normal">– ₦30,000 / mo</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Continuous optimization and monthly supply bundles delivered straight to you.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Product supply bundle</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Progress photo reviews</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Formula adjustments</li>
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
                  <p className="text-lg italic mb-6">"I noticed my hairline receding heavily during a stressful year at work and panicked. PocketPill gave me a step-by-step protocol rather than just selling me some random oil. Three months in, the density is visibly thicker and my scalp is no longer showing. The monthly deliveries make it foolproof."</p>
                  <div className="font-semibold">— Emeka D.</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg italic mb-6">"The bundled monthly management is what saves me. I don't have to think about refills or checking in with a clinic. I just follow the serum routine, snap progress photos for the doc every month, and let them adjust the formula. Looking in the mirror feels good again."</p>
                  <div className="font-semibold">— Chike S.</div>
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
