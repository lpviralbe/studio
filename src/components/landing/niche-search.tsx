'use client';
import { FlowButton } from '@/components/ui/flow-button';
import { useI18n } from '@/lib/i18n';

export function NicheSearch() {
  const { t } = useI18n();

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-6">
          <FlowButton
            text={t('nicheSearch.button')}
            onClick={handleRedirect}
          />
      </div>
    </div>
  );
}
