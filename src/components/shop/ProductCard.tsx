import { Link } from "@tanstack/react-router";

interface ProductProps {
  slug: string;
  title: string;
  description: string | null;
  coverImage: string | null;
  price: number;
  originalPrice: number | null;
}

export function ProductCard({ slug, title, description, coverImage, price, originalPrice }: ProductProps) {
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
        <Link to={`/checkout/${slug}`} className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
