'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function NicheSearch() {
  const [niche, setNiche] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (niche.trim() === '') return;
    const encodedNiche = encodeURIComponent(niche.trim());
    window.open(`https://viralbeai.vercel.app/?q=${encodedNiche}`, '_blank');
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Digite seu nicho e veja ideias prontas agora:
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 flex w-full items-center space-x-2">
          <Input
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="ex.: futebol, beleza, finanças pessoais, pets..."
            className="text-lg py-6"
            aria-label="Seu nicho de conteúdo"
          />
          <Button type="submit" size="lg" className="py-6 px-4">
            <Search className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Ver Ideias</span>
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">
          Isso abre nosso app real com sugestões instantâneas.
        </p>
      </div>
    </section>
  );
}
