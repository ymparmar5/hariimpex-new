import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8 mt-auto relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-signal-blue/50 to-transparent"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-signal-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div>
          <h3 className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary mb-6">Hari Impex</h3>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">Pioneering B2B Manufacturer and Supplier of high-impact LED video walls and precision liquid-cooling components.</p>
          <div className="space-y-2 mt-6">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-2/50 border border-white/10 text-text-secondary">GST: 24CEBPR5151J1ZG</span>
            <br />
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-2/50 border border-white/10 text-text-secondary">Est. 2019</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-6">Divisions</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/display-and-signage" className="text-text-secondary hover:text-signal-blue transition-colors flex items-center group"><span className="w-1.5 h-1.5 rounded-full bg-signal-blue/50 mr-2 group-hover:bg-signal-blue transition-colors"></span>Digital Display & Signage</Link></li>
            <li><Link href="/cooling-components" className="text-text-secondary hover:text-copper transition-colors flex items-center group"><span className="w-1.5 h-1.5 rounded-full bg-copper/50 mr-2 group-hover:bg-copper transition-colors"></span>Cooling Components</Link></li>
            <li><Link href="/products" className="text-text-secondary hover:text-white transition-colors flex items-center group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2 group-hover:bg-white transition-colors"></span>All Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="text-text-secondary hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-text-secondary hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/terms" className="text-text-secondary hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-6">Contact</h4>
          <address className="text-sm not-italic space-y-4 text-text-secondary">
            <p className="leading-relaxed">104/C Block, Orchid Green,<br/>LP Savani Rd, Palanpur,<br/>Surat, 395009, Gujarat, India</p>
            <p className="flex items-center hover:text-white transition-colors cursor-pointer">
              <span className="text-signal-blue mr-2">✆</span> +91 9765618860
            </p>
            <p className="flex items-center hover:text-white transition-colors cursor-pointer">
              <span className="text-copper mr-2">✉</span> hariimpexonline@gmail.com
            </p>
          </address>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-sm text-center flex flex-col md:flex-row justify-between items-center text-text-muted">
        <p>&copy; {new Date().getFullYear()} Hari Impex. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Engineered with precision.</p>
      </div>
    </footer>
  );
}
