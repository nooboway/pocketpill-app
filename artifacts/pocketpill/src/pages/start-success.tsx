import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Check, MessageCircle, AlertCircle, Loader2 } from "lucide-react";
import { Navbar, Footer, WHATSAPP_URL } from "./home";

type VerificationState = "loading" | "verified" | "failed";

export default function ConsultationSuccess() {
  const [location] = useLocation();
  const [state, setState] = useState<VerificationState>("loading");
  const [plan, setPlan] = useState("Consultation");
  const [ref, setRef] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference") || params.get("trxref");

    if (!reference) {
      setState("failed");
      return;
    }

    setRef(reference);

    // Verify the payment server-side
    fetch(`/api/verify-payment?reference=${encodeURIComponent(reference)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.verified) {
          setState("verified");
          if (data.plan) setPlan(data.plan);
          if (data.amount) setAmount(`₦${Number(data.amount).toLocaleString()}`);
        } else {
          setState("failed");
        }
      })
      .catch(() => {
        setState("failed");
      });
  }, [location]);

  const message = `Hello PocketPill,\n\nI've completed payment for the *${plan}* consultation.\n\nPayment Reference:\n*${ref || "pending"}*\n\nI'd like to begin my consultation.`;
  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-lg text-center">
          {state === "loading" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card/50 border border-border/50 p-10 md:p-14 rounded-sm shadow-xl">
              <Loader2 className="w-16 h-16 text-primary mx-auto mb-6 animate-spin" />
              <h1 className="font-serif text-3xl mb-4 text-foreground">Verifying Payment...</h1>
              <p className="text-muted-foreground">Please wait while we confirm your payment with Paystack.</p>
            </motion.div>
          )}

          {state === "verified" && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-card/50 border border-border/50 p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
              <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary" strokeWidth={2} />
              </div>
              <h1 className="font-serif text-4xl leading-tight mb-4 text-foreground">Payment Verified</h1>
              <p className="text-muted-foreground text-lg mb-2">
                Your <strong className="text-foreground">{plan}</strong> payment {amount && <>of <strong className="text-foreground">{amount}</strong></>} has been confirmed.
              </p>
              <p className="text-muted-foreground mb-8">
                Please continue to WhatsApp to begin your consultation.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pocket gap-3 w-full px-8 py-5 text-lg tracking-wide hover:-translate-y-1"
              >
                <span>Continue to WhatsApp</span>
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <p className="text-xs text-muted-foreground/50 mt-6">Reference: {ref}</p>
            </motion.div>
          )}

          {state === "failed" && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-card/50 border border-border/50 p-10 md:p-14 rounded-sm shadow-xl">
              <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <AlertCircle className="w-10 h-10 text-red-500" strokeWidth={2} />
              </div>
              <h1 className="font-serif text-4xl leading-tight mb-4 text-foreground">Payment Not Verified</h1>
              <p className="text-muted-foreground text-lg mb-8">
                We couldn't verify your payment. If you believe this is an error, please contact us via WhatsApp with your reference number.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello PocketPill, I need help with a payment issue.\n\nReference: ${ref || "N/A"}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pocket gap-3 w-full px-8 py-5 text-lg tracking-wide hover:-translate-y-1"
                >
                  <span>Contact Support</span>
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="/start" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ← Try again
                </a>
              </div>
              {ref && <p className="text-xs text-muted-foreground/50 mt-6">Reference: {ref}</p>}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
