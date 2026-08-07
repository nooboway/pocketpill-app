import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Check, MessageCircle, ChevronRight } from "lucide-react";
import { Navbar, Footer, WHATSAPP_URL } from "./home";

export default function ConsultationSuccess() {
  const [location] = useLocation();
  const [plan, setPlan] = useState("Consultation");
  const [ref, setRef] = useState("");

  useEffect(() => {
    // Extract plan and ref from URL if possible
    const params = new URLSearchParams(window.location.search);
    const p = params.get("plan");
    const r = params.get("reference");
    if (p) setPlan(decodeURIComponent(p));
    if (r) setRef(r);
  }, [location]);

  const message = `Hello PocketPill,\n\nI've completed payment for the *${plan}* consultation.\n\nPayment Reference:\n*${ref || "pending"}*\n\nI'd like to begin my consultation.`;
  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-lg text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-card/50 border border-border/50 p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
            <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-primary" strokeWidth={2} />
            </div>
            <h1 className="font-serif text-4xl leading-tight mb-4 text-foreground">Payment Received</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for choosing PocketPill. Your consultation is almost ready. Please continue to WhatsApp to begin.
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
