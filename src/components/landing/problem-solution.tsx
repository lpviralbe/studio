'use client';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, Copy, Video } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProblemSolution() {
  const { t } = useI18n();

  const features = [
    {
      icon: Copy,
      title: t('problemSolution.feature1.title'),
      description: t('problemSolution.feature1.description'),
    },
    {
      icon: Video,
      title: t('problemSolution.feature2.title'),
      description: t('problemSolution.feature2.description'),
    },
    {
      icon: Zap,
      title: t('problemSolution.feature3.title'),
      description: t('problemSolution.feature3.description'),
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-transparent">
        <div className="container max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    {t('problemSolution.title')}
                </h2>
                <p className="mt-4 text-muted-foreground">
                    {t('problemSolution.description')}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/10 text-left">
                        <CardHeader>
                            <div className="bg-primary/10 p-3 rounded-full w-fit border border-primary/20">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <p 
              className="mt-16 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text"
            >{t('problemSolution.tagline')}</p>
      </div>
    </section>
  );
}
