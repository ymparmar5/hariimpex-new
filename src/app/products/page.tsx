import { getAllProducts, getCategories } from '@/lib/catalog';
import { ProductCard } from '@/components/catalog/ProductCard';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default async function ProductsPage() {
  const products = await getAllProducts();
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">All Products</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="font-heading font-semibold text-lg mb-4 text-ink">Categories</h2>
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start font-medium bg-surface-2" asChild>
                <a href="/products">All Products</a>
              </Button>
              {categories.map(c => (
                <Button key={c.id} variant="ghost" className="justify-start text-text-secondary hover:text-ink" asChild>
                  <a href={`/category/${c.slug}`}>{c.name}</a>
                </Button>
              ))}
            </div>
          </div>
        </aside>
        
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-ink">All Products</h1>
            <span className="text-sm text-text-secondary">{products.length} results</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
