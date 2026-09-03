'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    image: '/images/hero-led-wall.jpg',
    badge: 'Pioneering B2B Manufacturing',
    title: 'Precision Engineered <span class="text-transparent bg-clip-text bg-gradient-to-r from-signal-blue to-signal-blue-dark filter drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">Display</span> Solutions',
    desc: 'Surat\'s leading manufacturer of high-impact LED video walls and structural digital standees.',
    primaryCta: 'Display & Signage',
    primaryLink: '/display-and-signage',
    glowColor: 'bg-signal-blue/20',
  },
  {
    id: 2,
    image: '/images/hero-cooling.jpg',
    badge: 'Industrial Grade Quality',
    title: 'Advanced <span class="text-transparent bg-clip-text bg-gradient-to-r from-copper-dark to-copper filter drop-shadow-[0_0_20px_rgba(255,109,0,0.4)]">Cooling</span> Components',
    desc: 'Precision-machined liquid cooling blocks and robust radiators for heavy machinery and EV sectors.',
    primaryCta: 'Cooling Components',
    primaryLink: '/cooling-components',
    glowColor: 'bg-copper/20',
  },
  {
    id: 3,
    image: '/images/about-factory.jpg',
    badge: 'State-of-the-art Facility',
    title: 'Manufacturing <span class="text-transparent bg-clip-text bg-gradient-to-r from-success-dark to-success filter drop-shadow-[0_0_20px_rgba(0,230,118,0.4)]">Excellence</span>',
    desc: 'In-house engineering, strict quality control, and scalable B2B manufacturing capabilities.',
    primaryCta: 'Our Story',
    primaryLink: '/about',
    glowColor: 'bg-success/20',
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
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
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full bg-ink overflow-hidden group">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center" key={slide.id}>
              <Image 
                src={slide.image} 
                alt="Banner"
                fill
                className="object-cover opacity-30 transition-transform duration-[10000ms] ease-out hover:scale-105"
                priority={index === 0}
              />
              <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${slide.glowColor} rounded-full blur-[120px] mix-blend-screen pointer-events-none transition-colors duration-1000`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              
              <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12 transition-all duration-1000 transform ${selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/10 backdrop-blur-md border border-white/10 text-white mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span className="text-sm font-medium tracking-wide text-white ml-2">{slide.badge}</span>
                </div>

                <h1 
                  className="font-heading text-5xl md:text-7xl font-bold text-surface mb-6 max-w-5xl mx-auto leading-tight tracking-tight drop-shadow-2xl"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
                  {slide.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button size="lg" className="bg-white hover:bg-white/90 text-ink font-semibold w-full sm:w-auto h-14 px-8 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300" render={<Link href={slide.primaryLink} />}>
                    {slide.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" className="bg-surface-2/20 backdrop-blur-md border border-white/10 hover:bg-surface-2/40 text-surface font-semibold w-full sm:w-auto h-14 px-8 rounded-xl transition-all duration-300" render={<Link href="/contact" />}>
                    Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-2/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-2/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
