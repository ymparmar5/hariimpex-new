import { Button } from '@/components/ui/button';
import { User, Package, Heart, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12 min-h-[60vh]">
      <aside className="w-full md:w-64 flex-shrink-0 md:border-r border-border md:pr-8">
        <h2 className="font-heading text-xl font-bold text-ink mb-6">My Account</h2>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start bg-surface-2 text-ink font-medium">
            <User className="mr-2 h-4 w-4" /> Profile
          </Button>
          <Button variant="ghost" className="justify-start text-text-secondary hover:text-ink">
            <Package className="mr-2 h-4 w-4" /> Orders & Quotes
          </Button>
          <Button variant="ghost" className="justify-start text-text-secondary hover:text-ink" render={<Link href="/wishlist" />}>
              <Heart className="mr-2 h-4 w-4" /> Saved Items
          </Button>
          <Button variant="ghost" className="justify-start text-destructive hover:text-destructive hover:bg-destructive/10 mt-8">
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </nav>
      </aside>

      <main className="flex-1">
        <h1 className="font-heading text-3xl font-bold text-ink mb-8">Profile Information</h1>
        <div className="bg-surface border border-border rounded-xl p-8 max-w-2xl">
          <p className="text-text-secondary mb-8">Manage your B2B account details and billing preferences.</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text-muted mb-1 block">Full Name</label>
                <div className="text-ink font-medium">John Doe</div>
              </div>
              <div>
                <label className="text-sm font-medium text-text-muted mb-1 block">Email</label>
                <div className="text-ink font-medium">john@example.com</div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h3 className="font-heading font-semibold text-lg text-ink mb-4">Company Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-muted mb-1 block">Company Name</label>
                  <div className="text-ink font-medium">Acme Industries</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-text-muted mb-1 block">GSTIN</label>
                  <div className="text-ink font-mono">24AAAAA0000A1Z5</div>
                </div>
              </div>
            </div>
          </div>
          
          <Button className="mt-8 bg-signal-blue text-surface">Edit Profile</Button>
        </div>
      </main>
    </div>
  );
}
