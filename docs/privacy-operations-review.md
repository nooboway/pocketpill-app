# PocketPill privacy operations review

Reviewed 21 September 2026 against the supplied source and owner responses. This is a code and document review, not an independent security audit or legal certification.

## Confirmed facts

The owner confirmed PocketPill Limited, 3 Gbemi Oluwa Close, Ikeja, Lagos, Nigeria, privacy@pocketpill.co, and use of +234 708 372 5382 for requests. The owner subsequently confirmed Vercel as the selected website host, Namecheap Private Email for business email, care@pocketpill.co for Lineage requests, and that privacy@pocketpill.co works. The owner stated that only pharmacists may access relevant patient information and only what they need. These are owner-confirmed operational statements; mailbox permissions and deployed configuration were not independently audited. Exact retention schedules remain unapproved.

| Data / provider              | Evidence and current handling                                                                                                                                   | Retention status                                                                                                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Medicine drafts              | React state; reviewed and manually sent in WhatsApp. No health/contact details in the URL.                                                                      | No website database copy; clipboard and WhatsApp copies are separate.                                                                                                                   |
| Lineage email                | Review then POST to the server, validated and sent via TLS SMTP to care@pocketpill.co. Namecheap SMTP secret required. No attachments or clinical payload logs. | Email/provider copies persist; mailbox, trash, devices, and backup retention need a schedule.                                                                                           |
| Clipboard                    | Written only when the customer clicks Copy request; manual selection fallback.                                                                                  | OS and clipboard-history dependent. Clearing the form does not erase clipboard history.                                                                                                 |
| WhatsApp                     | Existing business number chosen by the owner. Messages and attachments sent by the customer in WhatsApp.                                                        | Pharmacist-only necessary access is the owner-stated rule; device permissions and chat/backup retention remain unverified. Provider terms do not set PocketPill's own retention policy. |
| Browser acknowledgement      | `pocketpill-cookie-consent` in local storage; no personal request data.                                                                                         | No automatic expiry; removed when the user clears site data.                                                                                                                            |
| Google Fonts                 | Font stylesheet and font-file requests in the root/about pages.                                                                                                 | Google handling and hosting-location implications require operational review; no duration asserted here.                                                                                |
| Paystack                     | Optional server API integration, dependent on secret configuration. Not used by care-request forms. Webhook signature verification exists.                      | Provider/account settings and business transaction retention unconfirmed. Personal transaction payload logging removed.                                                                 |
| Hosting / database / backups | Vercel selected by owner; Node server build configured. Namecheap Private Email confirmed. No care-record database added.                                       | Actual Vercel region/logs and provider backup/deletion settings remain unverified.                                                                                                      |

## Changes made

- Replaced simulated receipts. Medicine requests use a WhatsApp handoff; Lineage uses review then server-side email, with success only after SMTP acceptance. Missing configuration and transport errors produce no success receipt.
- Added contact validation, patient/representative permission acknowledgement, edit and clear controls.
- Removed file selection that implied a completed upload; medicine customers attach prescriptions in WhatsApp, while Lineage prescriptions are handled in pharmacist follow-up.
- Removed request payload console logging and made the unused legacy server function return failure instead of a fictitious receipt.
- Removed raw payment error payloads, exception details, and webhook transaction metadata from explicit logs. General framework error logging still exists and needs a production logging policy.
- Removed unsupported encryption/audit/authenticity claims on Trust and the repeated blanket security claim on How It Works.
- Described the supplied PDF narrowly: certificate of registration, ID NDPC/DCP/14112, stated validity 21 August 2026–21 August 2027. Registry authenticity was not independently verified. Registration does not establish security controls.
- Replaced the unsupported analytics-consent claim with a browser-storage notice. No analytics or advertising integration was found in the reviewed application source.
- Updated the privacy draft and kept it visibly marked as a draft with noindex metadata.

## Decisions needed before adopting the public policy

1. The owner confirmed the privacy mailbox works. Document the responsible pharmacist and response procedure; confirm monitoring and holiday cover.
2. Choose and document care-conversation, prescription, payment, complaint, operational-log, and backup retention periods based on actual duties. Define deletion owners, legal holds, and backup expiry. No arbitrary periods have been represented as approved.
3. Inventory staff WhatsApp devices, linked sessions, access permissions, lost-device response, and backup configuration; document patient-authority checks and authorised family updates.
4. Vercel and Namecheap are selected/confirmed providers. Document their configured locations, contracts, transfer safeguards, HTTPS, account permissions, incident response, and restore/deletion procedures.
5. Review optional payment endpoints before activation: prices are client-supplied; verification is reference-based rather than authenticated; the webhook acknowledges receipt but does not persist/reconcile an order; the configured callback has no matching success page. These are pre-existing payment limitations, not a completed checkout implementation.
6. Substantiate any remaining clinical/licensing and marketing statements elsewhere in the source. This change does not independently verify professional licences or suppliers.

## Retention benchmark and proposed approach

The owner wants retention for necessary care and lawful reference by relevant bodies. The privacy draft reflects that principle without an indefinite retention promise. Nigeria’s Federal Ministry of Health National Drug Policy 2021, section 4.17.1(iv), states a minimum of five years for prescription records in pharmacy departments of public and private healthcare facilities. This is a prescription-record benchmark, not a universal five-year rule for every website enquiry, email, or log. Confirm the schedule applicable to PocketPill with the superintendent pharmacist, including any special controlled-medicine, child, tax, or legal-hold requirements.

The next operational step is to define record categories, the event starting each retention clock, the minimum period, justified extensions for ongoing care or lawful holds, and deletion owners. Do not treat the five-year benchmark as an approved blanket PocketPill schedule. Review records when their purpose ends and document why any longer retention is needed.

Source: [National Drug Policy 2021, section 4.17.1(iv), printed page 21](https://policyvault.africa/wp-content/uploads/policy/NGA1477.pdf), government-authored document hosted by PolicyVault. The PCN electronic-pharmacy PDF found during research is labelled DRAFT and was not treated as enacted law.

## Reference material

- [WhatsApp privacy policy](https://www.whatsapp.com/legal/privacy-policy): messages, business recipients, and third-party processing; reviewed 20 September 2026.
- [NDPC FAQs](https://ndpc.gov.ng/faqs/): Nigerian regulatory context; reviewed during policy drafting.
- The original policy structure was informed by [OneHealthNG](https://onehealthng.com/privacy-policy), [Pharmarun](https://www.pharmarun.africa/privacy-policy), and [FlologPharma](https://flologpharma.co/privacy-policy). Their operational claims are not evidence about PocketPill.

## Validation

The earlier WhatsApp version passed build, TypeScript, targeted lint, and three request-helper tests. The email update adds three tests covering accepted/rejected mail, missing credentials, validation, cross-origin requests, limits, and error redaction; no live email is sent by those tests. See lineage-email-setup.md for activation and remaining production checks. Browser review found and fixed the nested Lineage route so /lineage/start renders the intake form. Medicine copy/review handoff was checked with synthetic data; no requests were sent.
