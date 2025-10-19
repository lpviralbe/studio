import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

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
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#pricing">
                Teste grátis — 3 envios <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#pricing">
                Assinar Pro R$49/mês
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
