import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Brain, FlaskConical, Stethoscope } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Care — PocketPill" },
      { name: "description", content: "Explore specialized pharmacy care from PocketPill: oncology, mental health, and clinical pharmacy." },
      { property: "og:title", content: "Care — PocketPill" },
      { property: "og:description", content: "Explore specialized pharmacy care from PocketPill: oncology, mental health, and clinical pharmacy." },
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
    title: "Oncology & specialty",
    description: "Expert sourcing for hard-to-find oncology medications and specialized clinical pharmacy care.",
    details: ["Specialty medication sourcing", "Side effect management", "Clinical pharmacy support"],
    cta: "Message about oncology",
    href: "https://wa.me/2347083725382?text=Hi%2C%20I%20need%20help%20with%20oncology%20sourcing.",
  },
  {
    icon: Brain,
    title: "Mental health",
    description: "Discreet access and compassionate pharmacist support for mental health prescriptions.",
    details: ["Regimen management", "Medication sourcing", "Confidential support"],
    cta: "Message about mental health",
    href: "https://wa.me/2347083725382?text=Hi%2C%20I%20need%20help%20with%20mental%20health%20pharmacy.",
  },
  {
    icon: Stethoscope,
    title: "Clinical pharmacy",
    description: "Human-first clinical guidance, medication counseling, interactions check, and profile review.",
    details: ["Medication counseling", "Interactions check", "Review of complex regimens"],
    cta: "Message for clinical review",
    href: "https://wa.me/2347083725382?text=Hi%2C%20I%20need%20a%20clinical%20pharmacy%20review.",
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
              eyebrow="Care"
              title="Expert pharmacy care"
              description="PocketPill connects you with licensed pharmacists who can help you manage complex regimens safely."
            />
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col border-border/60 bg-card transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d9f0df]">
                      <service.icon className="h-6 w-6 text-[#123d2d]" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="mt-4 mb-6 flex-1 space-y-1.5">
                      {service.details.map((detail) => (
                        <li key={detail} className="text-sm text-muted-foreground">&bull; {detail}</li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <Button className="w-full bg-[#123d2d] text-white hover:bg-[#123d2d]/90" asChild>
                        <a href={service.href} target="_blank" rel="noreferrer">
                          {service.cta} <ArrowUpRight className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
