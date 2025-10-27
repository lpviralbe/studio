'use client';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navItems = [
  { name: 'Como Funciona', url: '#how-it-works' },
  { name: 'Depoimentos', url: '#testimonials' },
  { name: 'Preços', url: '#pricing' },
  { name: 'FAQ', url: '#faq' },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.url} href={item.url} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <Button onClick={() => window.open('https://viralbeai.vercel.app/', '_blank')}>
            Começar Agora
        </Button>
      </div>
    </header>
  );
}
