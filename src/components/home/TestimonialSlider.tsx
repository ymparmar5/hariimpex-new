'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    company: 'VisionTech Displays',
    role: 'Procurement Director',
    content: 'Hari Impex delivered our 10x20ft indoor LED wall ahead of schedule. The precision of their die-cast cabinets and zero-bezel alignment is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amit Patel',
    company: 'NexGen Industrial',
    role: 'Lead Engineer',
    content: 'We sourced custom liquid cooling blocks for our heavy machinery from them. The thermal dissipation rate improved by 40% compared to our previous vendor. Highly recommended for B2B.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Singh',
    company: 'Digital Signage Solutions',
    role: 'Operations Head',
    content: 'The outdoor LED displays we bought from Hari Impex have survived extreme weather conditions without a single dead pixel. Their manufacturing quality control is truly top-tier.',
    rating: 5,
  },
];

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-surface-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,109,0,0.05)_0%,transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-ink mb-4">Trusted by Industry Leaders</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">Don't just take our word for it. Hear what our B2B partners have to say about our manufacturing quality.</p>
        </div>

        <div className="relative max-w-4xl mx-auto group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="relative flex-[0_0_100%] min-w-0 px-4 transition-opacity duration-300" key={testimonial.id} style={{ opacity: selectedIndex === index ? 1 : 0.4 }}>
                  <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border shadow-xl text-center relative">
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-surface-2 opacity-50" />
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-glow text-amber-glow" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-ink font-medium leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-ink text-lg">{testimonial.name}</h4>
                      <p className="text-text-secondary">{testimonial.role}, <span className="text-signal-blue">{testimonial.company}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-border text-ink flex items-center justify-center shadow-lg hover:bg-surface-2 transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface border border-border text-ink flex items-center justify-center shadow-lg hover:bg-surface-2 transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
