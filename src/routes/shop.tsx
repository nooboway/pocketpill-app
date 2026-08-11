import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/shop/ProductCard";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const mockProducts = [
    {
      id: 1,
      slug: "the-stamina-blueprint",
      title: "The Stamina Blueprint",
      description: "The ultimate science-backed guide to optimizing physical resilience, boosting energy, and building long-lasting stamina.",
      coverImage: "/stamina-blueprint.png",
      price: 1078000,
      originalPrice: 2695000,
      category: "Digital Manuals",
      inStock: true,
    },
    {
      id: 3,
      slug: "the-clear-skin-diet",
      title: "The Clear Skin Diet eBook",
      description: "Learn how to eat for a flawless complexion. Discover the foods that trigger acne and the nutrients that heal hyperpigmentation.",
      coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
      price: 500000,
      originalPrice: 1000000,
      category: "Digital Manuals",
      inStock: false,
    },
    {
      id: 4,
      slug: "lean-muscle-manual",
      title: "The Lean Muscle Manual",
      description: "A comprehensive guide to shedding fat while maintaining hard-earned muscle, tailored specifically for men's physiology.",
      coverImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
      price: 850000,
      originalPrice: 1500000,
      category: "Digital Manuals",
      inStock: false,
    },
    {
      id: 2,
      slug: "follicle-accelerator-serum",
      title: "Follicle Accelerator Serum",
      description: "Clinical-grade topical formula designed to promote beard and scalp hair density. A perfect addition to your Hair Loss protocol.",
      coverImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
      price: 1500000,
      originalPrice: null,
      category: "Physical Products",
      inStock: false,
    },
  ];

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
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

  const digitalManuals = products?.filter((p: any) => p.category === "Digital Manuals") || [];
  const physicalProducts = products?.filter((p: any) => p.category === "Physical Products") || [];

  const categories = ["All", "Digital Manuals", "Physical Products"];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-background">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              align="left"
              eyebrow="Shop"
              title="Products & Digital Resources"
              description="Browse our collection of expertly crafted guides, serums, and digital resources designed to elevate your health and performance."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button 
                  key={cat} 
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="mt-12 space-y-16">
              {isLoading ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-[420px] rounded-xl bg-card border border-border/60 animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Digital Manuals Section */}
                  {(activeCategory === "All" || activeCategory === "Digital Manuals") && digitalManuals.length > 0 && (
                    <div>
                      {activeCategory === "All" && (
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 border-b pb-2">Digital Manuals</h2>
                      )}
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {digitalManuals.map((product: any) => (
                          <ProductCard
                            key={product.id || product.slug}
                            slug={product.slug}
                            title={product.title}
                            description={product.description}
                            coverImage={product.coverImage}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            inStock={product.inStock}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Physical Products Section */}
                  {(activeCategory === "All" || activeCategory === "Physical Products") && physicalProducts.length > 0 && (
                    <div>
                      {activeCategory === "All" && (
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 border-b pb-2">Physical Products</h2>
                      )}
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {physicalProducts.map((product: any) => (
                          <ProductCard
                            key={product.id || product.slug}
                            slug={product.slug}
                            title={product.title}
                            description={product.description}
                            coverImage={product.coverImage}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            inStock={product.inStock}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
