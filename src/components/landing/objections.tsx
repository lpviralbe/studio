'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FlowButton } from "../ui/flow-button";

export function Objections() {
  const { t } = useI18n();

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  const objectionsList = [
    {
      question: t('objections.o1.question'),
      answer: t('objections.o1.answer'),
    },
    {
      question: t('objections.o2.question'),
      answer: t('objections.o2.answer'),
    },
    {
      question: t('objections.o3.question'),
      answer: t('objections.o3.answer'),
    },
    {
      question: t('objections.o4.question'),
      answer: t('objections.o4.answer'),
    },
    {
      question: t('objections.o5.question'),
      answer: t('objections.o5.answer'),
    },
    {
      question: t('objections.o6.question'),
      answer: t('objections.o6.answer'),
    },
  ];

  return (
    <section id="objections" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {t('objections.title')}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t('objections.description')}
          </p>
          <p className="text-primary font-semibold mt-4">{t('objections.supertitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectionsList.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border-white/10 flex flex-col p-6 text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full border border-primary/20">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold">{item.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.answer}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-headline max-w-3xl mx-auto">
                {t('objections.cta.title')}
            </h3>
            <div className="mt-8 flex justify-center">
                <FlowButton
                    text={t('objections.cta.button')}
                    onClick={handleRedirect}
                />
            </div>
        </div>
      </div>
    </section>
  )
}
