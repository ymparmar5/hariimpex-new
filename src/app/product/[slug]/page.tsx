import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProductsByCategory } from '@/lib/catalog';
import { PriceTag } from '@/components/ui/PriceTag';
import { ProductCard } from '@/components/catalog/ProductCard';
import { AddToCartButton } from '@/components/catalog/AddToCartButton';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ShoppingCart, FileText, CheckCircle2 } from 'lucide-react';

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = (await getProductsByCategory(product.categorySlug))
    .filter((p: import('@/lib/catalog').Product) => p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(`Hi Hari Impex, I would like to inquire about: ${product.name}`);
  
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
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-surface-2 border border-border">
            <Image 
              src={product.images[0] || '/images/products/placeholder.jpg'} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnails placeholder */}
          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-signal-blue cursor-pointer">
               <Image src={product.images[0] || '/images/products/placeholder.jpg'} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {product.isQuoteOnly && (
            <div className="mb-4 inline-flex self-start rounded-sm bg-signal-blue/10 px-3 py-1 text-sm font-semibold text-signal-blue-dark uppercase tracking-wider">
              B2B Custom / Bulk Order
            </div>
          )}
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">{product.name}</h1>
          <div className="mb-6">
            <PriceTag pricing={product.pricing} className="text-2xl" />
          </div>
          <p className="text-text-secondary text-base mb-8 leading-relaxed">
            {product.shortDescription} {product.description}
          </p>
          
          <div className="flex flex-col gap-4 mb-10 pt-6 border-t border-border">
            {product.isQuoteOnly ? (
              <Button size="lg" className="w-full bg-signal-blue hover:bg-signal-blue-dark text-surface text-lg h-14" render={<Link href={`/request-quote?product=${product.slug}`} />}>
                <FileText className="mr-2 h-5 w-5" /> Request a Quote
              </Button>
            ) : (
              <AddToCartButton product={product} />
            )}
            
            <Button size="lg" variant="outline" className="w-full h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10" render={<Link href={`https://wa.me/919765618860?text=${whatsappMessage}`} target="_blank" />}>
              Ask on WhatsApp
            </Button>
          </div>

          {/* Specifications */}
          <div className="mt-auto">
            <h3 className="font-heading font-semibold text-xl text-ink mb-4">Specifications</h3>
            <div className="border border-border rounded-lg overflow-hidden bg-surface">
              <table className="w-full text-sm text-left">
                <tbody>
                  {product.specs && Object.entries(product.specs).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-surface-2/50' : 'bg-surface'}>
                      <th className="py-3 px-4 font-semibold text-ink border-r border-border w-1/3">{key}</th>
                      <td className="py-3 px-4 text-text-secondary font-mono">{String(value)}</td>
                    </tr>
                  ))}
                  <tr className="bg-surface">
                    <th className="py-3 px-4 font-semibold text-ink border-r border-border w-1/3">Quality Assurance</th>
                    <td className="py-3 px-4 text-success flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> 100% Tested before dispatch
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-16 border-t border-border">
          <h2 className="font-heading text-2xl font-bold text-ink mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p: import('@/lib/catalog').Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
