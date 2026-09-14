import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, LockKeyhole, BadgeCheck, FileText, ArrowRight } from "lucide-react";
import ndpcBadge from "@/assets/ndpc-badge.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Compliance | PocketPill" },
      { name: "description", content: "Learn about PocketPill's commitment to regulatory compliance, data protection, and medication authenticity in Nigeria." },
    ],
  }),
  component: TrustCompliancePage,
});

const pillars = [
  {
    icon: BadgeCheck,
    title: "Licensed Professionals",
    description: "Every pharmacist on our platform is fully licensed and registered with the Pharmacy Council of Nigeria (PCN). When you speak to a PocketPill pharmacist, you are consulting a verified clinical expert.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Medications",
    description: "We source medications exclusively from trusted, vetted manufacturers and major licensed distributors in Nigeria. This strict supply chain ensures that every medication delivered is 100% authentic and uncompromised.",
  },
  {
    icon: LockKeyhole,
    title: "Data Privacy & Security",
    description: "Your health information and orders stay strictly private. All records and messages are encrypted and stored in secure infrastructure compliant with the Nigeria Data Protection Act (NDPA) 2023.",
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    description: "PocketPill operates in strict adherence to Nigerian healthcare and data protection regulations. We are registered with the Nigeria Data Protection Commission (NDPC).",
  },
];

function TrustCompliancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight max-w-4xl pt-12">
            <SectionHeader
              eyebrow="Trust & Compliance"
              title="Your care, secured."
              description="At PocketPill, we understand that trust is the foundation of healthcare. We are fully committed to regulatory compliance, patient privacy, and clinical excellence in Nigeria."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-border/60 bg-cream p-8 transition-colors hover:bg-[#123d2d]/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#123d2d] text-white">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 bg-white">
              <div className="grid md:grid-cols-[1fr_auto]">
                <div className="p-8 sm:p-12">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    NDPC Certified
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                    PocketPill is officially certified by the Nigeria Data Protection Commission (NDPC). We regularly audit our data processing practices to ensure full compliance with the Nigeria Data Protection Act (NDPA) 2023 and the General Application and Implementation Directive (GAID).
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["End-to-end encryption for patient data", "Strict access controls for clinical staff", "Regular third-party security audits"].map((item) => (
                      <li key={item} className="flex items-center text-sm font-medium text-foreground">
                        <BadgeCheck className="mr-3 h-5 w-5 text-[#123d2d]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center border-t border-border/60 bg-cream p-8 md:border-l md:border-t-0 md:p-16">
                  <a href="/ndpc-certificate.pdf" target="_blank" rel="noreferrer" className="group relative block">
                    <img 
                      src={ndpcBadge} 
                      alt="NDPC Certified Badge" 
                      className="h-32 w-auto rounded-lg shadow-md transition-transform group-hover:scale-105" 
                    />
                    <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center text-xs font-semibold uppercase tracking-widest text-[#123d2d] opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
                      View Certificate <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
