import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/catalog';
import { PriceTag } from '@/components/ui/PriceTag';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,229,255,0.15)] hover:-translate-y-1 hover:border-signal-blue/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-signal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative aspect-square w-full overflow-hidden bg-surface-2 border-b border-border">
        <Image
          src={product.images[0] || '/images/products/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isQuoteOnly && (
          <div className="absolute top-3 right-3 rounded-full bg-copper/90 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur shadow-sm">
            B2B Custom
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 relative z-10">
        <h3 className="mb-2 font-heading text-lg font-bold text-ink line-clamp-1 group-hover:text-signal-blue transition-colors">{product.name}</h3>
        <p className="mb-6 text-sm text-text-secondary line-clamp-2 flex-1">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
          <PriceTag pricing={product.pricing} />
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-surface-2 group-hover:bg-signal-blue group-hover:text-white transition-all duration-300" render={<div />}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
