"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppStore } from '@/lib/store';
import { useMounted } from '@/hooks/use-mounted';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  companyName: z.string().optional(),
  gstin: z.string().optional(),
  address: z.string().min(10, 'Full address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().min(6, 'Valid pincode required'),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cart, clearCart } = useAppStore();
  const isMounted = useMounted();
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '', email: '', phone: '', companyName: '', gstin: '', address: '', city: '', state: '', pincode: ''
    }
  });

  if (!isMounted) return null;

  const subtotal = cart.reduce((total, item) => total + ((item.product.pricing.amount || 0) * item.quantity), 0);

  const onSubmit = (data: CheckoutFormValues) => {
    // In a real app, this would integrate with Razorpay and an API route
    console.log('Checkout Data:', data);
    setIsSuccess(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <CheckCircle2 className="h-20 w-20 text-success mx-auto mb-6" />
        <h1 className="font-heading text-4xl font-bold text-ink mb-4">Order Received</h1>
        <p className="text-text-secondary mb-8">Thank you for your order. We have received your B2B purchase request and will contact you shortly regarding dispatch and shipping.</p>
        <Button onClick={() => router.push('/')} className="bg-signal-blue text-surface">
          Return to Home
        </Button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-ink mb-4">Your Cart is Empty</h1>
        <Button render={<Link href="/products" />} className="bg-signal-blue text-surface hover:bg-signal-blue-dark">
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-ink mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6">
              <h2 className="font-heading font-semibold text-xl text-ink mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" {...form.register('fullName')} />
                  {form.formState.errors.fullName && <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" {...form.register('phone')} />
                  {form.formState.errors.phone && <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" {...form.register('email')} />
                  {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <h2 className="font-heading font-semibold text-xl text-ink mb-4">B2B Billing Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name (Optional)</Label>
                  <Input id="companyName" {...form.register('companyName')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gstin">GSTIN (Optional)</Label>
                  <Input id="gstin" {...form.register('gstin')} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Input id="address" {...form.register('address')} />
                  {form.formState.errors.address && <p className="text-sm text-destructive">{form.formState.errors.address.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" {...form.register('city')} />
                  {form.formState.errors.city && <p className="text-sm text-destructive">{form.formState.errors.city.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" {...form.register('state')} />
                  {form.formState.errors.state && <p className="text-sm text-destructive">{form.formState.errors.state.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input id="pincode" {...form.register('pincode')} />
                  {form.formState.errors.pincode && <p className="text-sm text-destructive">{form.formState.errors.pincode.message}</p>}
                </div>
              </div>
            </div>
            
            <Button type="submit" size="lg" className="w-full bg-signal-blue text-surface hover:bg-signal-blue-dark h-12" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Processing...' : 'Place Order (Test Mode)'}
            </Button>
          </form>
        </div>
        
        <div>
          <div className="bg-surface-2 rounded-xl p-6 border border-border sticky top-24">
            <h2 className="font-heading font-semibold text-xl text-ink mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.product.id} className="flex justify-between text-sm gap-4">
                  <span className="text-text-secondary flex-1">{item.quantity} × {item.product.name}</span>
                  <span className="font-mono text-ink text-right">₹{((item.product.pricing.amount || 0) * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 mt-4">
              <div className="flex justify-between font-semibold text-lg text-ink">
                <span>Total</span>
                <span className="font-mono">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
