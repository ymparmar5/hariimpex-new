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
                Founded in 2010, our journey began with a simple vision: to revolutionize the standee manufacturing industry by delivering high-quality, innovative products. Starting as a small workshop, we have grown into a leading manufacturer known for our commitment to excellence and customer satisfaction. Our early days were marked by dedication and a relentless pursuit of perfection, which set the foundation for our growth. Over the years, we have continually invested in cutting-edge technology and skilled craftsmanship to ensure our standees meet the highest standards. Our team of talented designers and engineers works tirelessly to bring creative concepts to life, ensuring every standee we produce is not only visually appealing but also durable and functional.
              </p>
              <p>
                Our passion for creativity and attention to detail has allowed us to collaborate with a diverse range of clients, from local businesses to multinational corporations. Each project presents an opportunity to push the boundaries of innovation and design, and we take pride in delivering standees that reflect our clients' unique visions. Our journey has been one of continuous improvement and learning, driven by our desire to set new benchmarks in the industry. Every standee we produce reflects our dedication to quality, innovation, and the unique vision of our clients. We believe that our success is measured by the satisfaction and success of our clients, and this belief drives us to excel in every project we undertake.
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
