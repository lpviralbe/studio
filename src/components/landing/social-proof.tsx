'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Lightbulb, Smile } from 'lucide-react';
import Image from 'next/image';
import { RevenueChart } from './revenue-chart';

const stats = [
  { icon: Users, end: 5000, label: 'Usuários' },
  { icon: Lightbulb, end: 120000, label: 'Ideias Geradas' },
  { icon: Smile, end: 98, label: 'Satisfação' },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let start: number;
    const el = ref.current;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const newCount = Math.floor(end * percentage);
      
      setCount(newCount);

      if (progress < duration) {
        frame = requestAnimationFrame(animate);
      }
    };
    
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                frame = requestAnimationFrame(animate);
                observer.disconnect();
            }
        },
        { threshold: 0.1 }
    );

    if (el) {
        observer.observe(el);
    }

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      if (observer && el) {
        observer.unobserve(el);
      }
    };
  }, [end, duration]);
  
  const formatter = new Intl.NumberFormat('pt-BR');

  return <span ref={ref}>{formatter.format(count)}</span>;
}


export function SocialProof() {
  return (
    <section className="py-20 md:py-32">
      <div className="container relative">
        <div className="absolute -top-20 -left-20 w-48 h-48">
          <Image src="https://picsum.photos/seed/img1/200/200" alt="blurred image 1" fill={true} className="blur-2xl opacity-20" data-ai-hint="abstract shape" />
        </div>
        <div className="absolute -top-10 right-0 w-48 h-48">
          <Image src="https://picsum.photos/seed/img2/200/200" alt="blurred image 2" fill={true} className="blur-2xl opacity-20" data-ai-hint="abstract shape" />
        </div>
        <div className="absolute top-20 -left-10 w-48 h-48">
          <Image src="https://picsum.photos/seed/img3/200/200" alt="blurred image 3" fill={true} className="blur-2xl opacity-20" data-ai-hint="abstract shape" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Mais de <span className="text-primary">5.000 influencers</span> faturando alto após viralizar</h2>
              <p className="mt-4 text-muted-foreground">O ViralBe.AI não só aumenta seus seguidores, ele multiplica seu faturamento. Veja o impacto real.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-background/50 rounded-xl border border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <stat.icon className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-3xl font-bold">
                      <Counter end={stat.end} />
                      {index === 2 ? '%' : '+'}
                    </div>
                    <p className="text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <RevenueChart />
          </div>
        </div>
      </div>
    </section>
  );
}
