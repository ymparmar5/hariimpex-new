import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb className="mb-12">
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Contact Us</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold text-ink mb-4">Contact Us</h1>
        <p className="text-lg text-text-secondary max-w-2xl">Have a question or need to discuss a custom order? Reach out to our team directly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Our Locations</h2>
          
          <div className="flex flex-col gap-8">
            <div className="bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-lg text-ink mb-4 flex items-center gap-2">
                <MapPin className="text-signal-blue h-5 w-5" /> Primary Office & Facility
              </h3>
              <address className="not-italic text-text-secondary space-y-2 mb-4">
                104/C Block, Orchid Green<br />
                LP Savani Rd, Palanpur<br />
                Surat, 395009, Gujarat, India
              </address>
              <div className="w-full h-48 bg-surface-2 rounded-lg border border-border overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59534.130917562536!2d72.81454281764896!3d21.15704671409967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fcac731f069%3A0x41a3d12774b78d2c!2sHari%20Impex!5e0!3m2!1sen!2sin!4v1717589375095!5m2!1sen!2sin"  
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-surface p-6 rounded-xl border border-border">
                <Phone className="h-6 w-6 text-signal-blue mb-4" />
                <h4 className="font-semibold text-ink mb-2">Phone</h4>
                <div className="flex flex-col gap-1 text-text-secondary">
                  <a href="tel:+919765618860" className="hover:text-signal-blue">+91 9765618860</a>
                </div>
                <h4 className="font-semibold text-ink mt-4 mb-2">Email</h4>
                <div className="flex flex-col gap-1 text-text-secondary">
                  <a href="mailto:hariimpexonline@gmail.com" className="hover:text-signal-blue">hariimpexonline@gmail.com</a>
                </div>
             </div>
             <div className="bg-[#25D366]/10 p-6 rounded-xl border border-[#25D366]/20">
                <h4 className="font-semibold text-[#128C7E] mb-2 flex items-center gap-2">WhatsApp Support</h4>
                <p className="text-sm text-text-secondary mb-4">Chat with our sales team directly.</p>
                <Button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white" render={<Link href="https://wa.me/919765618860" target="_blank" />}>
                  Chat Now
                </Button>
             </div>
          </div>
        </div>

        <div>
          <div className="bg-surface rounded-2xl border border-border p-8 sticky top-24">
            <h2 className="font-heading text-2xl font-bold text-ink mb-6">Send an Enquiry</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="button" size="lg" className="w-full bg-signal-blue text-surface hover:bg-signal-blue-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
