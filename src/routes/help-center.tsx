import { createFileRoute, Link } from "@tanstack/react-router";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/help-center")({
  component: HelpCenter,
  head: () => ({
    meta: [
      { title: "Help Center — PocketPill" },
      { name: "description", content: "Get answers to common questions about PocketPill's telehealth consultations, medication delivery, and prescriptions. Contact our support team anytime." },
      { property: "og:title", content: "Help Center — PocketPill" },
      { property: "og:description", content: "Get answers to common questions about PocketPill's telehealth consultations and medication delivery." },
      { property: "og:url", content: "/help-center" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/help-center" }],
  }),
});

const helpFaqs = [
  {
    question: "How fast is medication delivery?",
    answer: "We offer fast, reliable, same-day delivery across our supported cities. Depending on medication availability and the time your order is placed, most deliveries arrive within a few hours. All deliveries are made in plain, discreet packaging.",
  },
  {
    question: "Do I need a prescription to order?",
    answer: "For prescription-only medications, yes. You can easily upload your existing prescription during checkout, or you can speak with one of our licensed healthcare professionals to get a new one during your consultation.",
  },
  {
    question: "Is my personal and health information secure?",
    answer: "Absolutely. We follow strict privacy protocols and are NDPR-compliant. Your data is encrypted, your consultations are 100% confidential, and all deliveries are made in plain, discreet packaging. Payment descriptors on your bank statement will not contain medical wording.",
  },
  {
    question: "Do you accept health insurance?",
    answer: "We are actively partnering with top HMOs and insurance providers in Nigeria. Contact our support team to verify if your specific insurance provider is currently supported on our platform.",
  },
  {
    question: "How do online consultations work?",
    answer: "You simply answer a few questions about your symptoms, and you'll be connected with a certified doctor or pharmacist for a private consultation online. Once completed, your personalized treatment plan and medication are sent directly to your door.",
  },
  {
    question: "Can I get a refund?",
    answer: "Refund requests for unused consultation credits are considered on a case-by-case basis. Medication orders that have been dispensed and shipped are non-refundable due to the nature of pharmaceutical products. Contact support for assistance.",
  },
  {
    question: "What if I live outside Nigeria?",
    answer: "Our consultation service is available to the West African community at home and across the diaspora. Sessions run on our secure platform and secure payment links, both of which work globally. Medication delivery is currently limited to supported Nigerian cities.",
  },
];

const supportChannels = [
  {
    icon: MessageSquare,
    title: "Online Inquiry",
    description: "Submit a support form",
    href: "/contact",
    external: false,
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+234 708 372 5382",
    href: "tel:+2347083725382",
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "care@pocketpill.co",
    href: "mailto:care@pocketpill.co",
    external: false,
  },
];

function HelpCenter() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl space-y-16">
              <SectionHeader
                eyebrow="Support"
                title="How can we help?"
                description="Find answers to common questions or reach out to our dedicated support team for personalized assistance."
              />

              <div className="grid gap-6 sm:grid-cols-3">
                {supportChannels.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex flex-col items-center justify-center space-y-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <channel.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-tight max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Quick answers to common questions about our services, delivery, and privacy."
            />
            <div className="mt-12">
              <FAQAccordion items={helpFaqs} />
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="heading-lg text-white">Still need help?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Our support team is ready to assist you with all your medication and health needs. Experience seamless and personalized care every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90" asChild>
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
