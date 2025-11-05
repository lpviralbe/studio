'use client';
import { useI18n } from '@/lib/i18n';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FlowButton } from '../ui/flow-button';

interface SurveyFormProps {
    onFinished: () => void;
}

export function SurveyForm({ onFinished }: SurveyFormProps) {
    const { t } = useI18n();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleRedirect = () => {
        window.open('https://viralbeai.vercel.app/', '_blank');
        onFinished();
    };

    const questions = [
        {
            key: 'challenge',
            type: 'textarea',
            question: t('survey.q1.question'),
            placeholder: t('survey.q1.placeholder'),
        },
        {
            key: 'results',
            type: 'radio',
            question: t('survey.q2.question'),
            options: [
                { value: 'improve', label: t('survey.q2.o1') },
                { value: 'sometimes', label: t('survey.q2.o2') },
                { value: 'no', label: t('survey.q2.o3') },
            ],
        },
        {
            key: 'time',
            type: 'radio',
            question: t('survey.q3.question'),
            options: [
                { value: '<15min', label: t('survey.q3.o1') },
                { value: '30-60min', label: t('survey.q3.o2') },
                { value: '>1hour', label: t('survey.q3.o3') },
                { value: 'depends', label: t('survey.q3.o4') },
            ],
        },
        {
            key: 'lost_client',
            type: 'radio',
            question: t('survey.q4.question'),
            options: [
                { value: 'yes', label: t('survey.q4.o1') },
                { value: 'almost', label: t('survey.q4.o2') },
                { value: 'not_yet', label: t('survey.q4.o3') },
            ],
        },
        {
            key: 'ai_help',
            type: 'radio',
            question: t('survey.q5.question'),
            options: [
                { value: 'ideas', label: t('survey.q5.o1') },
                { value: 'time', label: t('survey.q5.o2') },
                { value: 'results', label: t('survey.q5.o3') },
                { value: 'all', label: t('survey.q5.o4') },
            ],
        },
        {
            key: 'test_now',
            type: 'radio',
            question: t('survey.q6.question'),
            options: [
                { value: 'yes', label: t('survey.q6.o1') },
                { value: 'examples', label: t('survey.q6.o2') },
                { value: 'doubt', label: t('survey.q6.o3') },
            ],
        },
    ];

    const totalSteps = questions.length;
    const progress = ((currentStep + 1) / (totalSteps + 1)) * 100;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleAnswerChange = (key: string, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
    };

    const currentQuestion = questions[currentStep];
    const isLastStep = currentStep === totalSteps;

    return (
        <div className="flex flex-col h-full bg-card text-card-foreground p-6 rounded-lg">
            {!isLastStep && (
                 <div className="text-center mb-4">
                    <h2 className="text-xl font-headline font-semibold">{t('survey.title')}</h2>
                    <p className="text-muted-foreground text-sm mt-1">{t('survey.description')}</p>
                 </div>
            )}

            <Progress value={progress} className="w-full mb-6" />

            <div className="flex-grow">
                {isLastStep ? (
                    <div className="text-center flex flex-col items-center justify-center h-full animate-fade-in-up">
                        <h3 className="text-2xl font-bold font-headline text-primary mb-4">{t('survey.final.title')}</h3>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">{t('survey.final.description')}</p>
                         <div className="mt-8">
                            <FlowButton text={t('survey.final.button')} onClick={handleRedirect} />
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <h3 className="text-lg font-semibold mb-4 text-center">{currentQuestion.question}</h3>
                        {currentQuestion.type === 'textarea' && (
                            <Textarea
                                value={answers[currentQuestion.key] || ''}
                                onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
                                placeholder={currentQuestion.placeholder}
                                className="min-h-[100px]"
                            />
                        )}
                        {currentQuestion.type === 'radio' && (
                            <RadioGroup
                                value={answers[currentQuestion.key]}
                                onValueChange={(value) => handleAnswerChange(currentQuestion.key, value)}
                                className="space-y-2"
                            >
                                {currentQuestion.options.map(option => (
                                    <div key={option.value} className="flex items-center space-x-2 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors">
                                        <RadioGroupItem value={option.value} id={`${currentQuestion.key}-${option.value}`} />
                                        <Label htmlFor={`${currentQuestion.key}-${option.value}`} className="flex-1 cursor-pointer">{option.label}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        )}
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center mt-6">
                <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('survey.back')}
                </Button>
                {!isLastStep && (
                     <Button onClick={handleNext} disabled={!answers[currentQuestion.key]}>
                        {t('survey.next')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
