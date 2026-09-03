import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-ink text-text-muted py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading font-bold text-xl text-surface mb-4">Hari Impex</h3>
          <p className="text-sm mb-4">Manufacturer and Supplier of LED video walls, digital standees, and precision liquid-cooling components.</p>
          <p className="text-sm">GST: 24CEBPR5151J1ZG</p>
          <p className="text-sm">Established: 2019</p>
        </div>
        <div>
          <h4 className="font-semibold text-surface mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/display-and-signage" className="hover:text-signal-blue">Digital Display & Signage</Link></li>
            <li><Link href="/cooling-components" className="hover:text-copper">Cooling Components</Link></li>
            <li><Link href="/products" className="hover:text-surface">All Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-surface mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-surface">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-surface">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-surface">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-surface">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-surface mb-4">Contact</h4>
          <address className="text-sm not-italic space-y-2">
            <p>Ground Floor, Shop No. G-76, Raj World, Palanpur Gam, Surat – 395009, Gujarat</p>
            <p>Phone: 07949095500, 07971549319</p>
          </address>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-text-secondary/30 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Hari Impex. All rights reserved. Developed for Hari Impex.</p>
      </div>
    </footer>
  );
}
