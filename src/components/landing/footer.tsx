'use client';
import { Instagram, Youtube, Twitter } from "lucide-react";
import Link from 'next/link';
import { useI18n } from "@/lib/i18n";

export function Footer() {
    const { t } = useI18n();
    return (
        <footer className="border-t border-border/40 py-8 animate-fade-in-up">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <span className="font-bold text-lg bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text">ViralBe.ai</span>
                    <p className="text-sm text-muted-foreground">{t('footer.copy')}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground">{t('footer.terms')}</Link>
                    <Link href="#" className="hover:text-foreground">{t('footer.privacy')}</Link>
                    <Link href="#" className="hover:text-foreground">{t('footer.contact')}</Link>
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
