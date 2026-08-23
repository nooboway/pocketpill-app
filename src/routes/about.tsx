import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, ShieldCheck, Users } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import doctorsImage from "@/assets/doctors.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — PocketPill" },
      { name: "description", content: "Learn about PocketPill's mission to make high-quality healthcare accessible, convenient, and trustworthy." },
      { property: "og:title", content: "About — PocketPill" },
      { property: "og:description", content: "Learn about PocketPill's mission to make high-quality healthcare accessible, convenient, and trustworthy." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  {
    icon: Heart,
    title: "Patient-first care",
    description: "We put your needs, time, and comfort at the center of every decision.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and safety",
    description: "Your privacy is non-negotiable. Every interaction is secure, encrypted, and HIPAA-compliant.",
  },
  {
    icon: Award,
    title: "Clinical excellence",
    description: "Our providers are certified doctors, pharmacists and team of healthcare professionals, vetted, and trained to deliver high-quality virtual care.",
  },
  {
    icon: Users,
    title: "Access for all",
    description: "We're building a healthcare experience that works for every schedule, location, and budget.",
  },
];

const stats = [
  { value: "50k+", label: "Patients served" },
  { value: "500+", label: "Certified doctors, pharmacists and team of healthcare professionals" },
  { value: "40+", label: "States covered" },
  { value: "4.9", label: "Patient rating" },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <SectionHeader
                  align="left"
                  eyebrow="About us"
                  title="Care should fit your life, not the other way around"
                  description="PocketPill was founded on a simple belief: quality healthcare should be easy to access, easy to understand, and easy to afford."
                />
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    We started PocketPill after seeing too many people delay care because of long waits, confusing costs, and inconvenient appointments. Our platform connects patients with certified doctors, pharmacists and team of healthcare professionals through secure video visits, making it possible to get treatment, prescriptions, and peace of mind from anywhere.
                  </p>
                  <p>
                    Today, PocketPill serves thousands of patients across the country with services ranging from urgent care and mental health to chronic condition management and prescription support.
                  </p>
                </div>
                <div className="mt-8">
                  <Button className="bg-black text-white hover:bg-black/90" asChild>
                    <Link to="/contact">Book a visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 rounded-full bg-primary/10/40 blur-3xl" />
                <img
                  src={doctorsImage}
                  alt="PocketPill certified doctors, pharmacists and team of healthcare professionals"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Our values"
              title="What drives us every day"
              description="Our values shape how we build, care, and serve."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <value.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-black text-white">
          <div className="container-tight">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-5xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
