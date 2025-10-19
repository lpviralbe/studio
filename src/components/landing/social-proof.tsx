'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Lightbulb, Smile } from 'lucide-react';

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
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Mais de <span className="text-primary">5.000 influencers</span> já usam ViralBe.AI</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-background rounded-xl border border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <stat.icon className="w-12 h-12 text-primary mb-4" />
              <div className="text-4xl font-bold">
                <Counter end={stat.end} />
                {index === 0 ? 'k+' : ''}
                {index === 1 ? 'k' : ''}
                {index === 2 ? '%' : ''}
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
