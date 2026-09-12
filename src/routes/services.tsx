import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, HeartPulse, Pill, Stethoscope, UserRound, MessageSquare, Brain, Baby, FlaskConical, Cross } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — PocketPill" },
      { name: "description", content: "Explore telehealth services from PocketPill: urgent care, mental health, prescriptions, chronic care, dermatology, and more." },
      { property: "og:title", content: "Services — PocketPill" },
      { property: "og:description", content: "Explore telehealth services from PocketPill: urgent care, mental health, prescriptions, chronic care, dermatology, and more." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    icon: FlaskConical,
    title: "Oncology & specialty care",
    description: "Expert sourcing for hard-to-find oncology medications and specialized clinical pharmacy care.",
    details: ["Specialty medication sourcing", "Side effect management", "Clinical pharmacy support"],
    href: "/services/oncology",
  },
  {
    icon: Cross,
    title: "Clinical pharmacy",
    description: "Human-first clinical guidance, medication counseling, interactions check, and chronic care management.",
    details: ["Medication counseling", "Interactions check", "Chronic care management"],
    href: "/services/clinical-pharmacy",
  },
  {
    icon: Brain,
    title: "Mental health",
    description: "Speak with licensed therapists and psychiatrists for anxiety, depression, stress, ADHD, and medication management.",
    details: ["Therapy sessions", "Psychiatric evaluations", "Medication management", "Crisis support resources"],
    href: "/services/mental-health",
  },
  {
    icon: Stethoscope,
    title: "Urgent care",
    description: "Get quick treatment for colds, flu, sinus infections, allergies, rashes, minor injuries, UTIs, and more.",
    details: ["Symptom assessment", "Treatment plans", "Prescriptions if needed", "Follow-up messaging"],
  },
  {
    icon: HeartPulse,
    title: "Primary care",
    description: "Build an ongoing relationship with a primary care provider who knows your health history.",
    details: ["Annual wellness visits", "Preventive screenings", "Health risk reviews", "Referral coordination"],
  },
  {
    icon: Pill,
    title: "Prescriptions",
    description: "Have prescriptions reviewed, renewed, or sent to your pharmacy after a provider consultation.",
    details: ["New prescriptions", "Refills", "Pharmacy selection", "Medication counseling"],
  },
  {
    icon: Activity,
    title: "Chronic care",
    description: "Ongoing management for diabetes, hypertension, high cholesterol, asthma, thyroid, and other conditions.",
    details: ["Condition monitoring", "Lab orders", "Medication adjustments", "Care plan updates"],
  },
  {
    icon: UserRound,
    title: "Dermatology",
    description: "Upload photos and get expert skin diagnoses, treatment plans, and prescription skincare advice.",
    details: ["Photo-based visits", "Acne & eczema", "Rash evaluation", "Skin checks"],
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Care for children from infancy through adolescence, including common illnesses, feeding, and developmental questions.",
    details: ["Common childhood illness", "Newborn guidance", "Medication dosing", "School & camp forms"],
  },
  {
    icon: MessageSquare,
    title: "24/7 messaging",
    description: "Message your care team anytime for follow-up questions, prescription refills, and lab results.",
    details: ["Secure messaging", "Async responses", "Provider-led answers", "Prescription refill requests"],
  },
];

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Services"
              title="Care for every stage of life"
              description="From everyday issues to specialized support, PocketPill connects you with providers who can help."
            />
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col border-border/60 bg-card transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="mt-4 mb-6 flex-1 space-y-1.5">
                      {service.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground">&bull; {detail}</li>
                      ))}
                    </ul>
                    {service.href && (
                      <div className="mt-auto pt-4 border-t border-border/50">
                        <Link to={service.href as any} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                          Learn more about {service.title.toLowerCase()} <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                <Link to="/contact">Book a visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
