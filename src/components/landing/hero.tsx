'use client';
import { NicheSearch } from "@/components/landing/niche-search";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary via-purple-400 to-accent text-transparent bg-clip-text">
          ViralBe.AI — Viralize seu conteúdo sem ser criativo
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Ideias, roteiros e vídeos prontos gerados por IA para você crescer em qualquer rede social — rápido, simples e sem sofrimento.
        </p>
        <div className="mt-12 flex justify-center">
           <NicheSearch />
        </div>
      </div>
    </section>
  );
}
