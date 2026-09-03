export function QuoteOnlyBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-sm bg-signal-blue/10 px-2 py-1 text-xs font-semibold text-signal-blue-dark ${className}`}>
      Quote Only
    </span>
  );
}
