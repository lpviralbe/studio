'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Users, BrainCircuit, Target, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FlowButton } from "../ui/flow-button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SurveyForm } from "./survey-form";
import { useState } from "react";

export function Objections() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const objectionsList = [
    {
      icon: Zap,
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
      icon: BrainCircuit,
      question: t('objections.o4.question'),
      answer: t('objections.o4.answer'),
    },
    {
      icon: Target,
      question: t('objections.o5.question'),
      answer: t('objections.o5.answer'),
    },
    {
      icon: Star,
      question: t('objections.o6.question'),
      answer: t('objections.o6.answer'),
    },
  ];

  return (
    <section id="objections" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto animate-fade-in-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-3xl md:text-5xl font-bold font-headline">
            {t('objections.title')}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl">
            {t('objections.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectionsList.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border-white/10 flex flex-col p-6 text-left">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full border border-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold">{item.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.answer}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-primary font-semibold">{t('objections.supertitle')}</p>
            <h3 className="text-2xl md:text-4xl font-bold font-headline max-w-3xl mx-auto mt-2">
                {t('objections.cta.title')}
            </h3>
            <p className="mt-4 text-center mx-auto max-w-2xl text-lg text-muted-foreground">
              {t('objections.cta.description')}
            </p>
            <div className="mt-8 flex justify-center">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <FlowButton text={t('nicheSearch.button')} className="px-10 py-5 text-xl" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0">
                    <SurveyForm onFinished={() => setOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
        </div>
      </div>
    </section>
  )
}
