# PocketPill privacy operations review

Reviewed 21 September 2026 against the supplied source and owner responses. This is a code and document review, not an independent security audit or legal certification.

## Confirmed facts

The owner confirmed PocketPill Limited, 3 Gbemi Oluwa Close, Ikeja, Lagos, Nigeria, privacy@pocketpill.co, and use of +234 708 372 5382 for requests. The owner confirmed that approved retention periods, production hosting/storage providers, and documented security controls are not yet available.

| Data / provider                      | Evidence and current handling                                                                                                                                          | Retention status                                                                                                                       |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Medicine and Lineage drafts          | React state only; reviewed, copied, and manually sent through WhatsApp. No form POST or file upload. No health/contact details in the WhatsApp URL.                    | No database copy. Cleared from the form on clear, navigation away, or reload; not a forensic erasure guarantee.                        |
| Clipboard                            | Written only when the customer clicks Copy request; manual selection fallback.                                                                                         | OS and clipboard-history dependent. Clearing the form does not erase clipboard history.                                                |
| WhatsApp                             | Existing business number chosen by the owner. Messages and attachments sent by the customer in WhatsApp.                                                               | PocketPill device/chat/backup retention and staff access are unconfirmed. Provider terms do not set PocketPill's own retention policy. |
| Browser acknowledgement              | `pocketpill-cookie-consent` in local storage; no personal request data.                                                                                                | No automatic expiry; removed when the user clears site data.                                                                           |
| Google Fonts                         | Font stylesheet and font-file requests in the root/about pages.                                                                                                        | Google handling and hosting-location implications require operational review; no duration asserted here.                               |
| Paystack                             | Optional server API integration, dependent on secret configuration. Not used by care-request forms. Webhook signature verification exists.                             | Provider/account settings and business transaction retention unconfirmed. Personal transaction payload logging removed.                |
| Hosting / database / email / backups | Local Vite development server verified. A Cloudflare build target is not evidence of a deployed provider account. No care database or email-intake service configured. | Production provider, region, logs, backups, and deletion schedule unconfirmed.                                                         |

## Changes made

- Replaced simulated receipts with review/copy/open/send instructions and explicit “not sent” status.
- Added contact validation, patient/representative permission acknowledgement, edit and clear controls.
- Removed file selection that implied a completed upload; customers attach prescriptions in WhatsApp.
- Removed request payload console logging and made the unused legacy server function return failure instead of a fictitious receipt.
- Removed raw payment error payloads, exception details, and webhook transaction metadata from explicit logs. General framework error logging still exists and needs a production logging policy.
- Removed unsupported encryption/audit/authenticity claims on Trust and the repeated blanket security claim on How It Works.
- Described the supplied PDF narrowly: certificate of registration, ID NDPC/DCP/14112, stated validity 21 August 2026–21 August 2027. Registry authenticity was not independently verified. Registration does not establish security controls.
- Replaced the unsupported analytics-consent claim with a browser-storage notice. No analytics or advertising integration was found in the reviewed application source.
- Updated the privacy draft and kept it visibly marked as a draft with noindex metadata.

## Decisions needed before adopting the public policy

1. Assign the staff member responsible for privacy requests and confirm the privacy mailbox is monitored.
2. Choose and document care-conversation, prescription, payment, complaint, operational-log, and backup retention periods based on actual duties. Define deletion owners, legal holds, and backup expiry. No arbitrary periods have been represented as approved.
3. Inventory staff WhatsApp devices, linked sessions, access permissions, lost-device response, and backup configuration; document patient-authority checks and authorised family updates.
4. Confirm hosting and other processors, locations, contracts, transfer safeguards, HTTPS, access controls, incident response, and restore/deletion procedures.
5. Review optional payment endpoints before activation: prices are client-supplied; verification is reference-based rather than authenticated; the webhook acknowledges receipt but does not persist/reconcile an order; the configured callback has no matching success page. These are pre-existing payment limitations, not a completed checkout implementation.
6. Substantiate any remaining clinical/licensing and marketing statements elsewhere in the source. This change does not independently verify professional licences or suppliers.

## Reference material

- [WhatsApp privacy policy](https://www.whatsapp.com/legal/privacy-policy): messages, business recipients, and third-party processing; reviewed 20 September 2026.
- [NDPC FAQs](https://ndpc.gov.ng/faqs/): Nigerian regulatory context; reviewed during policy drafting.
- The original policy structure was informed by [OneHealthNG](https://onehealthng.com/privacy-policy), [Pharmarun](https://www.pharmarun.africa/privacy-policy), and [FlologPharma](https://flologpharma.co/privacy-policy). Their operational claims are not evidence about PocketPill.

## Validation

Production build, TypeScript, targeted lint, and three request-helper tests passed. Browser review found and fixed the nested Lineage route so /lineage/start renders the intake form. Medicine copy/review handoff was checked with synthetic data; no requests were sent.
