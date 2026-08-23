import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, ShieldAlert, ShieldCheck, HeartHandshake, Smile, Lock, HelpCircle } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQAccordion } from "@/components/faq-accordion";

export const Route = createFileRoute("/mental-health")({
  component: MentalHealthPage,
  head: () => ({
    meta: [
      { title: "Private Mental Health Support & Counseling — PocketPill" },
      { name: "description", content: "Discreet, stigma-free mental health support in Nigeria. Connect with licensed psychologists and psychiatrists online via private chat or secure video." },
      { property: "og:title", content: "Private Mental Health Support & Counseling — PocketPill" },
      { property: "og:description", content: "Discreet, stigma-free mental health support in Nigeria. Speak with certified therapists from the privacy of your phone." },
      { property: "og:url", content: "/mental-health" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mental-health" }],
  }),
});

const mentalServices = [
  {
    icon: Smile,
    title: "Anxiety & Depression",
    description: "Supportive, evidence-based therapy to help you navigate persistent worry, low mood, panic, and emotional fatigue.",
  },
  {
    icon: ShieldAlert,
    title: "Stress & Professional Burnout",
    description: "Tailored coping strategies for professionals navigating high-pressure careers, work-life balance, and chronic exhaustion.",
  },
  {
    icon: HeartHandshake,
    title: "Relationship & Family Counseling",
    description: "Navigate interpersonal conflicts, communication barriers, and family stressors in a supportive, objective space.",
  },
  {
    icon: Brain,
    title: "Psychiatric Consultations",
    description: "Comprehensive medical evaluations by licensed psychiatrists for clinical conditions requiring specialized care plans.",
  },
];

const mentalFaqs = [
  {
    question: "Is my consultation completely confidential?",
    answer: "Yes, 100%. We understand that mental health carries a significant stigma in Nigeria. Your sessions are conducted on highly secure, encrypted channels. No physical records are sent to your home or office, and your details are never shared with third parties without your explicit consent.",
  },
  {
    question: "How do the sessions work?",
    answer: "You can choose between private video sessions, voice calls, or secure text-based consultations. We match you with a therapist who understands your unique cultural and personal context, allowing you to speak freely from the safety of your own space.",
  },
  {
    question: "Are your therapists and psychiatrists licensed?",
    answer: "Absolutely. All our mental health professionals are certified clinical psychologists and licensed psychiatrists fully vetted by national regulatory boards. They have extensive experience addressing mental health concerns within the West African context.",
  },
  {
    question: "Can I get medication prescribed?",
    answer: "If your consulting psychiatrist determines that medication is a necessary part of your treatment plan, they can issue a prescription. Any prescribed medication can be filled and delivered to you in plain, completely discreet packaging.",
  },
  {
    question: "What if I need immediate crisis support?",
    answer: "PocketPill is an outpatient telehealth service and is not designed for acute emergencies. If you are experiencing a severe mental health crisis or thoughts of self-harm, please contact local emergency resources or dedicated support hotlines in Nigeria immediately (such as the Mentally Aware Nigeria Initiative - MANI).",
  },
];

function MentalHealthPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,100,25,0.08),transparent_50%)]" />
          <div className="container-tight relative z-10 grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Stigma-Free Telehealth
              </span>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
                Your mental wellbeing deserves a safe space.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mental health is largely ignored in primary healthcare systems across Nigeria. PocketPill bridges this gap, providing confidential, professional counseling and psychiatric support right from your phone.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/contact">Book a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#about-service">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md rounded-3xl border border-border/60 bg-muted p-8 shadow-2xl relative">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  <Brain className="h-8 w-8 animate-pulse" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Why Virtual Care?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Lock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">100% Privacy</p>
                      <p className="text-sm text-muted-foreground">No clinic waiting rooms. Chat or speak to a provider privately.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Zero Judgment</p>
                      <p className="text-sm text-muted-foreground">Vetted providers trained to handle cultural stigma and sensitive topics.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Smile className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Integrated Support</p>
                      <p className="text-sm text-muted-foreground">Combine therapy sessions with private pharmacy delivery if needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Nigeria Context Section */}
        <section id="about-service" className="section-padding bg-muted">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Addressing the Gap</span>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Breaking the Silence in Primary Care
              </h2>
              <div className="text-base leading-relaxed text-muted-foreground space-y-4 text-left md:text-center mt-6">
                <p>
                  In Nigeria, mental health issues are often uncaptured and unsupported by traditional primary healthcare clinics. Societal pressure, institutional neglect, and heavy stigma frequently prevent individuals from seeking the help they need.
                </p>
                <p>
                  At PocketPill, we believe that emotional and mental wellbeing is as important as physical health. By utilizing secure messaging, video calls, and anonymous options, we give you direct, professional access to licensed experts without the fear of social exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Provide */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Our Care"
              title="How We Support You"
              description="From daily coping mechanisms to clinical psychiatric consultations, find the care you need."
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mentalServices.map((service) => (
                <Card key={service.title} className="border-border/60 bg-card transition-shadow hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-muted">
          <div className="container-tight max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Mental Health & Privacy"
              description="Common questions about consulting for mental wellness anonymously in West Africa."
            />
            <div className="mt-12">
              <FAQAccordion items={mentalFaqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="heading-lg text-white">Start speaking with someone who understands.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Your consultation is completely secure, confidential, and judgment-free. Take the first step today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
                <Link to="/contact">Book a Private Visit</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
