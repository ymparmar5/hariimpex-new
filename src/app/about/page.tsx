import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { CheckCircle2, Users, Factory } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[40vh] min-h-[300px] w-full bg-ink overflow-hidden flex items-center justify-center">
        <Image 
          src="/images/banners/display-signage.jpg" 
          alt="About Hari Impex"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-surface mb-4">
            About Hari Impex
          </h1>
          <p className="text-lg text-surface-2/80 max-w-2xl mx-auto">
            Manufacturing excellence in Surat since 2019.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>About Us</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink mb-6">Our Story</h2>
            <div className="space-y-4 text-text-secondary text-lg">
              <p>
                Established in 2019 in Surat, Gujarat, Hari Impex is a proprietorship led by Mr. Divesh Ramchandani. We started with a clear vision: to bring high-quality, precision-engineered solutions to the Indian market.
              </p>
              <p>
                What sets us apart is our unique dual-expertise. We operate two distinct manufacturing divisions under one roof: Digital Display & Signage Solutions (including LED video walls and digital standees) and Precision Cooling Components (industrial water blocks and radiators). This overlap in metal-fabrication skills allows us to maintain strict quality control across completely different industries.
              </p>
              <p>
                Today, our dedicated team of engineering professionals serves clients across India, delivering both standardized products and highly customized B2B solutions.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-2 shadow-lg">
             <Image src="/images/banners/display-signage.jpg" alt="Hari Impex Facility" fill className="object-cover" />
          </div>
        </div>

        <h2 className="font-heading text-3xl font-bold text-ink mb-10 text-center">Our Core Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-surface border border-border p-8 rounded-2xl text-center">
            <Users className="h-12 w-12 text-signal-blue mx-auto mb-6" />
            <h3 className="font-heading font-semibold text-xl text-ink mb-4">Engineering-Led Team</h3>
            <p className="text-text-secondary">Our skilled 10-person team brings deep technical expertise in both electronics assembly and precision metal machining.</p>
          </div>
          <div className="bg-surface border border-border p-8 rounded-2xl text-center">
            <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-6" />
            <h3 className="font-heading font-semibold text-xl text-ink mb-4">100% Quality Tested</h3>
            <p className="text-text-secondary">We maintain a strict quality control policy. Every single unit is tested for performance and durability before it leaves our facility.</p>
          </div>
          <div className="bg-surface border border-border p-8 rounded-2xl text-center">
            <Factory className="h-12 w-12 text-copper mx-auto mb-6" />
            <h3 className="font-heading font-semibold text-xl text-ink mb-4">In-House Manufacturing</h3>
            <p className="text-text-secondary">By reinvesting in tooling and keeping manufacturing in-house in Surat, we can serve custom industrial orders with precision and speed.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
