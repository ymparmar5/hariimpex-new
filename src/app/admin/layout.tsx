import { Package, LayoutDashboard, Tag, ShoppingCart, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-2">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-surface border-r border-border hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/admin" className="font-heading font-bold text-2xl text-ink">Hari Admin</Link>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-text-secondary hover:text-ink hover:bg-surface-2" render={<Link href="/admin" />}>
            <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-text-secondary hover:text-ink hover:bg-surface-2" render={<Link href="/admin/products" />}>
            <Package className="mr-2 h-4 w-4" /> Products
          </Button>
          <Button variant="ghost" className="w-full justify-start text-text-secondary hover:text-ink hover:bg-surface-2" render={<Link href="/admin/categories" />}>
            <Tag className="mr-2 h-4 w-4" /> Categories
          </Button>
          <Button variant="ghost" className="w-full justify-start text-text-secondary hover:text-ink hover:bg-surface-2" render={<Link href="/admin/orders" />}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Orders & Quotes
          </Button>
          <Button variant="ghost" className="w-full justify-start text-text-secondary hover:text-ink hover:bg-surface-2 mt-auto" render={<Link href="/admin/settings" />}>
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
