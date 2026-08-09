import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { usePaystackPayment } from "react-paystack";

export default function CheckoutPage() {
  const { slug } = useParams<{ slug: string }>();
  const [_, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock product data for the tripwire (since local DB might not be seeded)
  const mockTripwire = {
    id: 1,
    title: "The Stamina Blueprint",
    price: 1078000, // ₦10,780 in kobo
    originalPrice: 2695000, // ₦26,950 in kobo
    coverImage: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop",
  };

  const product = slug === "the-stamina-blueprint" ? mockTripwire : null;

  const initializePayment = useMutation({
    mutationFn: async () => {
      // In production, we initialize the order in the backend first
      return { orderId: 1 };
    }
  });

  const paystackConfig = {
    reference: `ref_${new Date().getTime()}`,
    email: email || "customer@example.com",
    amount: product?.price || 1078000,
    publicKey: "pk_test_placeholder", // Replace with real Paystack public key
  };

  // @ts-ignore - The react-paystack typings might be slightly off in strict mode
  const initializePaystack = usePaystackPayment(paystackConfig);

  const onSuccess = (reference: any) => {
    setIsProcessing(true);
    fetch("/api/checkout/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reference: reference.reference,
        email,
        productId: product?.id,
        amount: product?.price
      })
    }).finally(() => {
      setIsProcessing(false);
      alert("Payment successful! Please check your email for the download link.");
      setLocation("/shop");
    });
  };

  const onClose = () => {
    setIsProcessing(false);
  };

  if (!product) {
    return <div className="p-24 text-center mt-20">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 glass-card relative overflow-hidden">
        
        {/* Discount Badge */}
        <div className="absolute top-0 right-0 bg-[#e05c2a] text-white font-bold px-6 py-2 rounded-bl-xl z-10 font-sans tracking-wide">
          60% DISCOUNT
        </div>

        {/* Left Side: Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-6">Secure Checkout</h1>
          <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-2xl mb-6">
            <img src={product.coverImage} alt={product.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-serif">{product.title}</h2>
          </div>
          
          <div className="mt-2 flex items-baseline space-x-4">
            <span className="text-xl text-muted-foreground line-through font-mono">₦26,950</span>
            <span className="text-4xl font-bold text-primary font-mono">₦10,780</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Secure digital delivery. The PDF blueprint will be sent immediately to your email address upon successful payment.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center mt-8 md:mt-0 md:pl-8 md:border-l border-border/50">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-sans">Email Address for Delivery</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com" 
                className="w-full bg-input/50 border border-border/50 rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/50 transition-all"
              />
            </div>

            <button 
              disabled={!email || isProcessing}
              onClick={() => {
                setIsProcessing(true);
                initializePayment.mutate(undefined, {
                  onSuccess: () => {
                    initializePaystack({ onSuccess, onClose });
                  }
                });
              }}
              className="btn-pocket w-full py-4 text-lg mt-4 disabled:opacity-50 shadow-xl"
            >
              {isProcessing ? "Processing..." : "Pay Securely ₦10,780"}
            </button>

            <div className="flex justify-center mt-6">
              <span className="text-xs text-muted-foreground flex items-center space-x-2 font-sans">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Secured by Paystack</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
