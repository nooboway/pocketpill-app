import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

// Simple search params validation
type BookSearch = {
  plan?: string;
  price?: number;
};

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Private Consultation — PocketPill" },
      { name: "description", content: "Book a discreet pharmacist-led consultation on PocketPill. Pay securely in Naira and get your session confirmed on WhatsApp." },
      { property: "og:title", content: "Book a Private Consultation — PocketPill" },
      { property: "og:description", content: "Book a discreet pharmacist-led consultation on PocketPill. Pay securely in Naira and get your session confirmed on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
  validateSearch: (search: Record<string, unknown>): BookSearch => {
    const result: BookSearch = {};
    if (search['plan']) result.plan = search['plan'] as string;
    if (search['price']) result.price = Number(search['price']);
    return result;
  },
});

function BookPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Defaults if no search params
  const planName = search.plan || "Standard Consultation";
  const planPrice = search.price || 25000;

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/public/initialize-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount: planPrice, // Backend expects Naira and converts to kobo
          plan: planName
        })
      });
      const data = await res.json();
      
      if (data.authorization_url) {
        // Redirect user directly to Paystack's secure hosted checkout page
        window.location.href = data.authorization_url;
      } else {
        alert("Payment Error: " + (data.error || "Could not initialize payment"));
        setIsProcessing(false);
      }
    } catch (e) {
      console.error(e);
      alert("Network error. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 bg-card rounded-2xl border border-border/50 relative overflow-hidden shadow-2xl">
        
        {/* Left Side: Booking Details */}
        <div className="flex flex-col p-8 md:p-12 bg-primary/5">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-6">Confirm Booking</h1>
          
          <div className="mt-2 flex flex-col space-y-2">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Selected Plan</span>
            <span className="text-2xl font-bold text-foreground font-serif">{planName}</span>
          </div>
          
          <div className="mt-8 flex flex-col space-y-2">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Total Cost</span>
            <span className="text-4xl font-bold text-primary font-mono">₦{planPrice.toLocaleString()}</span>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
            Your private consultation will be scheduled immediately upon successful payment. All sessions are 100% confidential.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center p-8 md:p-12 md:border-l border-border/50">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-sans">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" 
                className="w-full bg-background border border-border/50 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/50 transition-all"
              />
            </div>

            <button 
              disabled={!email || isProcessing}
              onClick={handleCheckout}
              className="bg-primary text-primary-foreground font-semibold rounded-md w-full py-4 text-lg mt-4 disabled:opacity-50 shadow-xl hover:bg-primary/90 transition-colors"
            >
              {isProcessing ? "Connecting to Paystack..." : `Pay Securely ₦${planPrice.toLocaleString()}`}
            </button>

            <div className="flex justify-center mt-6">
              <span className="text-xs text-muted-foreground flex items-center space-x-2 font-sans">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Secured via API by Paystack</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
