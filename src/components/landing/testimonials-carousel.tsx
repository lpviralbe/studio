'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { GenerateAuthenticTestimonialsOutput } from '@/ai/flows/generate-authentic-testimonials';

type Testimonial = GenerateAuthenticTestimonialsOutput['testimonials'][0] & { photoUrl: string };

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto mt-12"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="p-1 h-full">
              <Card className="h-full bg-card/50 backdrop-blur-lg border-white/10 flex flex-col">
                <CardContent className="flex flex-col justify-between flex-1 p-6">
                  <blockquote className="text-foreground/90 mb-6 flex-1">&ldquo;{testimonial.text}&rdquo;</blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.photoUrl} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.handle} ({testimonial.network})</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}
