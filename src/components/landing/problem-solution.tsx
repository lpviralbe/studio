'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ProblemSolution() {
  const { t } = useI18n();

  const features = [
    {
      title: 'problemSolution.feature1',
    },
    {
      title: 'problemSolution.feature2',
    },
    {
      title: 'problemSolution.feature3',
    },
    {
      title: 'problemSolution.feature4',
    },
    {
      title: 'problemSolution.feature5',
    },
    {
      title: 'problemSolution.feature6',
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white text-gray-900">
        <div className="container max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-headline">
                    {t('problemSolution.title')}
                </h2>
                <p className="mt-4 text-gray-600 text-lg md:text-xl">
                    {t('problemSolution.description')}
                </p>
            </div>

            <Card className="bg-gray-50/50 backdrop-blur-sm border-gray-200/50 text-left p-6 md:p-8">
              <CardContent className="p-0">
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-4 text-center">{t('problemSolution.solutionTitle')}</h3>
                <p className="text-gray-600 mb-8 text-base md:text-lg text-center max-w-2xl mx-auto">{t('problemSolution.solutionDescription')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="bg-green-500/10 p-1 rounded-full mt-1 border border-green-500/30">
                                <Check className="h-4 w-4 text-green-500" />
                            </div>
                            <p className="text-gray-800">{t(feature.title)}</p>
                        </div>
                    ))}
                </div>
              </CardContent>
            </Card>
      </div>
    </section>
  );
}
