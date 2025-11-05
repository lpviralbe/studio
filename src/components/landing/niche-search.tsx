'use client';
import { FlowButton } from '@/components/ui/flow-button';
import { useI18n } from '@/lib/i18n';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { SurveyForm } from './survey-form';

export function NicheSearch() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <FlowButton text={t('nicheSearch.button')} className="px-10 py-5 text-xl" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
          <SurveyForm onFinished={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
