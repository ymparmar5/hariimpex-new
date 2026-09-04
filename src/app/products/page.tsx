import { getAllProducts, getCategories } from '@/lib/catalog';
import { ProductCard } from '@/components/catalog/ProductCard';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

export default async function ProductsPage() {
  const products = await getAllProducts();
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-text-secondary hover:text-ink">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-text-secondary/20" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-signal-blue">Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="font-heading font-semibold text-lg mb-4 text-ink">Categories</h2>
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start font-medium bg-surface-2" render={<a href="/products" />}>
                All Products
              </Button>
              {categories.map((c: any) => (
                <Button key={c._id || c.id} variant="ghost" className="justify-start text-text-secondary hover:text-ink" render={<a href={`/category/${c.slug}`} />}>
                  {c.name}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-heading font-bold text-3xl text-ink">All Products</h1>
            <span className="text-sm text-text-secondary">{products.length} results</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p: any) => (
              <ProductCard key={p._id || p.id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
