import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/lib/catalog';

export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.slug}`} className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-xl bg-ink p-6">
      <Image
        src={category.heroImage || '/images/categories/placeholder.jpg'}
        alt={category.name}
        fill
        className="object-cover opacity-60 transition-all duration-300 group-hover:opacity-40 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      <div className="relative z-10">
        <h3 className="mb-2 font-heading text-xl font-bold text-surface">{category.name}</h3>
        <p className="text-sm text-surface-2/80 line-clamp-2">{category.shortDescription}</p>
      </div>
    </Link>
  );
}
