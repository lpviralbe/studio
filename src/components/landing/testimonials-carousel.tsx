'use client';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Marquee } from '@/components/ui/marquee';

export function TestimonialsCarousel({ testimonials }: { testimonials: any[] }) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial) => (
          <TestimonialCard key={testimonial.author.name} {...testimonial} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((testimonial) => (
          <TestimonialCard key={testimonial.author.name} {...testimonial} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}
