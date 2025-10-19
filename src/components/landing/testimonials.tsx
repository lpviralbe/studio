import { generateAuthenticTestimonials } from '@/ai/flows/generate-authentic-testimonials';
import { TestimonialsCarousel } from './testimonials-carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export async function Testimonials() {
  let testimonialsData;
  // try {
  //   testimonialsData = await generateAuthenticTestimonials({
  //     numberOfTestimonials: 4,
  //     niche: 'beleza, fitness, educação, finanças'
  //   });
  // } catch (error) {
  //   console.error("Failed to generate testimonials:", error);
    // Fallback data in case of AI failure
    testimonialsData = {
      testimonials: [
        { name: 'Marina Silva', handle: '@marinabeauty', network: 'Instagram', text: 'De 300 para 12k em 6 semanas. Os roteiros salvam meu tempo e minha sanidade!', photoUrl: '' },
        { name: 'Gabriel Costa', handle: '@gabs.fit', network: 'TikTok', text: 'Conteúdo consistente sem esforço. Valeu cada centavo do plano Pro. Recomendo demais!', photoUrl: '' },
        { name: 'Lucas Ferraz', handle: '@lucas.investe', network: 'YouTube', text: 'Eu não sou criativo, e o ViralBe.AI foi a solução perfeita. Meu canal de finanças decolou!', photoUrl: '' },
        { name: 'Sofia Mendes', handle: '@sofiapets', network: 'Instagram', text: 'Finalmente consigo postar todos os dias sobre meus pets. O crescimento foi absurdo!', photoUrl: '' },
      ]
    };
  // }

  const testimonialsWithImages = testimonialsData.testimonials.map((testimonial, index) => ({
    ...testimonial,
    photoUrl: PlaceHolderImages[index % PlaceHolderImages.length]?.imageUrl || `https://picsum.photos/seed/${101+index}/48/48`
  }));


  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/20">
      <div className="container animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Contas que saíram do zero a resultados incríveis</h2>
          <p className="mt-4 text-muted-foreground">Não acredite só na nossa palavra. Veja o que os criadores estão dizendo sobre o ViralBe.AI.</p>
        </div>
        <TestimonialsCarousel testimonials={testimonialsWithImages} />
      </div>
    </section>
  );
}
