import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { requestSummary, isValidPhone } from "@/lib/care-request";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/lineage_/start")({
  component: LineageStartPage,
  head: () => ({
    meta: [
      { title: "Start a Lineage Plan | PocketPill" },
      { name: "description", content: "Set up a Lineage care plan for your parent in Nigeria." },
    ],
  }),
});

function LineageStartPage() {
  const [summary, setSummary] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [website, setWebsite] = useState("");
  const sendingRef = useRef(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [prescriptionReady, setPrescriptionReady] = useState(false);

  // Form fields
  const [yourName, setYourName] = useState("");
  const [yourWhatsApp, setYourWhatsApp] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [city, setCity] = useState("");
  const [caregiverName, setCaregiverName] = useState("");
  const [caregiverPhone, setCaregiverPhone] = useState("");
  const [knownMedicines, setKnownMedicines] = useState("");
  const [readyToFund, setReadyToFund] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (![yourName, yourEmail, parentName, city, caregiverName].every((value) => value.trim())) {
      setError("Please complete all required details.");
      return;
    }
    if (!isValidPhone(yourWhatsApp) || !isValidPhone(caregiverPhone)) {
      setError("Please enter valid contact numbers, including country codes where needed.");
      return;
    }
    if (!prescriptionReady) {
      setError("Please confirm that you can provide the prescription to the pharmacist.");
      return;
    }
    if (!consent) {
      setError("Please confirm your permission or legal authority to share these details.");
      return;
    }
    setError("");
    setSummary(
      requestSummary("PocketPill Lineage request", {
        "Your name": yourName,
        "Your WhatsApp": yourWhatsApp,
        "Your email": yourEmail,
        "Parent's name": parentName,
        "Parent's city": city,
        "Caregiver name": caregiverName,
        "Caregiver phone": caregiverPhone,
        Medicines: knownMedicines,
        "Ready to discuss funding": readyToFund,
        "Will provide prescription to pharmacist": prescriptionReady,
        "Permission or legal authority to share for pharmacist review": consent,
      }),
    );
  };

  const sendRequest = async () => {
    if (sendingRef.current) return;
    sendingRef.current = true;
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/public/lineage-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          yourName,
          yourWhatsApp,
          yourEmail,
          parentName,
          city,
          caregiverName,
          caregiverPhone,
          knownMedicines,
          readyToFund,
          prescriptionReady,
          consent,
          website,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setError(
          result.error ||
            "We could not confirm delivery. Please contact care@pocketpill.co before resubmitting.",
        );
        return;
      }
      clearRequest();
      setSent(true);
    } catch {
      setError(
        "We could not confirm delivery. Please contact care@pocketpill.co before resubmitting to avoid a duplicate.",
      );
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  };

  const clearRequest = () => {
    setSent(false);
    setWebsite("");
    setSummary("");
    setYourName("");
    setYourWhatsApp("");
    setYourEmail("");
    setParentName("");
    setCity("");
    setCaregiverName("");
    setCaregiverPhone("");
    setKnownMedicines("");
    setReadyToFund(false);
    setPrescriptionReady(false);
    setConsent(false);
    setError("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          {sent ? (
            <section className="space-y-5 rounded-2xl border p-8" role="status">
              <h1 className="text-2xl font-semibold">Request sent for email delivery</h1>
              <p>
                Our email service has accepted your Lineage request for care@pocketpill.co. A
                pharmacist still needs to review it; this is not confirmation of a care plan or
                medicine availability.
              </p>
              <p>
                If you need to follow up, contact{" "}
                <a className="underline" href="mailto:care@pocketpill.co">
                  care@pocketpill.co
                </a>
                .
              </p>
              <Button onClick={clearRequest}>Start another request</Button>
            </section>
          ) : summary ? (
            <section className="space-y-5 rounded-2xl border p-6 sm:p-8" aria-busy={sending}>
              <h1 className="text-2xl font-semibold">Review your Lineage request</h1>
              <p>
                Your request has not been sent. Check the details before emailing them to our
                pharmacists at care@pocketpill.co.
              </p>
              <label htmlFor="lineage-review" className="block font-medium">
                Request details
              </label>
              <textarea
                id="lineage-review"
                readOnly
                value={summary}
                rows={13}
                className="w-full rounded-lg border p-3 text-sm"
              />
              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <Button disabled={sending} onClick={sendRequest}>
                  {sending ? "Sending…" : "Send to PocketPill"}
                </Button>
                <Button
                  disabled={sending}
                  variant="outline"
                  onClick={() => {
                    setSummary("");
                    setError("");
                  }}
                >
                  Edit details
                </Button>
                <Button disabled={sending} variant="outline" onClick={clearRequest}>
                  Clear request
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Your details are processed through our website and Namecheap Private Email for
                pharmacist review. No prescription file is uploaded here.
              </p>
            </section>
          ) : (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <span className="text-[#123d2d] font-bold tracking-widest text-xs uppercase mb-4 block">
                  Lineage Setup
                </span>
                <h1 className="text-3xl font-heading font-semibold text-foreground mb-4">
                  Start a parent plan
                </h1>
                <p className="text-muted-foreground">
                  Prepare the details below, then review and send them directly to our pharmacists
                  by email.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-8 bg-cream/30 p-6 sm:p-8 rounded-2xl border border-border/40"
              >
                <div hidden aria-hidden="true">
                  <label htmlFor="lineage-website">Leave this field empty</label>
                  <input
                    id="lineage-website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                {/* Your Details */}
                <div className="space-y-5">
                  <h3 className="font-semibold text-lg border-b border-border/50 pb-2">
                    Your details
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="lineage-yourName" className="text-sm font-medium">
                        Your name *
                      </label>
                      <Input
                        id="lineage-yourName"
                        maxLength={200}
                        value={yourName}
                        onChange={(e) => setYourName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lineage-yourWhatsApp" className="text-sm font-medium">
                        Your WhatsApp *
                      </label>
                      <Input
                        id="lineage-yourWhatsApp"
                        maxLength={200}
                        placeholder="Abroad is fine"
                        value={yourWhatsApp}
                        onChange={(e) => setYourWhatsApp(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="lineage-yourEmail" className="text-sm font-medium">
                        Your email *
                      </label>
                      <Input
                        id="lineage-yourEmail"
                        maxLength={200}
                        type="email"
                        value={yourEmail}
                        onChange={(e) => setYourEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Parent Details */}
                <div className="space-y-5">
                  <h3 className="font-semibold text-lg border-b border-border/50 pb-2">
                    Parent & Caregiver details
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="lineage-parentName" className="text-sm font-medium">
                        Parent's name *
                      </label>
                      <Input
                        id="lineage-parentName"
                        maxLength={200}
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lineage-city" className="text-sm font-medium">
                        City / area in Nigeria *
                      </label>
                      <Input
                        id="lineage-city"
                        maxLength={200}
                        placeholder="e.g. Surulere, Lagos"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lineage-caregiverName" className="text-sm font-medium">
                        Caregiver name *
                      </label>
                      <Input
                        id="lineage-caregiverName"
                        maxLength={200}
                        value={caregiverName}
                        onChange={(e) => setCaregiverName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lineage-caregiverPhone" className="text-sm font-medium">
                        Caregiver phone *
                      </label>
                      <Input
                        id="lineage-caregiverPhone"
                        maxLength={200}
                        placeholder="Nigerian number"
                        value={caregiverPhone}
                        onChange={(e) => setCaregiverPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Medical Details */}
                <div className="space-y-5">
                  <h3 className="font-semibold text-lg border-b border-border/50 pb-2">
                    Prescription
                  </h3>

                  <label className="flex items-start gap-3 rounded-xl border border-border/60 p-4 text-sm">
                    <input
                      type="checkbox"
                      checked={prescriptionReady}
                      onChange={(e) => setPrescriptionReady(e.target.checked)}
                      className="mt-1 accent-[#123d2d]"
                    />
                    <span>
                      I can provide the current prescription when the pharmacist contacts me. No
                      files are uploaded by this form.
                    </span>
                  </label>

                  <div className="space-y-2 pt-2">
                    <label htmlFor="lineage-knownMedicines" className="text-sm font-medium">
                      Medicine names you already know (optional)
                    </label>
                    <Input
                      id="lineage-knownMedicines"
                      maxLength={500}
                      placeholder="e.g. Amlodipine 5mg"
                      value={knownMedicines}
                      onChange={(e) => setKnownMedicines(e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-start gap-3">
                  <Checkbox
                    id="fund-wallet"
                    checked={readyToFund}
                    onCheckedChange={(checked) => setReadyToFund(checked as boolean)}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="fund-wallet"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I am ready to discuss funding care
                    </label>
                    <p className="text-sm text-muted-foreground">
                      No payment is taken now. This just tells the pharmacist you are ready to
                      proceed once they verify the prescription.
                    </p>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 accent-[#123d2d]"
                  />
                  <span>
                    I have the patient’s permission or legal authority to share these details for
                    pharmacist review, and permission to share the caregiver’s contact details.
                    Family updates will be agreed with the patient or authorised representative.{" "}
                    <Link to="/privacy-policy" className="underline">
                      Privacy policy
                    </Link>
                  </span>
                </label>
                {error && (
                  <p role="alert" className="text-sm text-destructive">
                    {error}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  You can review your details before sending them to care@pocketpill.co. A
                  pharmacist will arrange any prescription follow-up.
                </p>
                <div className="pt-8 border-t border-border/50 text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-12 h-14 text-lg"
                  >
                    Review email request
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
