
'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    name: 'Grátis',
    description: 'Para quem está começando',
    monthlyPrice: 0,
    features: [
      '3 gerações de roteiro/mês',
      "Análise de até 10 vídeos",
      'Suporte via comunidade',
    ],
    cta: 'Começar Agora',
    href: "https://viralbeai.vercel.app/",
  },
  {
    name: 'Pro',
    description: 'Para criadores de conteúdo',
    monthlyPrice: 49,
    annualPrice: 499,
    features: [
      'Gerações de roteiro ilimitadas',
      'Análises de vídeos ilimitadas',
      'Roteiros para vídeos longos',
      'Suporte prioritário via chat',
      "Sem marca d'água",
    ],
    isPopular: true,
    cta: 'Assinar o Pro',
    href: "https://buy.stripe.com/eVqbIUfqy1RC12UchO7EQ00"
  },
  {
    name: 'Business',
    description: 'Para agências e marcas',
    monthlyPrice: 99,
    annualPrice: 999,
    features: [
      'Tudo do plano Pro',
      'Múltiplos usuários',
      'Dashboard de performance',
      'API de integração',
      'Gerente de contas dedicado',
    ],
    cta: 'Fale Conosco',
    href: "https://wa.me/5511978646907?text=Tenho%20interesse%20no%20plano%20Business%20do%20ViralBe.ai"
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Planos flexíveis para todos os níveis</h2>
          <p className="mt-4 text-muted-foreground">Do iniciante ao profissional, temos o plano perfeito para você viralizar.</p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
            <Label htmlFor="billing-cycle">Mensal</Label>
            <Switch
                id="billing-cycle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
            />
            <Label htmlFor="billing-cycle">Anual</Label>
            <div className="ml-2 bg-accent/20 text-accent font-semibold text-xs px-2 py-1 rounded-full border border-accent/50">
                Economize 15%
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'flex flex-col relative transition-all hover:-translate-y-2 bg-card/50 backdrop-blur-lg border border-white/10',
                plan.isPopular ? 'border-primary/50 shadow-primary/20' : 'hover:border-primary/50 hover:shadow-primary/20'
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold border border-primary-foreground/20">
                        Mais Popular
                    </div>
                </div>
              )}
              <CardHeader className="pt-12">
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-foreground/80 h-10">{plan.description}</CardDescription>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    R$
                    {isYearly && plan.annualPrice
                      ? (plan.annualPrice / 12).toFixed(0)
                      : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                {isYearly && plan.annualPrice && (
                    <p className="text-xs text-muted-foreground">
                        Cobrado R${plan.annualPrice} anualmente
                    </p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild variant={plan.isPopular ? 'default' : 'outline'}>
                  <Link href={plan.href} target="_blank">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
