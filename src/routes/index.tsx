import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  HeartPulse,
  MessageSquare,
  Pill,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Video,
} from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-nigerian.png";
import doctorsImage from "@/assets/doctors-nigerian.png";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PocketPill — Private Men's Health Consultations" },
      { name: "description", content: "Private pharmacist-led online consultations for erectile dysfunction and premature ejaculation." },
      { property: "og:title", content: "PocketPill — Private Men's Health Consultations" },
      { property: "og:description", content: "Private pharmacist-led online consultations for erectile dysfunction and premature ejaculation." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    icon: Activity,
    title: "Get stronger erections",
    description: "Private pharmacist-led guidance for erectile difficulty.",
  },
  {
    icon: Clock,
    title: "Have longer sex",
    description: "Actionable protocols for premature ejaculation.",
  },
  {
    icon: Stethoscope,
    title: "Understand your health",
    description: "Clear answers on lifestyle, testosterone, and performance.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Start an online consultation",
    description: "Start a secure, private chat. Answer a few questions about your situation.",
  },
  {
    icon: UserRound,
    title: "Get personalized guidance",
    description: "Receive a structured review and action plan from a licensed professional.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing support",
    description: "Reach out anytime to adjust your protocol or ask follow-up questions.",
  },
];

const differentiators = [
  {
    title: "Medication Expertise",
    description: "Understand common treatment options and safety considerations, and spot red flags.",
  },
  {
    title: "Root-Cause Guidance",
    description: "Discuss lifestyle, stress, medication, and health contributors.",
  },
  {
    title: "Referral When Needed",
    description: "Know when physician evaluation matters. Support, not guesswork.",
  },
  {
    title: "NDPR-compliant Privacy",
    description: "Your conversations are encrypted and kept strictly confidential.",
  },
];

