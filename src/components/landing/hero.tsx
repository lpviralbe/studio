'use client';
import { NicheSearch } from "@/components/landing/niche-search";
import { Typewriter } from "@/components/ui/typewriter";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container text-center relative z-10">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text animate-fade-in-up">
          {t('hero.title')}
          <span className="block min-h-[50px] md:min-h-[80px]">
            <Typewriter text={[t('hero.typewriter1'), t('hero.typewriter2')]} />
          </span>
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
