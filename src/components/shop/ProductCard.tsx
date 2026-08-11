import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProductProps {
  slug: string;
  title: string;
  description: string | null;
  coverImage: string | null;
  price: number;
  originalPrice: number | null;
  inStock?: boolean;
}

export function ProductCard({ slug, title, description, coverImage, price, originalPrice, inStock = true }: ProductProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  
  const formattedPrice = (price / 100).toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });
  const formattedOriginal = originalPrice ? (originalPrice / 100).toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }) : null;

  const handlePayment = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    
    setIsProcessing(true);
    setError("");
    
    try {
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          amount: price,
          metadata: {
            product_slug: slug,
            product_title: title,
          }
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        setError(data.error || "Failed to initialize payment. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please check your connection.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`flex flex-col h-full items-start bg-card text-card-foreground shadow-sm rounded-xl border border-border/60 p-4 transition-all hover:shadow-md relative ${!inStock ? 'opacity-80' : ''}`}>
      {!inStock && (
        <span className="absolute top-6 right-6 z-10 bg-black text-white text-xs font-semibold px-2 py-1 rounded-sm shadow-sm uppercase tracking-wider">
          Out of Stock
        </span>
      )}
      {coverImage ? (
        <img src={coverImage} alt={title} className={`w-full h-56 object-cover rounded-md mb-4 shadow-sm ${!inStock ? 'grayscale opacity-70' : ''}`} />
      ) : (
        <div className="w-full h-56 bg-muted/20 rounded-md mb-4 flex items-center justify-center border border-border/50">
          <span className="text-muted-foreground text-sm">No cover available</span>
        </div>
      )}
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 flex-grow">{description}</p>
      
      <div className="flex items-end justify-between w-full mt-auto pt-4 border-t border-border">
        <div className="flex flex-col">
          {formattedOriginal && (
            <span className="text-xs text-muted-foreground line-through font-mono">{formattedOriginal}</span>
          )}
          <span className="text-lg font-bold text-primary font-mono">{formattedPrice}</span>
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button 
              disabled={!inStock}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {inStock ? "Buy Now" : "Sold Out"}
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Checkout</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="text-4xl">🛍️</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">Total: {formattedPrice}</p>
              
              <div className="w-full pt-4 space-y-3 border-t">
                {error && <p className="text-sm text-red-500">{error}</p>}
                <div className="space-y-1 text-left">
                  <label htmlFor="email" className="text-xs font-medium text-foreground">Email Address</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isProcessing}
                    required
                  />
                </div>
                <button 
                  className="w-full mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow disabled:opacity-50" 
                  onClick={handlePayment}
                  disabled={isProcessing || !email}
                >
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </button>
                <button 
                  className="w-full inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground" 
                  onClick={() => setIsOpen(false)}
                  disabled={isProcessing}
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Nudge toward booking a consult */}
      <div className="w-full mt-4 pt-4 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground mb-2">Need a personalized plan?</p>
        <Link to="/services" className="text-xs font-semibold text-primary hover:underline">
          Book a Consultation →
        </Link>
      </div>
    </div>
  );
}
