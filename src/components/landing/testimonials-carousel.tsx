'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import type { TestimonialAuthor } from '@/components/ui/testimonial-card';

type Testimonial = {
    author: TestimonialAuthor;
    text: string;
    href?: string;
};

export function TestimonialsCarousel({ testimonials }: { testimonials: any[] }) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIndex) =>
            testimonials.map((testimonial, i) => (
                <TestimonialCard
                key={`${setIndex}-${i}`}
                {...testimonial}
                />
            ))
            )}
        </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
    </div>
  );
}
