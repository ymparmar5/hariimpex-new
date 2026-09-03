"use client";

import { ShoppingCart } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { useMounted } from '@/hooks/use-mounted';

export function CartIcon() {
  const cart = useAppStore(state => state.cart);
  const isMounted = useMounted();
  
  const count = isMounted ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <>
      <ShoppingCart className="h-5 w-5 text-text-secondary" />
      {count > 0 && (
        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-signal-blue text-[10px] font-bold text-surface">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </>
  );
}
