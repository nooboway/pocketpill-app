import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/shop/ProductCard";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { products, getAllCategories, getProductsByCategory } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

function ShopPage() {
  const categories = getAllCategories();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-background">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              align="left"
              eyebrow="Shop"
              title="PocketPill Shop"
              description="Browse our collection of expertly crafted digital resources, wellness products, and diagnostic tests."
            />

            <div className="mt-12 space-y-16">
              {categories.map(category => {
                const categoryProducts = getProductsByCategory(category);
                if (categoryProducts.length === 0) return null;
                
                return (
                  <div key={category}>
                    <h2 className="text-2xl font-bold font-heading mb-6">{category}</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {categoryProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          slug={product.slug}
                          title={product.name}
                          description={product.shortDescription}
                          coverImage={product.coverImage}
                          price={product.price}
                          originalPrice={product.compareAtPrice}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
