import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MobileNavDrawer() {
  return (
    <Sheet>
      <SheetTrigger render={
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5 text-text-secondary" />
        </Button>
      } />
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-left font-heading font-bold text-xl mb-6">Menu</SheetTitle>
        <nav className="flex flex-col gap-4">
          <Link href="/display-and-signage" className="text-lg font-medium text-ink hover:text-signal-blue">
            Display & Signage
          </Link>
          <Link href="/cooling-components" className="text-lg font-medium text-ink hover:text-copper">
            Cooling Components
          </Link>
          <Link href="/products" className="text-lg font-medium text-ink">
            All Products
          </Link>
          <div className="h-px w-full bg-border my-2" />
          <Link href="/about" className="text-base text-text-secondary">
            About Us
          </Link>
          <Link href="/contact" className="text-base text-text-secondary">
            Contact
          </Link>
        </nav>
           <Button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white" render={<Link href="https://wa.me/917949095500" target="_blank" className="flex items-center justify-center w-full" />}>
               Chat on WhatsApp
           </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
