'use client';
import { TestimonialsCarousel } from './testimonials-carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/lib/i18n';
import { Marquee } from '../ui/marquee';
import { TestimonialCard } from '../ui/testimonial-card';

export function Testimonials() {
  const { t } = useI18n();

  const testimonialsData = {
    testimonials: [
      { name: 'Marina Silva', handle: '@marinabeauty', network: 'Instagram', text: t('testimonials.t1'), photoUrl: '' },
      { name: 'Gabriel Costa', handle: '@gabs.fit', network: 'TikTok', text: t('testimonials.t2'), photoUrl: '' },
      { name: 'Lucas Ferraz', handle: '@lucas.investe', network: 'YouTube', text: t('testimonials.t3'), photoUrl: '' },
      { name: 'Sofia Mendes', handle: '@sofiapets', network: 'Instagram', text: t('testimonials.t4'), photoUrl: '' },
      { name: 'Ana Pereira', handle: '@anagourmet', network: 'Instagram', text: t('testimonials.t1'), photoUrl: '' },
      { name: 'Carlos Lima', handle: '@carlosgamer', network: 'TikTok', text: t('testimonials.t2'), photoUrl: '' },
    ]
  };

  const testimonialsWithImages = testimonialsData.testimonials.map((testimonial, index) => ({
    text: testimonial.text,
    author: {
      name: testimonial.name,
      handle: `${testimonial.handle} (${testimonial.network})`,
      imageUrl: PlaceHolderImages[index % PlaceHolderImages.length]?.imageUrl || `https://picsum.photos/seed/${101+index}/48/48`
    }
  }));

  const firstRow = testimonialsWithImages.slice(0, testimonialsWithImages.length / 2);
  const secondRow = testimonialsWithImages.slice(testimonialsWithImages.length / 2);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/20">
      <div className="container animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">{t('testimonials.title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('testimonials.description')}</p>
        </div>
      </div>
      <div className="relative mt-16">
        <div className="opacity-10">
          <Marquee pauseOnHover vertical className="[--duration:120s]">
            {firstRow.map((testimonial, idx) => <TestimonialCard key={idx} {...testimonial} />)}
          </Marquee>
          <Marquee pauseOnHover vertical reverse className="[--duration:120s] [--delay:60s]">
            {secondRow.map((testimonial, idx) => <TestimonialCard key={idx} {...testimonial} />)}
          </Marquee>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <TestimonialsCarousel testimonials={testimonialsWithImages.map(t => ({...t, photoUrl: t.author.imageUrl}))} />
        </div>
      </div>
    </section>
  );
}
