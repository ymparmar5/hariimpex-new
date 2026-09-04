'use client';

import { Menu, Home, Package, Info, Phone, FileText, Monitor, Thermometer } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const mainLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/products', label: 'Products', icon: Package },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/contact', label: 'Contact', icon: Phone },
  { href: '/request-quote', label: 'Request Quote', icon: FileText },
];

const divisionLinks = [
  { href: '/display-and-signage', label: 'Display & Signage', icon: Monitor, colorClass: 'text-signal-blue' },
  { href: '/cooling-components', label: 'Cooling Components', icon: Thermometer, colorClass: 'text-copper' },
];

export function MobileNavDrawer() {
  return (
    <Sheet>
      <SheetTrigger render={
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5 text-text-secondary" />
        </Button>
      } />
      <SheetContent side="left" className="w-[300px] sm:w-[360px] flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <Image src="/logo.png" alt="Hari Impex" width={120} height={32} className="object-contain" />
        </div>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        
        <nav className="flex flex-col gap-1 flex-1">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3 mb-2">Menu</p>
          {mainLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-3 text-base font-medium text-ink hover:text-signal-blue hover:bg-signal-blue/5 rounded-lg transition-colors"
              >
                <Icon className="h-5 w-5 text-text-muted" />
                {link.label}
              </Link>
            );
          })}
          
          <div className="h-px w-full bg-border my-4" />
          
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider px-3 mb-2">Divisions</p>
          {divisionLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-3 text-base font-medium text-ink hover:${link.colorClass} hover:bg-surface-2 rounded-lg transition-colors`}
              >
                <Icon className={`h-5 w-5 ${link.colorClass}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="pt-4 border-t border-border">
           <Button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white h-12 rounded-xl" render={<Link href="https://wa.me/919765618860" target="_blank" className="flex items-center justify-center w-full" />}>
               Chat on WhatsApp
           </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
