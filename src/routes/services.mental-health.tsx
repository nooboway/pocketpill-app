import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, HeartHandshake, LockKeyhole } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/mental-health")({
  component: MentalHealthPage,
  head: () => ({
    meta: [
      { title: "Mental Health — PocketPill" },
      { name: "description", content: "Speak with licensed therapists and psychiatrists for anxiety, depression, stress, ADHD, and medication management." },
    ],
  }),
});

function MentalHealthPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Mental Health"
              title="Private support that meets you where you are."
              description="Taking care of your mind shouldn't involve crowded waiting rooms or awkward explanations. Get access to discreet, professional mental health support from the comfort of home."
            />

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Psychiatric Evaluation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connect with licensed professionals who can accurately assess your needs and develop a customized treatment plan.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Therapy Sessions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Schedule regular 1:1 virtual therapy sessions with experienced counselors to manage anxiety, depression, and stress.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft mb-4">
                  <LockKeyhole className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Discreet Management</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have your mental health medications delivered discreetly in unbranded packaging directly to your door.
                </p>
              </div>
            </div>

            <div className="mt-20 rounded-3xl bg-[#f0f5f2] p-10 text-center">
              <h2 className="text-2xl font-bold font-heading mb-4">Begin your mental health journey today.</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Schedule a confidential consultation to discuss your needs and find the right path forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/contact">Book a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
