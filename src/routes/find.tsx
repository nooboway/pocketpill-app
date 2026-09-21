import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, FileSignature, Truck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RequestHandoff } from "@/components/request-handoff";
import { requestSummary, isValidPhone } from "@/lib/care-request";

export const Route = createFileRoute("/find")({
  component: FindMedicinePage,
  head: () => ({
    meta: [
      { title: "Find a medicine | PocketPill" },
      {
        name: "description",
        content: "Looking for a drug? Send the name or a photo. A pharmacist finds it and reverts.",
      },
    ],
  }),
});

function FindMedicinePage() {
  const [summary, setSummary] = useState("");
  const [consent, setConsent] = useState(false);
  const [query, setQuery] = useState("");
  const [prescriptionReady, setPrescriptionReady] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Details form
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const hasContent = query.trim().length > 0 || prescriptionReady;

  const handleInitialInput = () => {
    if (hasContent) {
      setShowDetails(true);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasContent) {
      setError("Enter a medicine name or choose to attach a prescription in WhatsApp.");
      return;
    }
    if (!showDetails) {
      setShowDetails(true);
      return;
    }
    if (!phone) {
      setError("Please provide your WhatsApp number so we can reach you.");
      return;
    }

    if (!isValidPhone(phone)) {
      setError("Please enter a valid phone number, including the country code if outside Nigeria.");
      return;
    }
    if (!consent) {
      setError("Please confirm permission to share the request before continuing.");
      return;
    }
    setError("");
    setSummary(
      requestSummary("PocketPill medicine request", {
        Medicine: query,
        Name: name,
        WhatsApp: phone,
        City: city,
        Quantity: duration,
        "Prescription or photo to attach in this chat": prescriptionReady,
        "Permission to share these details for pharmacist review": true,
      }),
    );
  };

  const clearRequest = () => {
    setSummary("");
    setQuery("");
    setPhone("");
    setName("");
    setCity("");
    setDuration("");
    setPrescriptionReady(false);
    setConsent(false);
    setShowDetails(false);
    setError("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f3f7f1]">
      <SiteHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {summary ? (
          <RequestHandoff summary={summary} onEdit={() => setSummary("")} onClear={clearRequest} />
        ) : (
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
            {/* Left Column: The Promise */}
            <div className="bg-[#123d2d] text-white rounded-3xl p-8 lg:p-12 shadow-card relative overflow-hidden flex flex-col justify-between min-h-[500px]">
              <div className="relative z-10">
                <span className="text-[#9fd9ae] font-bold tracking-widest text-xs uppercase mb-4 block">
                  Concierge Sourcing
                </span>
                <h1 className="text-4xl lg:text-5xl font-heading font-semibold mb-6 leading-tight">
                  Stop driving from pharmacy to pharmacy.
                </h1>
                <p className="text-[#dce7df] text-lg mb-12 max-w-md leading-relaxed">
                  Tell us what you need. Our clinical pharmacists will source genuine medications
                  and coordinate delivery directly to your door.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-[#1a523d] p-3 rounded-2xl h-fit flex-shrink-0">
                      <Search className="text-[#b6e3c7] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1. You request</h3>
                      <p className="text-[#dce7df] text-sm mt-1 leading-relaxed">
                        Send the name, a photo of the box, or your prescription.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#1a523d] p-3 rounded-2xl h-fit flex-shrink-0">
                      <FileSignature className="text-[#b6e3c7] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2. Pharmacist review</h3>
                      <p className="text-[#dce7df] text-sm mt-1 leading-relaxed">
                        We verify the prescription, check interactions, and confirm availability via
                        WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#1a523d] p-3 rounded-2xl h-fit flex-shrink-0">
                      <Truck className="text-[#b6e3c7] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">3. Direct delivery</h3>
                      <p className="text-[#dce7df] text-sm mt-1 leading-relaxed">
                        Secure payment and discreet delivery to your location in Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background gradient effects */}
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2b8a62] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </div>

            {/* Right Column: The Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card border border-border/40">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
                    What do you need?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Type the medicine name or choose to attach a prescription in WhatsApp.
                  </p>
                </div>

                <div className="space-y-6">
                  <Input
                    id="medicine-name"
                    maxLength={500}
                    aria-label="Medicine name"
                    placeholder="e.g. Glucophage, Augmentin, Insulin..."
                    className="text-lg py-7 px-5 bg-[#f9faf7] border-border/60 shadow-inner rounded-xl placeholder:text-muted-foreground/50 focus-visible:ring-[#2b8a62]"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (e.target.value.length > 2) setShowDetails(true);
                      if (error) setError("");
                    }}
                    onBlur={handleInitialInput}
                  />

                  <label className="flex items-start gap-3 rounded-xl border border-border/60 bg-[#f9faf7] p-5 text-sm">
                    <input
                      type="checkbox"
                      checked={prescriptionReady}
                      onChange={(e) => {
                        setPrescriptionReady(e.target.checked);
                        setShowDetails(true);
                        setError("");
                      }}
                      className="mt-1 accent-[#123d2d]"
                    />
                    <span>
                      I will attach a prescription or medicine photo in WhatsApp. Files are attached
                      in the chat, not uploaded here.
                    </span>
                  </label>
                </div>

                {showDetails && (
                  <div className="animate-in slide-in-from-top-4 fade-in duration-300 space-y-6 pt-6 border-t border-border/50">
                    <h3 className="font-medium text-foreground">Where should we reach you?</h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="medicine-phone"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          WhatsApp number *
                        </label>
                        <Input
                          id="medicine-phone"
                          maxLength={200}
                          placeholder="e.g. 08012345678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-[#f9faf7]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="medicine-city"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          City / area in Nigeria
                        </label>
                        <Input
                          id="medicine-city"
                          maxLength={200}
                          placeholder="e.g. Ikeja, Lagos"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="bg-[#f9faf7]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="medicine-contact"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Your name (optional)
                        </label>
                        <Input
                          id="medicine-contact"
                          maxLength={200}
                          placeholder="Jane"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-[#f9faf7]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="medicine-quantity"
                          className="text-sm font-medium text-muted-foreground"
                        >
                          Quantity (optional)
                        </label>
                        <Input
                          id="medicine-quantity"
                          maxLength={200}
                          placeholder="e.g. 1 month supply"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="bg-[#f9faf7]"
                        />
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
                        I agree to share this request for pharmacist review. If it concerns someone
                        else, I have their permission or legal authority.{" "}
                        <Link to="/privacy-policy" className="underline">
                          Privacy policy
                        </Link>
                      </span>
                    </label>
                    {error && (
                      <p
                        role="alert"
                        className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md"
                      >
                        {error}
                      </p>
                    )}

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#123d2d] text-white hover:bg-[#1a523d] rounded-xl h-14 text-lg font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                      >
                        Review WhatsApp request
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        You will review and send the request yourself in WhatsApp. Nothing is sent
                        by this form, and no payment is taken.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
