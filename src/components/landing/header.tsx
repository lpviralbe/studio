'use client';
import { useState } from 'react';
import { Menu, Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import Link from 'next/link';

const navLinks = [
  { href: '#how-it-works', label: 'Como Funciona' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#pricing', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-auto" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex-1 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background">
              <Link
                href="/"
                className="mb-8 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Logo className="h-6 w-auto" />
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-4">
                   <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={20}/></Link>
                   <Link href="#" className="text-muted-foreground hover:text-foreground"><Youtube size={20}/></Link>
                   <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20}/></Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:justify-end space-x-4">
            <div className="md:hidden">
                <Link href="/" className="flex items-center">
                    <Logo className="h-6 w-auto" />
                </Link>
            </div>
          <nav className="hidden md:flex items-center">
            <Button size="sm" asChild>
                <Link href="#pricing">Assinar Pro</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