const testimonials = [
  {
    quote: "I was skeptical about starting a weight loss protocol, but having a doctor available online to talk through the side effects and dosage made a huge difference. By week 4, my cravings were gone. The discreet delivery to my office in Lagos was a lifesaver.",
    author: "Bode A.",
    location: "Weight Loss Protocol",
    rating: 5,
  },
  {
    quote: "I've struggled with my hairline for three years. The PocketPill protocol gave me a clear, step-by-step routine with actual prescription-grade serums. It's been 3 months and my barber just pointed out the new growth.",
    author: "Emeka O.",
    location: "Hair Loss Protocol",
    rating: 5,
  },
  {
    quote: "What stood out was the privacy. No awkward waiting rooms, no judgment. We just had a direct, professional conversation about my performance issues, and the written protocol I got was clear and effective. My confidence is fully back.",
    author: "Kelechi N.",
    location: "Performance Protocol",
    rating: 5,
  },
  {
    quote: "I had cystic breakouts on my jawline that nothing over-the-counter could fix. PocketPill set me up with a medical-grade protocol that actually targeted the inflammation. By week 6, my skin was completely clear.",
    author: "Amina Y.",
    location: "Acne Protocol",
    rating: 4,
  },
  {
    quote: "I lost so much volume and experienced severe thinning after pregnancy. The bundled monthly management is what saved me. I don't have to think about refills; I just follow the serum routine and send progress photos for the doc every month.",
    author: "Ngozi C.",
    location: "Hair Loss Protocol",
    rating: 5,
  },
  {
    quote: "I had dark hyperpigmentation on my jawline from old shaving bumps that just wouldn't fade. The PocketPill protocol gave me clinical-strength formulas I couldn't get at the pharmacy. Faded them significantly within the first two months.",
    author: "David U.",
    location: "Scarring & Hyperpigmentation",
    rating: 4,
  },
  {
    quote: "I kept putting this off because the thought of sitting in a waiting room was terrifying. PocketPill made it entirely discreet online. The doctor explained the actual cause and gave me a clear protocol. My confidence has completely returned.",
    author: "Tunde O.",
    location: "Performance Protocol",
    rating: 5,
  },
  {
    quote: "I wasn't looking to be a bodybuilder, I just wanted to get rid of my gut and get my stamina back. The appetite suppression is real. I'm down 8kg in 6 weeks.",
    author: "Paul E.",
    location: "Weight Loss Protocol",
    rating: 4,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₦10,000",
    period: "Text consultation",
    description: "Perfect for gaining clarity quickly.",
    features: ["Written consultation", "Follow-up questions included", "24-hour response target"],
    cta: "Book now",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₦15,000",
    period: "30-min voice",
    description: "A private session with a written summary.",
    features: ["Private voice session", "Written summary", "Action plan included", "Priority scheduling"],
    cta: "Book now",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₦27,000",
    period: "Deep-dive",
    description: "Comprehensive review + tailored protocol.",
    features: ["Extended consult", "Protocol document", "7-day follow-up access", "Ongoing guidance"],
    cta: "Book now",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Is this really private?",
    answer: "Yes. Consultations happen through a secure online portal with the pharmacist. There is no public profile, no waiting room, no front-desk handover. Your name is never shared, and notes are kept confidentially.",
  },
  {
    question: "Will anything show up on my bank or card statement?",
    answer: "Payments are processed securely under a discreet descriptor. No medical or condition-specific wording appears on your statement — only the platform name.",
  },
  {
    question: "Can the pharmacist prescribe medication?",
    answer: "No. Pocketpill is a pharmacist consultation and education service. We can explain treatment options, flag interactions, and tell you what a prescriber needs to hear — but a licensed physician must issue any prescription.",
  },
  {
    question: "I live outside Nigeria. Can I still book?",
    answer: "Yes. The service is built for the West African community at home and across the diaspora. Sessions run through our secure online platform and payment links, both of which work globally.",
  },
  {
    question: "What if I'm not sure which tier I need?",
    answer: "Start an online message before paying. A short back-and-forth is enough to point you toward the right format — text, voice, or deep-dive. There is no pressure to upgrade.",
  },
];

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div className="container-tight grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Private Men's Health · West Africa & Diaspora
              </span>
              <h1 className="heading-xl text-foreground">
                You've carried this long enough. Start here.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Private pharmacist-led online consultations for erectile dysfunction and premature ejaculation. Clear guidance. Confidential communication. No waiting rooms.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/contact">
                    Start Online Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#pricing">See Pricing</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Private & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Fast scheduling</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute -inset-4 rounded-full bg-orange-soft/50 blur-3xl" />
                <img
                  src={heroImage}
                  alt="A friendly doctor on a video call with a prescription bottle nearby"
                  width={1024}
                  height={1024}
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-border bg-cream">
          <div className="container-tight py-10">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-foreground">Proven</p>
                <p className="mt-1 text-sm text-muted-foreground">Trusted by men across West Africa and the diaspora to deliver real results.</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-foreground">Private</p>
                <p className="mt-1 text-sm text-muted-foreground">Consultations are conducted confidentially through secure channels.</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-foreground">Fast</p>
                <p className="mt-1 text-sm text-muted-foreground">Same-day scheduling may be available depending on demand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <SectionHeader
              eyebrow="What We Treat"
              title="Specialized care built for men."
              description="From erectile dysfunction to premature ejaculation, PocketPill gives you access to private, actionable protocols."
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group border-border/60 bg-card transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft transition-colors group-hover:bg-primary">
                      <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding bg-cream">
          <div className="container-tight">
            <SectionHeader
              eyebrow="How it works"
              title="Getting started is easy and private."
              description="No waiting rooms. No paperwork. Just clear guidance online."
            />
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Step {index + 1}</span>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why PocketPill */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <SectionHeader
                  align="left"
                  eyebrow="Why PocketPill"
                  title="The problem is often not the condition. It is the silence."
                  description="Many men delay getting informed guidance because they want privacy, discretion, and a judgment-free conversation. Pocketpill is built to lower that barrier: direct access to pharmacist-led education and structured guidance online."
                />
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {differentiators.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 rounded-full bg-orange-soft/40 blur-3xl" />
                <img
                  src={doctorsImage}
                  alt="A diverse group of certified doctors, pharmacists and team of healthcare professionals"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="relative z-10 rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-black text-white overflow-hidden">
          <div className="container-tight">
            <SectionHeader
              eyebrow="In Their Words"
              title="Quiet conversations. Lasting clarity."
              description="Shared with permission. Names and details have been adjusted to protect privacy."
              className="[&_h2]:text-white [&_p]:text-white/70 [&_span]:text-primary"
            />
          </div>
          
          <div className="mt-16 relative flex w-full">
            <div className="flex animate-marquee gap-6 min-w-max pr-6">
              {testimonials.map((testimonial, idx) => (
                <Card key={`t1-${idx}`} className="w-[350px] md:w-[400px] border-white/10 bg-white/5 text-white backdrop-blur shrink-0">
                  <CardContent className="p-6">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-white/90">"{testimonial.quote}"</p>
                    <div className="mt-6">
                      <p className="font-heading text-sm font-semibold text-white">{testimonial.author}</p>
                      <p className="text-xs text-primary/80 font-medium">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex animate-marquee gap-6 min-w-max pr-6" aria-hidden="true">
              {testimonials.map((testimonial, idx) => (
                <Card key={`t2-${idx}`} className="w-[350px] md:w-[400px] border-white/10 bg-white/5 text-white backdrop-blur shrink-0">
                  <CardContent className="p-6">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-white/90">"{testimonial.quote}"</p>
                    <div className="mt-6">
                      <p className="font-heading text-sm font-semibold text-white">{testimonial.author}</p>
                      <p className="text-xs text-primary/80 font-medium">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* FAQ */}
        <section className="section-padding bg-cream">
          <div className="container-tight max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="The questions men don't ask out loud."
              description="If something here isn't covered, send us a message before booking. There's no obligation to continue."
            />
            <div className="mt-12">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="heading-lg text-white">The hardest part is the first message.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Start your private online consultation. Ask the question you've been postponing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
                <Link to="/contact">Start Online Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
                <a href="#pricing">View pricing</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
