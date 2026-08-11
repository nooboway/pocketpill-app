import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/services/sexual-health")({
  component: SexualHealthPage,
});

function SexualHealthPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-24">
          <div className="container-tight text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-8">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Reclaim Your Peak Performance
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
              Personalized protocols for erectile dysfunction and premature ejaculation. Built to restore your confidence and stamina with science-backed treatments, delivered discreetly.
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
              <p className="text-muted-foreground">Clear, straightforward pricing. You're not just paying for a chat—you're paying for a personalized, actionable blueprint.</p>
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
                    <p className="text-muted-foreground mb-6 text-sm">Find out if our protocol is right for you with zero commitment. If you proceed, you're credited toward your package.</p>
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
                    <div className="text-3xl font-bold mb-2">₦7,500 <span className="text-lg text-muted-foreground font-normal">/ text</span></div>
                    <div className="text-sm font-semibold mb-2">or ₦15,000 <span className="text-muted-foreground font-normal">/ voice</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Consultation bundled with a comprehensive, personalized plan document tailored to your specific physiology.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> 1-on-1 Doctor Consult</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Written Protocol Document</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Prescription if applicable</li>
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
                    <div className="text-3xl font-bold mb-2">₦20,000 <span className="text-lg text-muted-foreground font-normal">/ mo</span></div>
                    <div className="text-sm font-semibold mb-2">or ₦30,000 <span className="text-muted-foreground font-normal">/ mo VIP</span></div>
                    <p className="text-muted-foreground mb-6 text-sm">Continuous optimization, monthly check-ins, and adjustments to ensure you stay at peak performance.</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Monthly progress review</li>
                      <li className="flex items-center text-sm"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Unlimited messaging</li>
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
                  <p className="text-lg italic mb-6">"I kept putting this off because the thought of sitting in a waiting room to talk about my erections was terrifying. PocketPill made it entirely discreet via WhatsApp. The doctor explained the actual cause, gave me a clear protocol, and delivered the medication straight to my door. My confidence in the bedroom has completely returned."</p>
                  <div className="font-semibold">— Tunde O.</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg italic mb-6">"The written plan was what sold me. It wasn't just a 5-minute chat and a pill, it was a comprehensive blueprint covering my stress levels, lifestyle, and stamina. Having that ongoing check-in means I actually stick to it."</p>
                  <div className="font-semibold">— Michael A.</div>
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
