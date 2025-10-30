'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileVideo, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    {
      icon: Search,
      title: t('howItWorks.step1.title'),
      objection: t('howItWorks.step1.objection'),
      answer: t('howItWorks.step1.answer'),
      description: t('howItWorks.step1.description'),
      image: {
        src: "https://i.imgur.com/8o5j2d7.mp4",
        alt: "Tela de pesquisa de vídeos virais",
        hint: "search interface",
      }
    },
    {
      icon: FileVideo,
      title: t('howItWorks.step2.title'),
      objection: t('howItWorks.step2.objection'),
      answer: t('howItWorks.step2.answer'),
      description: t('howItWorks.step2.description'),
      image: {
        src: "https://i.imgur.com/I2Nq6v4.mp4",
        alt: "Tela de seleção de vídeo",
        hint: "video selection",
      }
    },
    {
      icon: Sparkles,
      title: t('howItWorks.step3.title'),
      objection: t('howItWorks.step3.objection'),
      answer: t('howItWorks.step3.answer'),
      description: t('howItWorks.step3.description'),
      image: {
        src: "https://i.imgur.com/KPG15s1.mp4",
        alt: "Tela de exibição do roteiro gerado por IA",
        hint: "AI script",
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">{t('howItWorks.title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('howItWorks.description')}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border border-white/10 transition-all hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/20">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl md:text-2xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <div className="relative aspect-video rounded-md overflow-hidden mb-4 border border-border">
                  <video 
                    src={step.image.src} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    data-ai-hint={step.image.hint}
                  />
                </div>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="mt-auto bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="font-semibold text-foreground/80">{step.objection}</p>
                  <p className="text-accent font-medium">{step.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
