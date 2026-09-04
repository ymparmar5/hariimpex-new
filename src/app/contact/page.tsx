import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-signal-blue/10 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-signal-blue/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <Breadcrumb className="mb-12">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/" className="text-text-secondary hover:text-ink">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className="text-text-secondary/20" />
            <BreadcrumbItem><BreadcrumbPage className="text-signal-blue">Contact Us</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-16 text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink mb-6 drop-shadow-md">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-blue to-signal-blue-dark">incredible.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl font-medium">Have a question or need to discuss a custom B2B order? Reach out to our engineering and sales team directly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          
          {/* Left Pane - Cards */}
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-3xl font-bold text-ink mb-2">Our Locations</h2>
            
            <div className="bg-surface-2/40 backdrop-blur-xl p-8 rounded-3xl border border-border hover:border-signal-blue/30 transition-all duration-300 shadow-sm group">
              <h3 className="font-bold text-xl text-ink mb-6 flex items-center gap-3">
                <div className="p-2 bg-signal-blue/10 rounded-lg group-hover:bg-signal-blue/20 transition-colors">
                  <MapPin className="text-signal-blue h-6 w-6" />
                </div>
                Primary Manufacturing Facility
              </h3>
              <address className="not-italic text-text-secondary text-lg leading-relaxed mb-8">
                104/C Block, Orchid Green<br />
                LP Savani Rd, Palanpur<br />
                Surat, 395009, Gujarat, India
              </address>
              <div className="w-full h-56 bg-ink rounded-2xl border border-white/5 overflow-hidden shadow-inner group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-shadow duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59534.130917562536!2d72.81454281764896!3d21.15704671409967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fcac731f069%3A0x41a3d12774b78d2c!2sHari%20Impex!5e0!3m2!1sen!2sin!4v1717589375095!5m2!1sen!2sin"  
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }}
                  allowFullScreen={false}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-surface-2/40 backdrop-blur-xl p-8 rounded-3xl border border-border hover:border-signal-blue/30 transition-all duration-300 shadow-sm group">
                  <div className="p-2 bg-signal-blue/10 w-fit rounded-lg mb-6 group-hover:bg-signal-blue/20 transition-colors">
                    <Phone className="h-6 w-6 text-signal-blue" />
                  </div>
                  <h4 className="font-bold text-ink mb-2 text-lg">Direct Contact</h4>
                  <div className="flex flex-col gap-2 text-text-secondary">
                    <a href="tel:+919765618860" className="hover:text-signal-blue transition-colors text-lg font-medium">+91 9765618860</a>
                    <a href="mailto:hariimpexonline@gmail.com" className="hover:text-signal-blue transition-colors">hariimpexonline@gmail.com</a>
                  </div>
               </div>
               
               <div className="bg-[#25D366]/10 backdrop-blur-xl p-8 rounded-3xl border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#25D366] mb-2 flex items-center gap-2 text-lg">WhatsApp</h4>
                    <p className="text-text-secondary mb-6">Chat directly with our B2B sales team.</p>
                  </div>
                  <Button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white shadow-[0_0_15px_rgba(37,211,102,0.3)] group-hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all h-12 rounded-xl" render={<Link href="https://wa.me/919765618860" target="_blank" />}>
                    Chat Now
                  </Button>
               </div>
            </div>
          </div>

          {/* Right Pane - Form */}
          <div className="relative">
            <div className="bg-surface p-10 rounded-3xl border border-border shadow-md sticky top-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-signal-blue/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h2 className="font-heading text-3xl font-bold text-ink mb-8 relative z-10">Send an Enquiry</h2>
              <form className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-text-secondary text-sm uppercase tracking-wider font-semibold">Name</Label>
                  <Input id="name" placeholder="John Doe" className="h-14 bg-surface-2 border-border text-ink rounded-xl focus:border-signal-blue focus:ring-1 focus:ring-signal-blue transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-text-secondary text-sm uppercase tracking-wider font-semibold">Phone Number</Label>
                  <Input id="phone" placeholder="+91 xxxxx xxxxx" className="h-14 bg-surface-2 border-border text-ink rounded-xl focus:border-signal-blue focus:ring-1 focus:ring-signal-blue transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-text-secondary text-sm uppercase tracking-wider font-semibold">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="h-14 bg-surface-2 border-border text-ink rounded-xl focus:border-signal-blue focus:ring-1 focus:ring-signal-blue transition-all" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-text-secondary text-sm uppercase tracking-wider font-semibold">Message</Label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[160px] w-full rounded-xl border border-border bg-surface-2 px-4 py-4 text-ink shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:border-signal-blue focus-visible:ring-signal-blue transition-all resize-none"
                    placeholder="Tell us about your custom requirements..."
                  />
                </div>
                <Button type="button" size="lg" className="w-full bg-signal-blue text-ink hover:bg-signal-blue-dark h-14 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 mt-4">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
