'use client';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Como Funciona', url: '#how-it-works' },
  { name: 'Depoimentos', url: '#testimonials' },
  { name: 'Preços', url: '#pricing' },
  { name: 'FAQ', url: '#faq' },
];

const NavLink = ({ item }: { item: { name: string; url: string } }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { mouseX } = useDock();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      style={{ scale: scaleSpring }}
      className="origin-center"
    >
      <Link
        ref={ref}
        href={item.url}
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        {item.name}
      </Link>
    </motion.div>
  );
};

const DockContext = React.createContext<{ mouseX: motion.MotionValue<number> } | null>(null);

const useDock = () => {
  const context = React.useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within a DockProvider');
  }
  return context;
};

export function Header() {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-lg">
        <div 
          className="container flex items-center justify-between h-16"
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.url} item={item} />
            ))}
          </nav>
          <Button onClick={() => window.open('https://viralbeai.vercel.app/', '_blank')}>
            Começar Agora
          </Button>
        </div>
      </header>
    </DockContext.Provider>
  );
}
