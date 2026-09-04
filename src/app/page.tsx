import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, BadgeCheck } from "lucide-react";
import { getCategories, getAllProducts } from "@/lib/catalog";
import { CategoryTile } from "@/components/catalog/CategoryTile";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";

export default async function Home() {
  const categories = await getCategories();
  const allProducts = await getAllProducts();
  const popularProducts = allProducts.filter((p: import('@/lib/catalog').Product) => !p.isQuoteOnly).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Trust Strip */}
      <section className="border-b border-white/5 bg-ink py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3 p-4 rounded-2xl bg-surface-2/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <ShieldCheck className="h-10 w-10 text-signal-blue filter drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              <h3 className="font-semibold text-white">GST Registered</h3>
              <p className="text-sm text-slate-300">Verified B2B Supplier</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3 p-4 rounded-2xl bg-surface-2/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <BadgeCheck className="h-10 w-10 text-copper filter drop-shadow-[0_0_8px_rgba(255,109,0,0.5)]" />
              <h3 className="font-semibold text-white">Established 2019</h3>
              <p className="text-sm text-slate-300">Years of manufacturing excellence</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3 p-4 rounded-2xl bg-surface-2/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <Wrench className="h-10 w-10 text-signal-blue filter drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              <h3 className="font-semibold text-white">In-House Manufacturing</h3>
              <p className="text-sm text-slate-300">10-person engineering team</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3 p-4 rounded-2xl bg-surface-2/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <CheckCircle2 className="h-10 w-10 text-success filter drop-shadow-[0_0_8px_rgba(0,230,118,0.5)]" />
              <h3 className="font-semibold text-white">100% Quality Tested</h3>
              <p className="text-sm text-slate-300">Every unit tested before dispatch</p>
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
            {categories.map((category: import('@/lib/catalog').Category) => (
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
            {popularProducts.map((product: import('@/lib/catalog').Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-signal-blue/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_50%)]" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center bg-surface-2/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-6">Ready for a Custom B2B Order?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-10 text-xl">
            Our engineering team can manufacture custom LED structural profiles and precision cooling blocks to your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-signal-blue hover:bg-signal-blue-dark text-white font-bold h-14 px-10 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.2)]" render={<Link href="/request-quote" />}>
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-transparent text-ink hover:bg-surface-2 h-14 px-10 rounded-xl" render={<Link href="/contact" />}>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
    </div>
  );
}
