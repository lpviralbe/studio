'use client';
import { NicheSearch } from "@/components/landing/niche-search";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary via-purple-400 to-accent text-transparent bg-clip-text animate-fade-in-up">
          Os vídeos mais virais do mundo na sua mão. Viralize sem ser criativo.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up">
          Encontre vídeos virais do seu nicho, escolha um e deixe nossa IA criar um roteiro novo e aprimorado para você gravar.
        </p>
        <div className="mt-12 flex justify-center animate-fade-in-up">
           <NicheSearch />
        </div>
      </div>
    </section>
  );
}
