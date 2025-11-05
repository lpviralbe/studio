'use client';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import { Users } from 'lucide-react';

export function TelegramButton() {
  const { t } = useI18n();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-full right-0 mb-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-background border border-border shadow-lg rounded-lg p-3 text-sm text-foreground text-center w-52">
            <p className="font-semibold">{t('telegram.title')}</p>
            <p className="text-xs text-muted-foreground">{t('telegram.description')}</p>
        </div>
      </div>
      <Link
        href="https://t.me/+HOU3IPKemCo2ZTNh"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0088cc] text-white p-3 rounded-full shadow-lg hover:bg-[#0077b3] transition-transform duration-300 ease-in-out hover:scale-110 flex items-center justify-center"
        aria-label="Join our Telegram group"
      >
        <Users className="h-8 w-8" />
      </Link>
    </div>
  );
}
