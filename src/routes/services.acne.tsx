import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/services/acne")({
  component: AcnePage,
});

function AcnePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-24">
          <div className="container-tight text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Clear Skin is Confident Skin
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              Get a tailored, prescription-grade acne protocol that actually works. We target the root cause so you can put your best face forward.
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
              <p className="text-muted-foreground">Clear, straightforward pricing. You're paying for a personalized, actionable blueprint for clear skin.</p>
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
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Photo analysis</li>
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
                    <div className="text-3xl font-bold mb-2">₦10,000</div>
                    <p className="text-muted-foreground mb-6 text-sm">Consultation bundled with a comprehensive, personalized acne-clearing plan document.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 1-on-1 Doctor Consult</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Written Protocol Document</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Topical/Oral Prescriptions</li>
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
                    <div className="text-3xl font-bold mb-2">₦18,000 <span className="text-lg text-muted-foreground font-normal">/ mo</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Continuous optimization, monthly check-ins, and adjustments to keep breakouts away for good.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Monthly progress review</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Prescription refills</li>
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
                  <p className="text-lg italic mb-6">"I had cystic breakouts on my jawline that nothing over-the-counter could fix. PocketPill set me up with a medical-grade protocol that actually targeted the inflammation. The first few weeks were an adjustment, but having the doctor on WhatsApp to talk through the dryness kept me from quitting. By week 6, my skin was completely clear."</p>
                  <div className="font-semibold">— Seyi B.</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg italic mb-6">"I was tired of spending money on useless cleansers. The photo analysis via WhatsApp was quick and the prescription routine they built for me was straightforward. Best of all, my monthly refills are delivered in Lagos without any hassle. The difference in my skin texture is unbelievable."</p>
                  <div className="font-semibold">— Kalu K.</div>
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
