import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/lib/catalog';

export function CategoryTile({ category }: { category: Category }) {
  const isDisplay = category.division === 'display';
  
  return (
    <Link href={`/category/${category.slug}`} className="group relative flex h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-8 border border-white/10 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2">
      <div className={`absolute inset-0 bg-gradient-to-br ${isDisplay ? 'from-signal-blue/20' : 'from-copper/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`} />
      <Image
        src={category.heroImage || '/images/categories/placeholder.jpg'}
        alt={category.name}
        fill
        className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent z-10`} />
      <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className={`w-12 h-1 mb-6 rounded-full ${isDisplay ? 'bg-signal-blue shadow-[0_0_10px_rgba(0,229,255,0.6)]' : 'bg-copper shadow-[0_0_10px_rgba(255,109,0,0.6)]'} transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100`} />
        <h3 className="mb-3 font-heading text-2xl font-bold text-white group-hover:text-surface transition-colors">{category.name}</h3>
        <p className="text-sm text-text-secondary line-clamp-2 group-hover:text-white/80 transition-colors">{category.shortDescription}</p>
      </div>
    </Link>
  );
}
