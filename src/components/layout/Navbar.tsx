import Link from 'next/link';
import Image from 'next/image';
import { Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNavDrawer } from './MobileNavDrawer';
import { CartIcon } from './CartIcon';

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-surface/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] px-6">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Hari Impex Logo" width={150} height={40} className="object-contain max-h-10 w-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" priority />
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/display-and-signage" className="text-sm font-semibold text-text-secondary hover:text-signal-blue transition-all duration-300">
              Display & Signage
            </Link>
            <Link href="/cooling-components" className="text-sm font-semibold text-text-secondary hover:text-copper transition-all duration-300">
              Cooling Components
            </Link>
            <Link href="/products" className="text-sm font-semibold text-text-secondary hover:text-white transition-all duration-300">
              All Products
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative items-center group">
             <Search className="absolute left-3 h-4 w-4 text-text-muted group-focus-within:text-signal-blue transition-colors" />
             <input type="text" placeholder="Search..." className="h-10 w-64 rounded-full border border-white/5 bg-surface-2/50 backdrop-blur-sm px-10 text-sm outline-none focus:border-signal-blue focus:bg-surface-2/80 transition-all shadow-inner" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-text-secondary hover:text-white hover:bg-white/10 rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10 rounded-full" render={<Link href="/account" />}>
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-text-secondary hover:text-white hover:bg-white/10 rounded-full" render={<Link href="/cart" />}>
            <CartIcon />
          </Button>
          <MobileNavDrawer />
        </div>
      </div>
    </header>
  );
}
