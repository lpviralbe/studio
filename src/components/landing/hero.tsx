'use client';
import { NicheSearch } from "@/components/landing/niche-search";
import { Typewriter } from "@/components/ui/typewriter";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
       <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-primary/20 rounded-full blur-[150px] animate-fade-in-up"></div>
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-accent/20 rounded-full blur-[100px] animate-fade-in-up [animation-delay:200ms]"></div>
        </div>
      <div className="container text-center relative z-10">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text animate-fade-in-up">
          {t('hero.title')}
          <Typewriter text={[t('hero.typewriter1'), t('hero.typewriter2')]} />
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up">
          {t('hero.description')}
        </p>
        <div className="mt-12 flex justify-center animate-fade-in-up">
           <NicheSearch />
        </div>
      </div>
    </section>
  );
}
