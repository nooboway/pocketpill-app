import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Dumbbell } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/services/weight-loss")({
  component: WeightLossPage,
});

function WeightLossPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-24">
          <div className="container-tight text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8">
              <Dumbbell className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Maximize Your Energy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              Science-backed weight management protocols built for men. Shed the extra weight, boost your stamina, and perform at your absolute best every single day.
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
              <p className="text-muted-foreground">Clear, straightforward pricing. You're paying for a personalized, actionable blueprint to transform your energy levels.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Tier 1 */}
              <Card className="flex flex-col border-border/60">
                <CardHeader>
                  <CardTitle className="text-xl">1. Initial Screening</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">₦1,500</div>
                    <p className="text-muted-foreground mb-6 text-sm">Find out if our protocol is right for you. The fee is fully credited toward your package if you proceed.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Medical suitability check</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Deducted from final cost</li>
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
                    <div className="text-3xl font-bold mb-2">₦15,000</div>
                    <p className="text-muted-foreground mb-6 text-sm">Consultation bundled with a comprehensive, personalized weight management plan document.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 1-on-1 Doctor Consult</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Written Protocol Document</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Lifestyle & Medication guidance</li>
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
                    <div className="text-3xl font-bold mb-2">₦25,000 <span className="text-lg text-muted-foreground font-normal">/ mo</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Continuous optimization, monthly check-ins, and adjustments to ensure you hit your goals.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Monthly progress review</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Medication management</li>
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
                  <p className="text-lg italic mb-6">"I wasn't looking to be a bodybuilder, I just wanted to get rid of my gut and get my stamina back. I started the medical weight loss protocol and having a doctor on WhatsApp to talk through the slight nausea in the first week was reassuring. The appetite suppression is real. I'm down 8kg in 6 weeks."</p>
                  <div className="font-semibold">— Paul E.</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg italic mb-6">"The ongoing management kept me from falling off the wagon. Having a doctor review my progress monthly and discreetly deliver my refills to my office made all the difference. My clothes fit perfectly now and my energy is through the roof."</p>
                  <div className="font-semibold">— Kelechi M.</div>
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
