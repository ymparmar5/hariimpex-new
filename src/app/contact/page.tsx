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
                Ground Floor, Shop No. G-76<br />
                Raj World, Palanpur Gam<br />
                Surat – 395009, Gujarat
              </address>
              {/* Map Placeholder */}
              <div className="w-full h-48 bg-surface-2 rounded-lg border border-border flex items-center justify-center text-text-muted">
                Map Embed Placeholder
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-lg text-ink mb-4 flex items-center gap-2">
                <MapPin className="text-signal-blue h-5 w-5" /> Secondary Branch
              </h3>
              <address className="not-italic text-text-secondary space-y-2 mb-4">
                Shop No. 62, Vinay Nagar<br />
                Opp. Udhna Bus Depot, Near Mani Ki Khamni<br />
                Surat – 394210, Gujarat
              </address>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-surface p-6 rounded-xl border border-border">
                <Phone className="h-6 w-6 text-signal-blue mb-4" />
                <h4 className="font-semibold text-ink mb-2">Phone</h4>
                <div className="flex flex-col gap-1 text-text-secondary">
                  <a href="tel:07949095500" className="hover:text-signal-blue">07949095500</a>
                  <a href="tel:07971549319" className="hover:text-signal-blue">07971549319</a>
                </div>
             </div>
             <div className="bg-[#25D366]/10 p-6 rounded-xl border border-[#25D366]/20">
                <h4 className="font-semibold text-[#128C7E] mb-2 flex items-center gap-2">WhatsApp Support</h4>
                <p className="text-sm text-text-secondary mb-4">Chat with our sales team directly.</p>
                <Button className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white" asChild>
                  <Link href="https://wa.me/917949095500" target="_blank">Chat Now</Link>
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
