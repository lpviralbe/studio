'use client';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path d="M9.78 18.65l.28-4.23 7.02-6.64c.38-.35.18-.94-.24-1.15-.4-.2-.83.01-.96.33l-5.73 6.94-4.14-1.46c-.45-.16-.9.13-.9.61 0 .26.12.5.32.65L9.78 18.65z" />
          <path d="M24 12c0 6.63-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0s12 5.37 12 12zm-12 10c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
        </svg>
      </Link>
    </div>
  );
}
