import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { RequestHandoff } from "@/components/request-handoff";
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
      setError("Please confirm that you will attach the prescription in WhatsApp.");
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
        "Prescription to attach in this chat": prescriptionReady,
        "Permission or legal authority to share for pharmacist review": consent,
      }),
    );
  };

  const clearRequest = () => {
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
          {summary ? (
            <RequestHandoff
              summary={summary}
              onEdit={() => setSummary("")}
              onClear={clearRequest}
            />
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
                  Prepare the details below, then review and send them to PocketPill in WhatsApp.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-8 bg-cream/30 p-6 sm:p-8 rounded-2xl border border-border/40"
              >
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
                      I will attach the current prescription in WhatsApp. Files are attached in the
                      chat, not uploaded here.
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
                  Nothing is sent by this form. You must paste your request, attach the
                  prescription, and press Send in WhatsApp.
                </p>
                <div className="pt-8 border-t border-border/50 text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-12 h-14 text-lg"
                  >
                    Review WhatsApp request
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
