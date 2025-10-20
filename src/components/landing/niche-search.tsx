'use client';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/logo';

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
        <div className="mt-4 flex justify-center items-center gap-4">
            <Logo
                width={240}
                height={80}
            />
            <Image
                src="https://i.imgur.com/NNzOliK.png"
                alt="Powered by Gemini"
                width={120}
                height={40}
                className="h-auto"
            />
            <Image
                src="https://i.imgur.com/deUD5R5.png"
                alt="Mais um logo"
                width={120}
                height={40}
                className="h-auto"
            />
        </div>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-2">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="relative aspect-[9/16] rounded-md overflow-hidden transition-transform hover:scale-105">
                    <Image
                        src={`https://picsum.photos/seed/${200+i}/270/480`}
                        alt={`Exemplo de vídeo viral ${i + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint="viral video"
                    />
                </div>
            ))}
        </div>
      </div>
  );
}
