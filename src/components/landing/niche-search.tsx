'use client';
import { FlowButton } from '@/components/ui/flow-button';
import { useI18n } from '@/lib/i18n';
import React from 'react';

export function NicheSearch() {
  const { t } = useI18n();

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center mt-12">
      <div className="flex justify-center mb-6">
          
      </div>
    </div>
  );
}
