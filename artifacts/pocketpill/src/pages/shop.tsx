import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/shop/ProductCard";

export default function ShopPage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) return [];
        return await res.json();
      } catch (err) {
        return [];
      }
    },
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Digital <span className="text-primary">Shop</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl font-sans">
          Browse our collection of expertly crafted guides, blueprints, and digital resources designed to elevate your health and performance.
        </p>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass-card h-[420px] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product: any) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                title={product.title}
                description={product.description}
                coverImage={product.coverImage}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            ))}
            
            {/* Fallback mock product if DB is empty for demonstration */}
            {(!products || products.length === 0) && (
              <ProductCard
                slug="the-stamina-blueprint"
                title="The Stamina Blueprint"
                description="The ultimate science-backed guide to optimizing physical resilience and building long-lasting stamina."
                coverImage="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop"
                price={1078000}
                originalPrice={2695000}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
