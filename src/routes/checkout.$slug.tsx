import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getProductBySlug } from "@/lib/products";

export const Route = createFileRoute("/checkout/$slug")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const product = getProductBySlug(slug);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch("/api/initialize-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount: product ? product.price / 100 : 10780,
          plan: product?.name || "Product"
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

  if (!product) {
    return <div className="p-24 text-center mt-20 text-foreground">Product not found.</div>;
  }

  const priceNaira = product.price / 100;
  const originalPriceNaira = product.compareAtPrice ? product.compareAtPrice / 100 : null;
  const isDiscounted = originalPriceNaira !== null && originalPriceNaira > priceNaira;
  const discountPercent = isDiscounted ? Math.round(((originalPriceNaira! - priceNaira) / originalPriceNaira!) * 100) : 0;

  return (
    <div className="min-h-screen bg-background pt-32 pb-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 bg-card rounded-2xl border border-border/50 relative overflow-hidden shadow-2xl">
        
        {/* Discount Badge */}
        {isDiscounted && (
          <div className="absolute top-0 right-0 bg-[#e05c2a] text-white font-bold px-6 py-2 rounded-bl-xl z-10 font-sans tracking-wide">
            {discountPercent}% DISCOUNT
          </div>
        )}

        {/* Left Side: Product Details */}
        <div className="flex flex-col p-8 md:p-12">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-6">Secure Checkout</h1>
          <div className="relative rounded-lg overflow-hidden border border-border/50 shadow-lg mb-6">
            {product.coverImage ? (
              <img src={product.coverImage} alt={product.name} className="w-full h-64 object-cover" />
            ) : (
              <div className="w-full h-64 bg-muted/20 flex items-center justify-center">
                <span className="text-muted-foreground">No cover available</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-serif">{product.name}</h2>
          </div>
          
          <div className="mt-2 flex items-baseline space-x-4">
            {originalPriceNaira && (
              <span className="text-xl text-muted-foreground line-through font-mono">₦{originalPriceNaira.toLocaleString()}</span>
            )}
            <span className="text-4xl font-bold text-primary font-mono">₦{priceNaira.toLocaleString()}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {product.productType === 'digital' 
              ? "Secure digital delivery. The product will be sent immediately to your email address upon successful payment."
              : "Secure checkout. Your product will be processed and shipped."}
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-black/5 md:border-l border-border/50">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2 font-sans">Email Address for {product.productType === 'digital' ? 'Delivery' : 'Order Updates'}</label>
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
              {isProcessing ? "Connecting to Paystack..." : `Pay Securely ₦${priceNaira.toLocaleString()}`}
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
