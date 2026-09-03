import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, BadgeCheck } from "lucide-react";
import { getCategories, getAllProducts } from "@/lib/catalog";
import { CategoryTile } from "@/components/catalog/CategoryTile";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const categories = await getCategories();
  const allProducts = await getAllProducts();
  const popularProducts = allProducts.filter(p => !p.isQuoteOnly).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-ink overflow-hidden flex items-center justify-center">
        <Image 
          src="/images/hero-banner.jpg" 
          alt="Hari Impex Industrial Manufacturing"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-surface mb-6 max-w-4xl mx-auto leading-tight">
            Precision Engineered <span className="text-signal-blue">Display</span> & <span className="text-copper">Cooling</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-surface-2/80 max-w-2xl mx-auto mb-10">
            Surat's leading manufacturer of high-impact LED video walls and industrial-grade liquid cooling components.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-signal-blue hover:bg-signal-blue-dark text-surface w-full sm:w-auto" render={<Link href="/display-and-signage" />}>
              Display & Signage <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-copper hover:bg-copper-dark text-surface w-full sm:w-auto" render={<Link href="/cooling-components" />}>
              Cooling Components <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-border bg-surface-2 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2">
              <ShieldCheck className="h-8 w-8 text-signal-blue" />
              <h3 className="font-semibold text-ink">GST Registered</h3>
              <p className="text-sm text-text-secondary">Verified B2B Supplier</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <BadgeCheck className="h-8 w-8 text-copper" />
              <h3 className="font-semibold text-ink">Established 2019</h3>
              <p className="text-sm text-text-secondary">Years of manufacturing excellence</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Wrench className="h-8 w-8 text-signal-blue" />
              <h3 className="font-semibold text-ink">In-House Manufacturing</h3>
              <p className="text-sm text-text-secondary">10-person engineering team</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <CheckCircle2 className="h-8 w-8 text-success" />
              <h3 className="font-semibold text-ink">100% Quality Tested</h3>
              <p className="text-sm text-text-secondary">Every unit tested before dispatch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Our Product Divisions</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Explore our range of purpose-built LED displays and precision-machined cooling components.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryTile key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Rail */}
      <section className="py-16 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink">Popular Products</h2>
            <Button variant="link" className="text-signal-blue" render={<Link href="/products" />}>
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface mb-6">Need a Custom B2B Order?</h2>
          <p className="text-surface-2/80 max-w-2xl mx-auto mb-8 text-lg">
            Our engineering team can manufacture custom LED structural profiles and precision cooling blocks to your exact specifications.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-signal-blue hover:bg-signal-blue-dark text-surface" render={<Link href="/request-quote" />}>
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-border text-surface hover:bg-surface hover:text-ink" render={<Link href="/contact" />}>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
