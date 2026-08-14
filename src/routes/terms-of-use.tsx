import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsOfUse,
  head: () => ({
    meta: [
      { title: "Terms of Use — PocketPill" },
      { name: "description", content: "Read PocketPill's Terms of Use governing your access to our telehealth platform, prescription services, and medication delivery." },
      { property: "og:title", content: "Terms of Use — PocketPill" },
      { property: "og:description", content: "Read PocketPill's Terms of Use governing your access to our telehealth platform and services." },
      { property: "og:url", content: "/terms-of-use" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
});

function TermsOfUse() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">Terms of Use</h1>
                <p className="text-lg text-muted-foreground">Effective Date: August 2026</p>
              </div>

              <div className="max-w-none space-y-8 text-base leading-relaxed text-muted-foreground">
                <p>
                  Welcome to PocketPill. By accessing our website, mobile application, or using our services, you agree to be bound by these Terms of Use. Please read them carefully.
                </p>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                  <p>
                    These Terms govern your use of the PocketPill platform, which connects you with licensed doctors, pharmacists, and a network of pharmacies for telehealth consultations, medication orders, and same-day delivery. If you do not agree to these Terms, you may not use our services.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">2. Eligibility</h2>
                  <p>
                    You must be at least 18 years of age to use PocketPill. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">3. Medical Disclaimer</h2>
                  <p>
                    <strong className="text-foreground">PocketPill is not a replacement for emergency medical care.</strong> If you are experiencing a medical emergency, please call your local emergency services immediately (e.g., 112 in Nigeria).
                  </p>
                  <p>
                    While we connect you with certified healthcare professionals, the content on our platform is for informational purposes and should not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">4. User Account & Responsibilities</h2>
                  <p>
                    You agree to provide accurate, current, and complete health and personal information during your consultations and when setting up your account. You are responsible for:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Maintaining the confidentiality of your login credentials.</li>
                    <li>All activities that occur under your account.</li>
                    <li>Providing truthful medical history and symptom descriptions.</li>
                    <li>Notifying us immediately of any unauthorized use of your account.</li>
                  </ul>
                  <p>
                    Providing false information could result in incorrect medical advice, harm to your health, or the termination of your account.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">5. Prescription & Delivery Services</h2>
                  <p>
                    Prescriptions are issued at the sole discretion of the consulting physician. PocketPill partners with a network of reliable pharmacies to fulfill these prescriptions. We strive for fast, same-day delivery, but delivery times may vary depending on your location and medication availability.
                  </p>
                  <p>
                    All medications are delivered in plain, discreet packaging. PocketPill is not responsible for delays caused by factors outside our control, including but not limited to weather, logistics disruptions, or incorrect delivery addresses.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">6. Payment, Billing & Refunds</h2>
                  <p>
                    By providing a payment method, you expressly authorize us to charge the applicable fees for consultations, medications, and delivery services. All payments are processed securely through our payment partner, Paystack.
                  </p>
                  <p>
                    Refund requests for unused consultation credits will be considered on a case-by-case basis. Medication orders that have been dispensed and shipped are non-refundable due to the nature of pharmaceutical products.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
                  <p>
                    All content on the PocketPill platform — including text, graphics, logos, icons, images, and software — is the property of PocketPill or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our platform without prior written consent.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by applicable law, PocketPill and its affiliates, officers, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to loss of data, profits, or goodwill.
                  </p>
                  <p>
                    Our total liability for any claim arising from the use of our services shall not exceed the amount you paid to PocketPill in the twelve (12) months preceding the claim.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">9. Account Termination</h2>
                  <p>
                    We reserve the right to suspend or terminate your account at our sole discretion, without notice, if we believe you have violated these Terms or engaged in fraudulent, abusive, or harmful conduct. You may also request account deletion at any time by contacting our support team.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">10. Dispute Resolution</h2>
                  <p>
                    Any dispute arising from or relating to these Terms or your use of our services shall first be resolved through good-faith negotiation. If the dispute cannot be resolved within 30 days, it shall be submitted to mediation or arbitration in accordance with the laws of the Federal Republic of Nigeria.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">11. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">12. Modifications to the Service & Terms</h2>
                  <p>
                    PocketPill reserves the right to modify or discontinue, temporarily or permanently, any part of the service with or without notice. We may also update these Terms from time to time. We will notify you of material changes by posting the updated Terms with a new "Effective Date." Your continued use of the platform constitutes acceptance of the revised Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Contact Information</h2>
                  <p>
                    If you have any questions regarding these Terms, please contact us at <a href="mailto:care@pocketpill.co" className="text-primary hover:underline">care@pocketpill.co</a> or visit our <Link to="/help-center" className="text-primary hover:underline">Help Center</Link>.
                  </p>
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
