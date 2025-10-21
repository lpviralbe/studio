'use client';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';

export function NicheSearch() {

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-card/50 backdrop-blur-lg border border-primary/20 rounded-xl shadow-lg shadow-primary/10">
        <Button size="lg" className="py-8 px-6 sm:px-8 text-lg w-full sm:w-auto transition-transform hover:scale-105" onClick={handleRedirect}>
            <Search className="h-6 w-6 mr-3" />
            <span className="text-center">Encontrar vídeos virais</span>
        </Button>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-4">
            <Image
                src="https://i.imgur.com/NNzOliK.png"
                alt="Powered by Gemini"
                width={120}
                height={40}
                className="h-auto animate-fade-in-up [animation-delay:300ms] mx-auto"
            />
            <Image
                src="https://i.imgur.com/deUD5R5.png"
                alt="Mais um logo"
                width={120}
                height={40}
                className="h-auto animate-fade-in-up [animation-delay:400ms] mx-auto"
            />
            <Image
                src="https://i.imgur.com/UuRc8mX.png"
                alt="Mais um logo"
                width={120}
                height={40}
                className="h-auto animate-fade-in-up [animation-delay:500ms] mx-auto"
            />
            <Image
                src="https://i.imgur.com/7P9pUs4.png"
                alt="ViralBe.AI Logo"
                width={120}
                height={40}
                className="h-auto animate-fade-in-up [animation-delay:600ms] mx-auto"
            />
        </div>
      </div>
  );
}
