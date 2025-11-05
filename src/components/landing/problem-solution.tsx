'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProblemSolution() {
  const { t } = useI18n();

  const features = [
    {
      title: t('problemSolution.feature1.title'),
    },
    {
      title: t('problemSolution.feature2.title'),
    },
    {
      title: t('problemSolution.feature3.title'),
    },
    {
      title: t('problemSolution.feature4.title'),
    },
    {
      title: t('problemSolution.feature5.title'),
    },
    {
      title: t('problemSolution.feature6.title'),
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-transparent">
        <div className="container max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    {t('problemSolution.title')}
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                    {t('problemSolution.description')}
                </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-white/10 text-left p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold font-headline mb-4">{t('problemSolution.solutionTitle')}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{t('problemSolution.solutionDescription')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="bg-green-500/10 p-1 rounded-full mt-1 border border-green-500/30">
                                <Check className="h-4 w-4 text-green-400" />
                            </div>
                            <p className="text-foreground/90">{feature.title}</p>
                        </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <p 
              className="mt-16 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text"
            >{t('problemSolution.tagline')}</p>
      </div>
    </section>
  );
}
