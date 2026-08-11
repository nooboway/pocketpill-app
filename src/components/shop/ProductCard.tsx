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
}

export function ProductCard({ slug, title, description, coverImage, price, originalPrice }: ProductProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formattedPrice = (price / 100).toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });
  const formattedOriginal = originalPrice ? (originalPrice / 100).toLocaleString('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }) : null;

  return (
    <div className="flex flex-col h-full items-start bg-card text-card-foreground shadow-sm rounded-xl border border-border/60 p-4 transition-all hover:shadow-md">
      {coverImage ? (
        <img src={coverImage} alt={title} className="w-full h-56 object-cover rounded-md mb-4 shadow-sm" />
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
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Buy Now
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Checkout</DialogTitle>
              {/* Close button provided automatically by DialogHeader, or explicitly added here if needed. 
                  Adding an explicit close button just in case user meant a very obvious one. */}
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="text-4xl">🛍️</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">Total: {formattedPrice}</p>
              
              <div className="w-full pt-4 space-y-3 border-t">
                <p className="text-sm">Payment integration goes here.</p>
                <button className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow" onClick={() => alert("Proceeding to payment...")}>
                  Proceed to Payment
                </button>
                <button className="w-full inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground" onClick={() => setIsOpen(false)}>
                  Cancel & Close
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
