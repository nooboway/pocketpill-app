# Lineage email on Vercel

The Lineage form submits JSON to `/api/public/lineage-request`. The Vercel Node server validates it and sends plain-text email to **care@pocketpill.co** using email. Medicine requests still use the existing WhatsApp handoff. Prescription attachments are not uploaded; pharmacists arrange follow-up.

## Activate delivery

1. Import the PocketPill repository/branch into Vercel. Use Node 22 or newer, `npm ci` to install, and `npm run build`. The Nitro preset is `vercel`; this must be a server deployment, not a static export or Edge-only deployment.
2. In Vercel project Settings → Environment Variables, set **SMTP_PASSWORD** to the password/app password for the **care@pocketpill.co** Private Email mailbox. Set it only for environments that should send email, then redeploy. Do not put credentials in chat, Git, browser code, or a `VITE_` variable. For local testing, supply SMTP_PASSWORD to the server process through your local secret-management setup and restart Vite. Vercel environment variables do not automatically populate your local process.
3. SMTP is fixed to `mail.privateemail.com`, port 465, TLS with certificate checks. The sender and recipient are both care@pocketpill.co; the customer's validated email is Reply-To. A generic subject avoids exposing patient names in notifications. No copies go to customers or user-selected recipients.
4. Configure Vercel WAF rate limiting for POST `/api/public/lineage-request` before public launch. The included honeypot, same-origin check, body limit, and per-process limit are basic safeguards; serverless instances do not share a durable rate limiter.
5. Confirm only authorised pharmacists can access the care mailbox, including linked devices and forwarding rules. Confirm SPF/DKIM/DMARC and provider retention/backup settings in the email account. The application cannot enforce mailbox staff permissions.
6. With the owner present, submit a clearly marked synthetic request and verify its arrival in care@pocketpill.co. Check spam/junk and reply routing. No live message was sent during development.

Without the secret, submissions return 503 with a clear “not sent” message. SMTP rejection/errors never display success. Acceptance means the email server accepted delivery, not guaranteed inbox placement or pharmacist review. Network errors can leave delivery uncertain; the UI advises contacting care before resubmission. No automatic retries, durable queue, or cross-instance duplicate prevention are implemented.

No care-record database is added. Successful submissions leave copies in the mailbox/provider systems; clearing the browser form cannot delete those. Application code does not log payloads or SMTP errors. Production platform logging, access, and retention still require review.

References: [Namecheap contact-form SMTP](https://www.namecheap.com/support/knowledgebase/article/10038/31/how-to-configure-a-contact-form-with-us/), [Nodemailer SMTP](https://nodemailer.com/smtp), [Vercel email guidance](https://vercel.com/kb/guide/sending-emails-from-an-application-on-vercel).
