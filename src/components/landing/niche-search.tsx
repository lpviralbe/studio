'use client';
import { FlowButton } from '@/components/ui/flow-button';
import { useI18n } from '@/lib/i18n';
import React, { useState, useEffect } from 'react';

// Component for the individual photo cards
const PhotoCard = ({ src, alt, rotation, text, index, style = {} }: {
    src: string;
    alt: string;
    rotation: number;
    text: string;
    index: number;
    style?: React.CSSProperties;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700 + (index * 300));
    return () => clearTimeout(timer);
  }, [index]);

  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    transform: `rotate(${rotation}deg) ${isHovered ? `scale(1.05)` : `scale(1)`}`,
    zIndex: isHovered ? 20 : (index === 1 ? 2 : 1),
    transition: 'all 0.3s ease-out',
    opacity: isVisible ? 1 : 0,
    ...style
  };

  return (
    <div
      className="w-[162px] h-[240px] bg-white dark:bg-slate-800 p-2 rounded-md shadow-2xl cursor-pointer"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-[85%] bg-muted rounded-sm overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
          onLoad={() => setIsLoaded(true)}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src='https://placehold.co/162x200/e2e8f0/94a3b8?text=Image';
            setIsLoaded(true);
          }}
        />
      </div>
      <div className="h-[15%] flex items-center justify-center">
        <p style={{ fontFamily: '"Zeyada", cursive' }} className="text-sm text-muted-foreground tracking-tighter text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

// Animated Gradient Grid Background Component
const AnimatedGrid = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 0.5) % 40);
    }, 80);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none h-[400px] w-full">
      {/* Main grid with gradient fade - Light theme */}
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background)) 50%, hsl(var(--background)) 100%),
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: 'cover, 40px 40px, 40px 40px',
          backgroundPosition: `center, ${offset}px ${offset}px, ${offset}px ${offset}px`,
        }}
      />
      
      {/* Main grid with gradient fade - Dark theme */}
      <div 
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background)) 50%, hsl(var(--background)) 100%),
            linear-gradient(hsla(var(--border) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsla(var(--border) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: 'cover, 40px 40px, 40px 40px',
          backgroundPosition: `center, ${offset}px ${offset}px, ${offset}px ${offset}px`,
        }}
      />
    </div>
  );
};


export function NicheSearch() {
  const { t } = useI18n();

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  const photos = [
    {
        src: "https://i.imgur.com/NNzOliK.png",
        alt: "Ícone de geração de roteiro por IA",
        rotation: -8,
        text: "Ideias infinitas...",
        style: { top: '20px', left: '0px' }
    },
    {
        src: "https://i.imgur.com/7P9pUs4.png",
        alt: "Ícone de ideia de vídeo viral",
        rotation: 15,
        text: "Roteiros perfeitos!",
        style: { top: '10px', right: '0px' }
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto text-center mt-12">
      <div className="flex justify-center mb-6">
          <FlowButton
            text={t('nicheSearch.button')}
            onClick={handleRedirect}
          />
      </div>
      <div className="relative w-full h-[300px] flex items-center justify-center mt-16">
        <AnimatedGrid />
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            {photos.map((photo, index) => (
                <PhotoCard
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    rotation={photo.rotation}
                    text={photo.text}
                    index={index}
                    style={photo.style}
                />
            ))}
        </div>
      </div>
    </div>
  );
}
