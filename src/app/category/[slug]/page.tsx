import { notFound } from 'next/navigation';
import { getCategoryBySlug, getProductsByCategory } from '@/lib/catalog';
import { ProductCard } from '@/components/catalog/ProductCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{category.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">{category.name}</h1>
        <p className="text-text-secondary max-w-3xl">{category.shortDescription}</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p: import('@/lib/catalog').Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-surface-2 rounded-xl">
          <p className="text-text-secondary">No products found in this category.</p>
        </div>
      )}

      {/* SEO Text Block */}
      <div className="mt-16 pt-8 border-t border-border prose prose-sm max-w-none text-text-secondary">
        <h2 className="text-xl font-heading font-semibold text-ink">About {category.name}</h2>
        <p>
          Hari Impex specializes in the manufacturing and supply of high-quality {category.name.toLowerCase()}. 
          As an established manufacturer based in Surat, Gujarat, we ensure that every unit is crafted with precision 
          and passes rigorous quality control tests before dispatch. Whether you need standard dimensions or custom B2B 
          solutions, our engineering team is equipped to meet your requirements. 
        </p>
      </div>
    </div>
  );
}
