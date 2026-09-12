import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { submitDrugRequest } from "../server-fns/drug-request";
import { UploadCloud, ArrowRight, Check, CornerDownLeft } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Pharmacy & Sourcing — PocketPill" },
      { name: "description", content: "PocketPill Pharmacy is coming soon. Request a specific drug and our sourcing team will find it for you." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form Data State
  const [drugDetails, setDrugDetails] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // Refs for auto-focus
  const drugInputRef = useRef<HTMLInputElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus logic
  useEffect(() => {
    if (step === 1) {
      drugInputRef.current?.focus();
    } else if (step === 3) {
      contactInputRef.current?.focus();
    }
  }, [step]);

  // Handle Enter key for proceeding
  const handleKeyDown = (e: React.KeyboardEvent, nextStep: number, isEnabled: boolean) => {
    if (e.key === "Enter" && isEnabled) {
      e.preventDefault();
      setStep(nextStep);
    }
  };

  const handleSubmit = async () => {
    if (!drugDetails || !contactInfo) return;
    
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.append("drugDetails", drugDetails);
    formData.append("contactInfo", contactInfo);
    if (file) {
      formData.append("screenshot", file);
    }

    try {
      const result = await submitDrugRequest({ data: formData });
      if (result.success) {
        setStep(4); // Success step
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit request. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f9faf7]">
      <SiteHeader />
      
      <main className="flex flex-1 flex-col items-center relative overflow-hidden">
        {/* Coming Soon Hero */}
        <section className="w-full bg-[#133c2c] text-white">
          <div className="container-tight py-12 text-center md:py-20">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#D4A843] mb-6">
              Coming Soon
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              The Digital Pharmacy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
              We're building a seamless shopping experience for all your pharmacy essentials. While we put the finishing touches on our store, our sourcing team is ready to help you find exactly what you need.
            </p>
          </div>
        </section>

        {/* Progress Indicator */}
        {step < 4 && (
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#e8ede9] z-10">
            <div 
              className="h-full bg-[#133c2c] transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Form Container Wrapper */}
        <div className="flex w-full flex-1 items-center justify-center py-12 md:py-20">
          <div className="container-tight w-full max-w-3xl px-6">
            
            {/* STEP 1: Drug Details */}
            {step === 1 && (
              <div className="typeform-step animate-slide-up">
                <div className="mb-2 flex items-center gap-3 font-heading text-sm font-bold text-[#133c2c]">
                  <span>1</span> <ArrowRight className="h-4 w-4" />
                </div>
                <h1 className="font-heading text-3xl font-bold text-[#1a2e23] md:text-5xl lg:text-6xl mb-8">
                  What medication are you looking for?
                </h1>
                <div className="relative">
                  <input
                    ref={drugInputRef}
                    type="text"
                    value={drugDetails}
                    onChange={(e) => setDrugDetails(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, 2, drugDetails.trim().length > 0)}
                    placeholder="e.g. Augmentin 625mg or 'High blood pressure meds'"
                    className="w-full border-b-2 border-[#133c2c]/20 bg-transparent py-4 text-2xl text-[#1a2e23] placeholder-[#a0b0a8] outline-none transition-colors focus:border-[#133c2c] md:text-4xl"
                  />
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!drugDetails.trim()}
                    className="flex items-center gap-2 rounded-full bg-[#133c2c] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    OK <Check className="h-5 w-5" />
                  </button>
                  <div className="hidden items-center gap-1 text-xs font-medium text-[#6b7b73] md:flex opacity-50">
                    press <strong className="font-bold">Enter </strong> <CornerDownLeft className="h-3 w-3" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: File Upload */}
            {step === 2 && (
              <div className="typeform-step animate-slide-up">
                <div className="mb-2 flex items-center gap-3 font-heading text-sm font-bold text-[#133c2c]">
                  <span>2</span> <ArrowRight className="h-4 w-4" />
                </div>
                <h1 className="font-heading text-3xl font-bold text-[#1a2e23] md:text-5xl lg:text-5xl mb-4">
                  Got a prescription or a picture?
                </h1>
                <p className="mb-8 text-xl text-[#6b7b73]">
                  Upload a screenshot of the drug or your prescription to help our team. You can skip this if you don't have one.
                </p>
                
                <div className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#133c2c]/20 bg-white/50 px-6 py-16 transition-colors hover:border-[#133c2c] hover:bg-white">
                  <UploadCloud className="mb-4 h-12 w-12 text-[#133c2c]/60" />
                  <span className="text-xl font-bold text-[#1a2e23]">
                    {file ? file.name : "Click to select a file"}
                  </span>
                  <span className="mt-2 text-sm text-[#6b7b73]">PNG, JPG, PDF up to 5MB</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={(e) => {
                      const selected = e.target.files?.[0];
                      if (selected) {
                        setFile(selected);
                        // Auto-advance after brief delay if a file is uploaded
                        setTimeout(() => setStep(3), 600);
                      }
                    }}
                  />
                </div>

                <div className="mt-8 flex items-center gap-4">
                  {file ? (
                     <button
                     onClick={() => setStep(3)}
                     className="flex items-center gap-2 rounded-full bg-[#133c2c] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02]"
                   >
                     Next <ArrowRight className="h-5 w-5" />
                   </button>
                  ) : (
                    <button
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 rounded-full border-2 border-[#133c2c] bg-transparent px-8 py-4 text-lg font-bold text-[#133c2c] transition-colors hover:bg-[#133c2c] hover:text-white"
                    >
                      Skip this step
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info */}
            {step === 3 && (
              <div className="typeform-step animate-slide-up">
                <div className="mb-2 flex items-center gap-3 font-heading text-sm font-bold text-[#133c2c]">
                  <span>3</span> <ArrowRight className="h-4 w-4" />
                </div>
                <h1 className="font-heading text-3xl font-bold text-[#1a2e23] md:text-5xl lg:text-6xl mb-8">
                  Where should we send the details?
                </h1>
                <div className="relative">
                  <input
                    ref={contactInputRef}
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && contactInfo.trim().length > 0 && !isSubmitting) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                    placeholder="Your Email or WhatsApp number"
                    className="w-full border-b-2 border-[#133c2c]/20 bg-transparent py-4 text-2xl text-[#1a2e23] placeholder-[#a0b0a8] outline-none transition-colors focus:border-[#133c2c] md:text-4xl"
                  />
                </div>

                {error && (
                  <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                    {error}
                  </div>
                )}

                <div className="mt-8 flex items-center gap-4">
                  <button
                    onClick={handleSubmit}
                    disabled={!contactInfo.trim() || isSubmitting}
                    className="flex items-center gap-2 rounded-full bg-[#133c2c] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                    {!isSubmitting && <Check className="h-5 w-5" />}
                  </button>
                  <div className="hidden items-center gap-1 text-xs font-medium text-[#6b7b73] md:flex opacity-50">
                    press <strong className="font-bold">Enter </strong> <CornerDownLeft className="h-3 w-3" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Success */}
            {step === 4 && (
              <div className="typeform-step animate-slide-up flex flex-col justify-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#133c2c] text-white">
                  <Check className="h-12 w-12" />
                </div>
                <h1 className="font-heading text-4xl font-bold text-[#1a2e23] md:text-6xl mb-6">
                  We're on it.
                </h1>
                <p className="text-xl text-[#6b7b73] max-w-xl leading-relaxed">
                  Our sourcing team is checking availability for <strong>{drugDetails}</strong>. We'll be in touch via {contactInfo} as soon as we have an update.
                </p>
                <div className="mt-12">
                  <button 
                    onClick={() => {
                      setStep(1);
                      setDrugDetails("");
                      setContactInfo("");
                      setFile(null);
                    }}
                    className="text-lg font-bold text-[#133c2c] underline decoration-2 underline-offset-4 hover:text-[#1a2e23]"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Hide footer during Typeform flow to keep it distraction-free */}
      {step === 4 && <SiteFooter />}
    </div>
  );
}
