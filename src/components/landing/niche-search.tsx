'use client';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function NicheSearch() {

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-card/50 backdrop-blur-lg border border-primary/20 rounded-xl shadow-lg shadow-primary/10">
        <Button size="lg" className="py-8 px-8 text-lg" onClick={handleRedirect}>
            <Search className="h-6 w-6 md:mr-3" />
            Encontrar os vídeos mais virais do meu nicho
        </Button>
      </div>
  );
}
