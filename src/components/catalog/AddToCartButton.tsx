"use client";

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Product } from '@/lib/catalog';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAppStore(state => state.addToCart);

  const handleAdd = () => {
    addToCart(product, quantity);
    toast("Added to Cart", {
      description: `${quantity} × ${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="flex gap-4">
      <div className="flex items-center border border-border rounded-md px-4 w-32 bg-surface">
        <span className="text-sm font-medium text-text-muted mr-4">Qty</span>
        <input 
          type="number" 
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          min={1} 
          className="w-full bg-transparent border-none outline-none text-ink font-semibold" 
        />
      </div>
      <Button 
        size="lg" 
        onClick={handleAdd}
        className="flex-1 bg-signal-blue hover:bg-signal-blue-dark text-surface h-12"
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </div>
  );
}
