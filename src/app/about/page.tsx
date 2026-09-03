import Image from 'next/image';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { CheckCircle2, Users, Factory } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <section className="relative h-[50vh] min-h-[400px] w-full bg-ink overflow-hidden flex items-center justify-center">
        <Image 
          src="/images/about-factory.jpg" 
          alt="Hari Impex Factory"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-surface" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-signal-blue/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-surface mb-6 drop-shadow-lg">
            Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-blue to-white">Excellence</span>
          </h1>
          <p className="text-xl text-surface-2/90 max-w-2xl mx-auto font-medium">
            Precision engineering in Surat since 2019.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumb className="mb-16">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/" className="text-text-secondary hover:text-white">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/20" />
            <BreadcrumbItem><BreadcrumbPage className="text-signal-blue">About Us</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-copper/20 rounded-full blur-2xl" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-8 relative z-10">
              Our Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-dark">Journey</span>
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed relative z-10">
              <p>
                Founded in 2019, our journey began with a simple vision: to revolutionize the B2B manufacturing industry by delivering high-quality, innovative LED and cooling products. Starting as a small workshop in Surat, we have grown into a leading facility known for our uncompromising commitment to precision.
              </p>
              <p>
                We have continually invested in cutting-edge technology—from state-of-the-art CNC machines to automated testing chambers. Our team of talented designers and engineers works tirelessly to bring complex industrial concepts to life, ensuring every unit we produce is durable, functional, and visually flawless.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-signal-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
             <Image src="/images/about-factory.jpg" alt="Hari Impex Facility" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-signal-blue/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="font-heading text-4xl font-bold text-ink relative z-10">Our Core Pillars</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative z-10">
          <div className="bg-surface-2/40 backdrop-blur-xl border border-white/5 p-10 rounded-3xl hover:border-signal-blue/30 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="h-16 w-16 rounded-2xl bg-signal-blue/10 flex items-center justify-center mb-8 group-hover:bg-signal-blue/20 transition-colors">
              <Users className="h-8 w-8 text-signal-blue" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-ink mb-4 group-hover:text-signal-blue transition-colors">Engineering Team</h3>
            <p className="text-text-secondary leading-relaxed">Our skilled 10-person team brings deep technical expertise in both electronics assembly and precision metal machining.</p>
          </div>
          
          <div className="bg-surface-2/40 backdrop-blur-xl border border-white/5 p-10 rounded-3xl hover:border-success/30 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="h-16 w-16 rounded-2xl bg-success/10 flex items-center justify-center mb-8 group-hover:bg-success/20 transition-colors">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-ink mb-4 group-hover:text-success transition-colors">100% Quality Tested</h3>
            <p className="text-text-secondary leading-relaxed">We maintain a strict quality control policy. Every single unit is tested for thermal performance and durability before dispatch.</p>
          </div>
          
          <div className="bg-surface-2/40 backdrop-blur-xl border border-white/5 p-10 rounded-3xl hover:border-copper/30 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
            <div className="h-16 w-16 rounded-2xl bg-copper/10 flex items-center justify-center mb-8 group-hover:bg-copper/20 transition-colors">
              <Factory className="h-8 w-8 text-copper" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-ink mb-4 group-hover:text-copper transition-colors">In-House Manufacturing</h3>
            <p className="text-text-secondary leading-relaxed">By keeping manufacturing in-house in Surat, we can serve custom industrial orders with incredible precision and speed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
