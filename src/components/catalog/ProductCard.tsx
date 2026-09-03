import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/catalog';
import { PriceTag } from '@/components/ui/PriceTag';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-square w-full overflow-hidden bg-surface-2">
        <Image
          src={product.images[0] || '/images/products/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isQuoteOnly && (
          <div className="absolute top-2 right-2 rounded-sm bg-ink/80 px-2 py-1 text-[10px] font-semibold text-surface uppercase tracking-wider backdrop-blur">
            B2B Custom
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-heading text-lg font-semibold text-ink line-clamp-1">{product.name}</h3>
        <p className="mb-4 text-sm text-text-secondary line-clamp-2 flex-1">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between">
          <PriceTag pricing={product.pricing} />
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full group-hover:bg-signal-blue group-hover:text-surface transition-colors" render={<div />}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
