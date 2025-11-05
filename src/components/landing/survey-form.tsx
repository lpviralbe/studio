'use client';
import { useI18n } from '@/lib/i18n';
import React from 'react';
import { FlowButton } from '../ui/flow-button';

interface SurveyFormProps {
    onFinished: () => void;
}

export function SurveyForm({ onFinished }: SurveyFormProps) {
    const { t } = useI18n();

    const handleRedirect = () => {
        window.open('https://forms.gle/6iEWxar8JnYmknkK6', '_blank');
        onFinished();
    };

    return (
        <div className="flex flex-col h-full bg-card text-card-foreground p-8 rounded-lg text-center items-center">
             <div className="text-center mb-6 animate-fade-in-up">
                <h2 className="text-2xl font-headline font-semibold mb-2">{t('survey.popup_title')}</h2>
                <p className="text-muted-foreground text-base max-w-md mx-auto">{t('survey.popup_description')}</p>
             </div>
             <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <FlowButton text={t('survey.popup_button')} onClick={handleRedirect} />
            </div>
        </div>
    );
}
