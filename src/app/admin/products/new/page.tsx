'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Upload, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { toast } from 'sonner';

export default function NewProductPage() {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formElement = e.target as HTMLFormElement;
      let imageUrl = '';

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        const uploadRes = await api.post('/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        imageUrl = uploadRes.data;
      }

      const productData = {
        name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
        slug: (formElement.elements.namedItem('slug') as HTMLInputElement).value,
        categorySlug: (formElement.elements.namedItem('category') as HTMLInputElement).value,
        division: (formElement.elements.namedItem('category') as HTMLInputElement).value.includes('led') || (formElement.elements.namedItem('category') as HTMLInputElement).value.includes('display') || (formElement.elements.namedItem('category') as HTMLInputElement).value.includes('standee') || (formElement.elements.namedItem('category') as HTMLInputElement).value.includes('board') ? 'display' : 'cooling',
        isQuoteOnly: (formElement.elements.namedItem('isQuoteOnly') as HTMLInputElement).checked,
        shortDescription: (formElement.elements.namedItem('shortDescription') as HTMLInputElement).value,
        images: imageUrl ? [imageUrl] : [],
        pricing: {
          type: (formElement.elements.namedItem('unit') as HTMLInputElement).value || 'unit',
          amount: Number((formElement.elements.namedItem('price') as HTMLInputElement).value) || 0,
          currency: 'INR'
        }
      };

      await api.post('/products', productData);
      toast.success('Product created successfully!');
      router.push('/admin/products');
    } catch (error: any) {
      console.error('Error creating product:', error);
      toast.error(error.response?.data?.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <Button variant="ghost" className="mb-6 -ml-4 text-text-secondary hover:text-ink" render={<Link href="/admin/products" />}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Button>

      <h1 className="font-heading text-3xl font-bold text-ink mb-8">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-surface p-8 rounded-xl border border-border shadow-sm">
        
        {/* Basic Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-ink border-b border-border pb-2">Basic Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" required placeholder="e.g. 2.5mm LED Display" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL friendly)</Label>
              <Input id="slug" required placeholder="e.g. 2-5mm-led-display" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category Slug</Label>
              <Input id="category" required placeholder="e.g. indoor-led-walls" />
            </div>
            <div className="space-y-2 flex items-center pt-6">
              <input type="checkbox" id="isQuoteOnly" className="mr-2 h-4 w-4" />
              <Label htmlFor="isQuoteOnly">Quote Only (B2B Custom Product)</Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="shortDescription">Short Description</Label>
            <textarea id="shortDescription" required className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm" />
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-ink border-b border-border pb-2">Pricing & Inventory</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (₹)</Label>
              <Input id="price" type="number" placeholder="Leave empty if Quote Only" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Pricing Unit</Label>
              <Input id="unit" placeholder="e.g. sq. ft, piece" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minOrder">Min Order Quantity</Label>
              <Input id="minOrder" type="number" defaultValue="1" />
            </div>
          </div>
        </div>

        {/* Multer Image Upload */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-ink border-b border-border pb-2">Product Image (Multer)</h2>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-surface-2 hover:bg-surface-2/80 transition-colors cursor-pointer" onClick={() => document.getElementById('imageUpload')?.click()}>
            <Upload className="mx-auto h-12 w-12 text-text-muted mb-4" />
            <p className="text-sm font-medium text-text-secondary">
              {imageFile ? imageFile.name : "Click to upload image"}
            </p>
            <input 
              type="file" 
              id="imageUpload" 
              className="hidden" 
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) setImageFile(e.target.files[0]);
              }} 
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="ghost" render={<Link href="/admin/products" />}>Cancel</Button>
          <Button type="submit" disabled={loading} className="bg-signal-blue text-surface">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Save Product
          </Button>
        </div>

      </form>
    </div>
  );
}
