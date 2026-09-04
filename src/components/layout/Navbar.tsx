'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNavDrawer } from './MobileNavDrawer';
import { CartIcon } from './CartIcon';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/request-quote', label: 'Request Quote' },
];

const divisionLinks = [
  { href: '/display-and-signage', label: 'Display & Signage', color: 'text-signal-blue' },
  { href: '/cooling-components', label: 'Cooling Components', color: 'text-copper' },
];

export function Navbar() {
  const pathname = usePathname();
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDivisionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-8 items-center">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image src="/logo.png" alt="Hari Impex Logo" width={150} height={40} className="object-contain max-h-10 w-auto" priority />
          </Link>
          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-signal-blue bg-signal-blue/10'
                      : 'text-text-secondary hover:text-signal-blue hover:bg-signal-blue/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Divisions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDivisionsOpen(!divisionsOpen)}
                className={`flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 ${
                  divisionsOpen || pathname === '/display-and-signage' || pathname === '/cooling-components'
                    ? 'text-signal-blue bg-signal-blue/10'
                    : 'text-text-secondary hover:text-signal-blue hover:bg-signal-blue/5'
                }`}
              >
                Divisions
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${divisionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {divisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-surface border border-border shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {divisionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDivisionsOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-surface-2 ${
                        pathname === link.href ? link.color : 'text-text-secondary hover:' + link.color
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex relative items-center group">
             <Search className="absolute left-3 h-4 w-4 text-text-muted group-focus-within:text-signal-blue transition-colors" />
             <input type="text" placeholder="Search products..." className="h-9 w-56 rounded-lg border border-border bg-surface-2 px-10 text-sm outline-none focus:border-signal-blue transition-all shadow-sm" />
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden text-text-secondary hover:text-signal-blue hover:bg-surface-2">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-signal-blue hover:bg-surface-2" render={<Link href="/account" />}>
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-text-secondary hover:text-signal-blue hover:bg-surface-2" render={<Link href="/cart" />}>
            <CartIcon />
          </Button>
          <MobileNavDrawer />
        </div>
      </div>
    </header>
  );
}
