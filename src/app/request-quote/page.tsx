"use client";

import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, FileUp } from 'lucide-react';
import { useMounted } from '@/hooks/use-mounted';

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  companyName: z.string().min(2, 'Company name is required'),
  city: z.string().min(2, 'City is required'),
  pincode: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(10, 'Please describe your requirements'),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

function RequestQuoteForm() {
  const isMounted = useMounted();
  const searchParams = useSearchParams();
  const productSlug = searchParams?.get('product') || '';
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: '', email: '', phone: '', companyName: '', city: '', pincode: '', quantity: '', message: productSlug ? `I would like to request a quote for the product: ${productSlug}` : ''
    }
  });

  if (!isMounted) return null;

  const onSubmit = (data: QuoteFormValues) => {
    // In a real app, this would POST to an API route to send email
    console.log('Quote Request Data:', data);
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <CheckCircle2 className="h-20 w-20 text-success mx-auto mb-6" />
        <h1 className="font-heading text-4xl font-bold text-ink mb-4">Quote Request Sent</h1>
        <p className="text-text-secondary mb-8">Thank you for your inquiry. Our sales team has received your request and will get back to you with a competitive quote within 24-48 business hours.</p>
        <Button onClick={() => router.push('/')} className="bg-signal-blue text-surface">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading text-3xl font-bold text-ink mb-4">Request a B2B Quote</h1>
      <p className="text-text-secondary mb-8">Please fill out the form below with your requirements, and our team will provide you with the best available pricing for bulk or custom orders.</p>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-surface border border-border rounded-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" {...form.register('fullName')} />
            {form.formState.errors.fullName && <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input id="companyName" {...form.register('companyName')} />
            {form.formState.errors.companyName && <p className="text-sm text-destructive">{form.formState.errors.companyName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" {...form.register('email')} />
            {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" {...form.register('phone')} />
            {form.formState.errors.phone && <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input id="city" {...form.register('city')} />
            {form.formState.errors.city && <p className="text-sm text-destructive">{form.formState.errors.city.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode (Optional)</Label>
            <Input id="pincode" {...form.register('pincode')} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="quantity">Estimated Quantity (Optional)</Label>
            <Input id="quantity" placeholder="e.g. 50 units, 100 sq ft" {...form.register('quantity')} />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">Requirements / Specifications *</Label>
            <textarea 
              id="message" 
              className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Describe your project, custom specifications, or exact product needs..."
              {...form.register('message')} 
            />
            {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label>Attachment (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-text-secondary bg-surface-2 cursor-pointer hover:bg-surface-2/80 transition-colors">
              <FileUp className="h-8 w-8 mb-2 text-text-muted" />
              <span className="text-sm">Click to upload specification sheet or drawing (PDF/JPG)</span>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <Button type="submit" size="lg" className="w-full sm:w-auto bg-signal-blue text-surface hover:bg-signal-blue-dark px-8" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RequestQuoteForm />
    </Suspense>
  );
}
