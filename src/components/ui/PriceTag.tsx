import { PricingInfo } from '@/lib/catalog';

export function PriceTag({ pricing, className = '' }: { pricing: PricingInfo, className?: string }) {
  if (pricing.type === 'quote-only' || !pricing.amount) {
    return (
      <span className={`inline-flex items-center rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-text-secondary ${className}`}>
        Get Best Quote
      </span>
    );
  }

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: pricing.currency,
    maximumFractionDigits: 0,
  });

  let suffix = '';
  if (pricing.type === 'per-sqft') suffix = ' / sq ft';
  if (pricing.type === 'per-piece') suffix = ' / piece';
  if (pricing.type === 'per-unit') suffix = ' / unit';

  return (
    <div className={`font-mono font-semibold text-ink ${className}`}>
      {formatter.format(pricing.amount)}
      <span className="text-sm font-sans font-normal text-text-muted">{suffix}</span>
    </div>
  );
}
