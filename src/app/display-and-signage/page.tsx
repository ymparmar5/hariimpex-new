import Image from 'next/image';
import { getProductsByDivision, getCategories } from '@/lib/catalog';
import { ProductCard } from '@/components/catalog/ProductCard';
import { CategoryTile } from '@/components/catalog/CategoryTile';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

export default async function DisplayAndSignagePage() {
  const products = await getProductsByDivision('display');
  const allCategories = await getCategories();
  const divisionCategories = allCategories.filter((c: import('@/lib/catalog').Category) => c.division === 'display');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] w-full bg-ink overflow-hidden flex items-center justify-center">
        <Image 
          src="/images/banners/display-signage.jpg" 
          alt="Digital Display & Signage"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-surface mb-4">
            Digital Display & Signage
          </h1>
          <p className="text-lg text-surface-2/80 max-w-2xl mx-auto">
            High-impact LED video walls, digital standees, and custom signage solutions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Display & Signage</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {divisionCategories.map((c: import('@/lib/catalog').Category) => (
              <CategoryTile key={c.id} category={c} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p: import('@/lib/catalog').Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
