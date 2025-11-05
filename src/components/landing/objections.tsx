'use client';
import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Check, Clock, Users, Bot, Target, BrainCircuit } from "lucide-react";
import { FlowButton } from "../ui/flow-button";

export function Objections() {
  const { t } = useI18n();

  const objectionsList = [
    {
      icon: Target,
      question: t('objections.o1.question'),
      answer: t('objections.o1.answer'),
    },
    {
      icon: Clock,
      question: t('objections.o2.question'),
      answer: t('objections.o2.answer'),
    },
    {
      icon: Users,
      question: t('objections.o3.question'),
      answer: t('objections.o3.answer'),
    },
    {
      icon: Bot,
      question: t('objections.o4.question'),
      answer: t('objections.o4.answer'),
    },
    {
      icon: Check,
      question: t('objections.o5.question'),
      answer: t('objections.o5.answer'),
    },
    {
      icon: BrainCircuit,
      question: t('objections.o6.question'),
      answer: t('objections.o6.answer'),
    },
  ];

  const handleRedirect = () => {
    window.open('https://viralbeai.vercel.app/', '_blank');
  };

  return (
    <section id="objections" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">{t('objections.supertitle')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {t('objections.title')}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t('objections.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectionsList.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border-white/10 flex flex-col p-6 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
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
