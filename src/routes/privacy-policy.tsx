import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | PocketPill" },
      {
        name: "description",
        content:
          "How PocketPill Limited handles your personal information, medicine requests and Lineage family care.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8 sm:py-20">
        <header className="mb-10">
          <p className="ds-kicker text-[#123d2d]">PocketPill Limited</p>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold leading-tight text-[#123d2d]">
            Privacy Policy
          </h1>
          <p className="mt-5 rounded-lg bg-[#f3f7f1] px-4 py-3 text-sm text-[#123d2d]">
            Draft for review — proposed policy wording, not yet published.
          </p>
          <p className="mt-4 text-sm text-[#4c6256]">{"Effective date: 1 September 2026"}</p>
          <p className="mt-6 text-lg leading-8 text-[#4c6256]">
            {
              "Your health information is personal. This policy explains how PocketPill Limited handles information when you use our website, request medicines, speak with a pharmacist, or arrange family care through Lineage."
            }
          </p>
        </header>
        <div className="space-y-9">
          <section
            aria-labelledby="privacy-section-1"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-1"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"1. Who we are"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "PocketPill Limited is responsible for the personal information we process to provide our services."
                }
              </p>
              <p>
                <strong>{"Address:"}</strong>
                {" 3 Gbemi Oluwa Close, Ikeja, Lagos, Nigeria"}
              </p>
              <p>
                <strong>{"Privacy enquiries:"}</strong>{" "}
                <a
                  href="mailto:privacy@pocketpill.co"
                  className="font-medium text-[#123d2d] underline underline-offset-4 break-words"
                >
                  {"privacy@pocketpill.co"}
                </a>
              </p>
              <p>
                <strong>{"Phone / WhatsApp:"}</strong>
                {" +234 708 372 5382"}
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-2"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-2"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"2. Information we collect"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>{"Depending on the service you use, we may process:"}</p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <strong>{"Contact details:"}</strong>
                  {" your name, email, phone number, city, and delivery address."}
                </li>
                <li>
                  <strong>{"Care information:"}</strong>
                  {
                    " medicine requests, prescriptions, uploaded photographs, medication history, and relevant information shared with a pharmacist, including sensitive health information."
                  }
                </li>
                <li>
                  <strong>{"Lineage details:"}</strong>
                  {
                    " the organiser’s, parent’s, and caregiver’s contact details, medicines, care arrangements, and authorised family updates."
                  }
                </li>
                <li>
                  <strong>{"Transaction details:"}</strong>
                  {
                    " orders, payment references, amounts, payment status, delivery records, and service correspondence."
                  }
                </li>
                <li>
                  <strong>{"Website information:"}</strong>
                  {
                    " saved preferences and technical information needed to operate and protect the site."
                  }
                </li>
              </ul>
              <p>
                {
                  "The medicine request form prepares a draft in your browser. You review and copy it, open WhatsApp, attach any files there, and press Send. The Lineage form lets you review your details before sending them through our website to care@pocketpill.co using Namecheap Private Email. It does not upload prescription files; a pharmacist will arrange any prescription follow-up. A submission confirmation means the email service accepted the message, not that a pharmacist has reviewed it. Clearing a draft or leaving the page removes it from the form; copies already sent by email, copied to your clipboard, or sent in WhatsApp are separate."
                }
              </p>
              <p>
                {
                  "Once you contact us, we obtain information from you, authorised representatives, and providers involved in your request. Share only what is relevant and let us know if important details change. If required information is missing, we may be unable to provide the requested service."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-3"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-3"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"3. How and why we use it"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "We use information to assess medicine requests, provide pharmacist support, coordinate sourcing and delivery, manage agreed refills, send care updates, confirm payments, resolve complaints, and meet legal obligations."
                }
              </p>
              <p>
                {
                  "Depending on the activity, our lawful basis is your consent, a contract or steps you request before entering one, a legal obligation, or a legitimate interest such as fraud prevention that does not override your rights. Health information also requires an applicable sensitive-data condition, such as specific consent or a permitted healthcare purpose subject to professional confidentiality."
                }
              </p>
              <p>
                {
                  "Browsing the website does not give blanket consent. Where we rely on consent, you can withdraw it through our privacy contact. Withdrawal does not affect earlier lawful processing."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-4"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-4"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"4. Lineage, family members, and children"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "Paying for someone’s care does not automatically give access to their health information. We confirm the patient’s permission or the representative’s legal authority and agree who may receive updates and what those updates cover."
                }
              </p>
              <p>
                {
                  "If you arrange care for another person, make sure you are authorised to share their details and help them understand this policy. Where a patient cannot make the relevant decision, we establish the applicable authority before accepting instructions on their behalf."
                }
              </p>
              <p>
                {
                  "A parent or legally authorised guardian should arrange care for a child. We apply the relevant consent and authority requirements before processing the child’s health information."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-5"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-5"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"5. Sharing information"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "Where needed for your request, information may be shared with pharmacists, dispensing pharmacies, sourcing and delivery partners, payment providers, and providers supporting our communications or systems. We limit disclosure to the relevant purpose and require appropriate confidentiality and data-protection arrangements."
                }
              </p>
              <p>
                {
                  "Delivery partners receive the information needed for delivery. Family members receive only authorised updates. We may disclose information when required by law. Any transfer connected with a business sale must have a lawful basis and appropriate safeguards."
                }
              </p>
              <p>
                {
                  "We do not sell personal information or use prescription details to target advertising."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-6"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-6"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"6. WhatsApp, payments, and overseas processing"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "WhatsApp conversations involve both PocketPill and WhatsApp’s service. WhatsApp’s privacy terms apply to its own processing. Contact us if you prefer another communication method."
                }
              </p>
              <p>
                {
                  "Where Paystack payments are enabled, Paystack processes the payment and provides transaction information needed for confirmation. Never send us your card PIN, banking password, or one-time passcode."
                }
              </p>
              <p>
                {
                  "Authorised relatives or service providers may receive information outside Nigeria. We require a permitted transfer basis and appropriate safeguards under Nigerian law. Contact us for information about relevant destinations and protections. Permission to update a relative abroad does not authorise unrelated overseas uses."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-7"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-7"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"7. Browser preferences and marketing"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "The website uses local browser storage to remember acknowledgement of its privacy notice. This has no automatic expiry; clearing the site’s browser data removes it and the notice may appear again. It does not contain your request details."
                }
              </p>
              <p>
                {
                  "Vercel is our selected website hosting provider. Namecheap Private Email hosts our business email and processes Lineage submissions addressed to care@pocketpill.co. The site loads typefaces from Google Fonts, so your browser contacts Google to retrieve them. WhatsApp handles messages you choose to send. Paystack is an optional payment integration; it is not used to send medicine or Lineage requests."
                }
              </p>
              <p>
                {
                  "Any additional analytics or advertising technology will be described before use, with consent obtained where required. Promotional communications are separate from care updates, and you can opt out of marketing without stopping messages needed to handle an active request."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-8"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-8"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"8. Retention and security"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "Form drafts are not saved in a website care-record database. A draft remains in the page until cleared or the page is left or reloaded. Submitted Lineage details are processed by the website server and email service and retained in the care mailbox. Messages and attachments sent in WhatsApp exist separately on the services and devices used by you and PocketPill."
                }
              </p>
              <p>
                {
                  "We keep personal information for as long as necessary to provide care, maintain appropriate pharmacy records, meet applicable legal and regulatory obligations, and handle complaints or legal claims. Where a competent authority lawfully requires records, we retain and disclose only what is necessary for that purpose. We do not keep every record indefinitely merely because it might be useful. Records should be deleted or anonymised when the relevant purpose and any required retention period end, subject to a lawful hold. A record-specific retention and deletion schedule remains to be finalised. Contact privacy@pocketpill.co with questions or deletion requests."
                }
              </p>
              <p>
                {
                  "The medicine request form does not put your details in WhatsApp URLs. Copying a medicine draft places its contents on your device’s clipboard, so take care on shared devices. The Lineage email handler does not deliberately log request contents or email credentials."
                }
              </p>
              <p>
                {
                  "Within PocketPill, access to patient care information is restricted to pharmacists who need it for their work, and to the information necessary for the relevant care task. This internal access rule does not exclude processing by the service providers described in this policy or disclosures required by law. Our privacy contact is privacy@pocketpill.co. Detailed account permissions, provider settings, backups, and incident-response procedures still need to be documented and checked. This draft does not claim independent security audits or end-to-end encryption of all PocketPill records. No system can guarantee absolute security."
                }
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-9"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-9"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"9. Your rights"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "Subject to applicable conditions, you may request access, correction, deletion, restriction, or portability of your information; object to certain uses; and withdraw consent. You also have protections concerning solely automated decisions with legal or similarly significant effects."
                }
              </p>
              <p>
                {"Send requests to "}
                <a
                  href="mailto:privacy@pocketpill.co"
                  className="font-medium text-[#123d2d] underline underline-offset-4 break-words"
                >
                  {"privacy@pocketpill.co"}
                </a>
                {
                  ". We may make proportionate identity or authority checks before releasing information. We respond within the applicable legal period and explain any lawful limits, including records we must retain."
                }
              </p>
              <p>
                {"You may also complain to the "}
                <a
                  href="https://ndpc.gov.ng/"
                  className="font-medium text-[#123d2d] underline underline-offset-4 break-words"
                >
                  {"Nigeria Data Protection Commission"}
                </a>
                {" without first obtaining our permission."}
              </p>
            </div>
          </section>
          <section
            aria-labelledby="privacy-section-10"
            className="scroll-mt-28 border-t border-[#dce6df] pt-8"
          >
            <h2
              id="privacy-section-10"
              className="font-heading text-xl sm:text-2xl font-semibold text-[#123d2d]"
            >
              {"10. Policy updates"}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#4c6256]">
              <p>
                {
                  "We will publish updates with a revised effective date and communicate material changes appropriately. Updating this policy does not replace consent where new consent is required."
                }
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
