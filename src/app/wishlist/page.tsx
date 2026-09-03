import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <Heart className="h-16 w-16 text-text-muted mx-auto mb-6" />
      <h1 className="font-heading text-3xl font-bold text-ink mb-4">Your Wishlist is Empty</h1>
      <p className="text-text-secondary mb-8 max-w-md mx-auto">You haven't saved any products yet. Start browsing to add items to your wishlist for quick access later.</p>
      <Button size="lg" className="bg-signal-blue text-surface hover:bg-signal-blue-dark" render={<Link href="/products" />}>
        Browse Products
      </Button>
    </div>
  );
}
