"use client";

import { useAppStore } from '@/lib/store';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash2, ArrowRight } from 'lucide-react';
import { useMounted } from '@/hooks/use-mounted';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useAppStore();
  const isMounted = useMounted();

  if (!isMounted) return null;

  const subtotal = cart.reduce((total, item) => {
    return total + ((item.product.pricing.amount || 0) * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-ink mb-4">Your Cart is Empty</h1>
        <p className="text-text-secondary mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Button render={<Link href="/products" />} className="bg-signal-blue text-surface hover:bg-signal-blue-dark">
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-ink mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div key={item.product.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-xl bg-surface">
                <div className="relative w-24 h-24 flex-shrink-0 bg-surface-2 rounded-lg overflow-hidden">
                  <Image src={item.product.images[0] || '/images/products/placeholder.jpg'} alt={item.product.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-ink line-clamp-1">{item.product.name}</h3>
                    <p className="text-sm text-text-secondary">{item.product.division === 'display' ? 'Display & Signage' : 'Cooling Components'}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <div className="flex items-center border border-border rounded-md px-2 bg-surface h-9">
                      <input 
                        type="number" 
                        value={item.quantity} 
                        min={1} 
                        onChange={(e) => updateCartQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-12 bg-transparent border-none outline-none text-ink text-center text-sm" 
                      />
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)} className="text-destructive hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="font-mono font-semibold text-ink text-right flex flex-col justify-end">
                  ₹{((item.product.pricing.amount || 0) * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-surface-2 rounded-xl p-6 border border-border sticky top-24">
            <h2 className="font-heading font-semibold text-xl text-ink mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4 text-text-secondary">
              <span>Subtotal</span>
              <span className="font-mono font-medium text-ink">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between mb-6 text-sm text-text-muted pb-6 border-b border-border">
              <span>Shipping & Taxes</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between mb-8 font-semibold text-lg text-ink">
              <span>Total Estimated</span>
              <span className="font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <Button size="lg" className="w-full bg-signal-blue text-surface hover:bg-signal-blue-dark h-12" render={<Link href="/checkout" />}>
              Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-text-muted mt-4 text-center">B2B GST invoices available at checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
