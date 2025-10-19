import { Logo } from "@/components/logo";
import { Instagram, Youtube, Twitter } from "lucide-react";
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-border/40 py-8">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Logo className="h-6 w-auto" />
                    <p className="text-sm text-muted-foreground">© 2025 ViralBe.AI — Todos os direitos reservados.</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground">Termos</Link>
                    <Link href="#" className="hover:text-foreground">Privacidade</Link>
                    <Link href="#" className="hover:text-foreground">Contato</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground"><Instagram /></Link>
                    <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground"><Youtube /></Link>
                    <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter /></Link>
                </div>
            </div>
        </footer>
    )
}
