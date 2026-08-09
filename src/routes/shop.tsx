import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/shop/ProductCard";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

function ShopPage() {
  // Using mock data to ensure the page renders properly without an API backend right away
  const mockProducts = [
    {
      id: 1,
      slug: "the-stamina-blueprint",
      title: "The Stamina Blueprint",
      description: "The ultimate science-backed guide to optimizing physical resilience and building long-lasting stamina.",
      coverImage: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop",
      price: 1078000,
      originalPrice: 2695000,
    }
  ];

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        // Attempt to fetch from API, but default to mock data if it fails or returns empty
        const res = await fetch("/api/products");
        if (!res.ok) return mockProducts;
        const data = await res.json();
        return data.length > 0 ? data : mockProducts;
      } catch (err) {
        return mockProducts;
      }
    },
    initialData: mockProducts,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-background">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              align="left"
              eyebrow="Shop"
              title="Digital Resources"
              description="Browse our collection of expertly crafted guides, blueprints, and digital resources designed to elevate your health and performance."
            />

            <div className="mt-12">
              {isLoading ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-[420px] rounded-xl bg-card border border-border/60 animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {products?.map((product: any) => (
                    <ProductCard
                      key={product.id || product.slug}
                      slug={product.slug}
                      title={product.title}
                      description={product.description}
                      coverImage={product.coverImage}
                      price={product.price}
                      originalPrice={product.originalPrice}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
