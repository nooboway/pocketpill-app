import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — PocketPill" },
      { name: "description", content: "Learn how PocketPill collects, uses, and protects your personal and health information. Your privacy is our priority." },
      { property: "og:title", content: "Privacy Policy — PocketPill" },
      { property: "og:description", content: "Learn how PocketPill collects, uses, and protects your personal and health information." },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="space-y-4">
                <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
                <p className="text-lg text-muted-foreground">Last updated: August 2026</p>
              </div>

              <div className="max-w-none space-y-8 text-base leading-relaxed text-muted-foreground">
                <p>
                  At PocketPill, we are committed to protecting your privacy and ensuring that your personal and health information is handled securely, discreetly, and responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our telehealth platform, website, and mobile application.
                </p>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                  <p>We collect the following categories of information to provide our services:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li><strong className="text-foreground">Personal identification:</strong> Name, email address, phone number, date of birth, and delivery address.</li>
                    <li><strong className="text-foreground">Health information:</strong> Medical history, consultation notes, prescription details, and symptoms you share during consultations.</li>
                    <li><strong className="text-foreground">Payment information:</strong> Billing details processed securely through our payment partner, Paystack. We do not store full card numbers on our servers.</li>
                    <li><strong className="text-foreground">Device and usage data:</strong> Browser type, IP address, pages visited, and interaction data collected through cookies and analytics tools.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                  <p>Your information is used to:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Facilitate medical consultations with our licensed healthcare professionals.</li>
                    <li>Process, fulfill, and deliver your medication orders discreetly.</li>
                    <li>Manage your prescriptions and send timely refill reminders.</li>
                    <li>Process payments and issue receipts.</li>
                    <li>Improve our platform's services, performance, and user experience.</li>
                    <li>Communicate with you about your appointments, orders, and account.</li>
                    <li>Comply with legal obligations and regulatory requirements.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">3. Privacy by Design & Discretion</h2>
                  <p>
                    We understand the sensitive nature of healthcare — especially men's health. From secure, encrypted consultations to plain-packaged, discreet medication deliveries to your doorstep, your health matters stay strictly between you and your care team. There is no need for anyone else to know what you ordered.
                  </p>
                  <p>
                    Payment descriptors on your bank or card statement will not contain any medical or condition-specific wording — only the platform name.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">4. Cookie Policy</h2>
                  <p>
                    Our website uses cookies and similar tracking technologies to improve your browsing experience. Cookies are small text files stored on your device that help us understand how you interact with our platform.
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li><strong className="text-foreground">Strictly Necessary Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                    <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand visitor behavior and improve our services. These are optional and can be managed through our cookie preferences dialog.</li>
                    <li><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver advertising relevant to your interests. These are optional and can be disabled at any time.</li>
                  </ul>
                  <p>
                    You can manage your cookie preferences at any time through the cookie settings in your browser or via the cookie consent banner on our website.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">5. Data Security</h2>
                  <p>
                    We implement advanced security measures, including end-to-end encryption, secure server hosting, and access controls, to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All consultations are conducted through encrypted channels.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">6. Sharing Your Information</h2>
                  <p>
                    We do not sell or rent your personal information. We may share necessary details only with:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Our network of trusted partner pharmacies and delivery personnel, strictly for the purpose of fulfilling your medication orders.</li>
                    <li>Payment processors (e.g., Paystack) to complete transactions securely.</li>
                    <li>Analytics services to understand and improve platform performance (aggregated, non-identifiable data only).</li>
                    <li>Law enforcement or regulatory bodies when required by law.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">7. Data Retention & Deletion</h2>
                  <p>
                    We retain your personal and health information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. You may request deletion of your personal data by contacting our support team. We will process such requests within 30 days, subject to any legal obligations that require us to retain certain records.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">8. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
                    <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
                    <li><strong className="text-foreground">Portability:</strong> Request a machine-readable copy of your data for transfer to another service.</li>
                    <li><strong className="text-foreground">Objection:</strong> Object to the processing of your data for marketing purposes.</li>
                  </ul>
                </div>

                <div className="space-y-4" id="ndpr">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">9. NDPR Compliance</h2>
                  <p>
                    PocketPill is committed to compliance with the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act (NDPA). As a data controller, we ensure that:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Your consent is obtained before collecting any personal data.</li>
                    <li>Data is collected and processed for lawful, specific purposes.</li>
                    <li>Adequate security safeguards are implemented to protect your data.</li>
                    <li>You can exercise your rights to access, rectify, or delete your data.</li>
                    <li>Any data breach affecting your information will be reported within 72 hours.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">10. Third-Party Services</h2>
                  <p>
                    Our platform integrates with trusted third-party services. Each service has its own privacy policy governing the use of your data:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li><strong className="text-foreground">Paystack</strong> — Payment processing</li>
                    <li><strong className="text-foreground">Telehealth Communication Providers</strong> — Secure consultation channels</li>
                    <li><strong className="text-foreground">Google Analytics</strong> — Website analytics (anonymized)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">11. Children's Privacy</h2>
                  <p>
                    PocketPill does not knowingly collect personal data from individuals under the age of 18. Our services are intended for adults. If we become aware that we have collected data from a minor, we will take steps to delete such information promptly.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">12. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website with a revised "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Contact Us</h2>
                  <p>
                    If you have questions or concerns about this Privacy Policy or how we handle your data, please contact our support team at <a href="mailto:care@pocketpill.co" className="text-primary hover:underline">care@pocketpill.co</a> or visit our <Link to="/help-center" className="text-primary hover:underline">Help Center</Link>.
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
