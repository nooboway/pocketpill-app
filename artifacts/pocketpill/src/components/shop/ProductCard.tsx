import { Link } from "wouter";

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
    <div className="glass-card flex flex-col h-full items-start">
      {coverImage ? (
        <img src={coverImage} alt={title} className="w-full h-56 object-cover rounded-md mb-4 shadow-sm" />
      ) : (
        <div className="w-full h-56 bg-muted/20 rounded-md mb-4 flex items-center justify-center border border-white/5">
          <span className="text-muted-foreground text-sm">No cover available</span>
        </div>
      )}
      <h3 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 flex-grow">{description}</p>
      
      <div className="flex items-end justify-between w-full mt-auto pt-4 border-t border-border">
        <div className="flex flex-col">
          {formattedOriginal && (
            <span className="text-xs text-muted-foreground line-through font-mono">{formattedOriginal}</span>
          )}
          <span className="text-lg font-bold text-primary font-mono">{formattedPrice}</span>
        </div>
        <Link href={`/checkout/${slug}`}>
          <button className="btn-pocket px-5 py-2 text-sm">Buy Now</button>
        </Link>
      </div>
    </div>
  );
}
