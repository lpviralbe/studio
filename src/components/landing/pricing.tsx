"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const plans: PricingPlan[] = [
    {
      name: 'Grátis',
      price: "0",
      yearlyPrice: "0",
      period: 'mês',
      description: 'Para quem está começando a explorar o poder da IA.',
      features: [
        '3 gerações de roteiro/mês',
        "Análise de até 10 vídeos",
        'Suporte via comunidade',
      ],
      buttonText: 'Começar Agora',
      href: "https://viralbeai.vercel.app/",
      isPopular: false,
    },
    {
      name: 'Pro',
      price: "49",
      yearlyPrice: "499",
      period: 'mês',
      description: 'Para criadores de conteúdo que levam a sério o crescimento.',
      features: [
        'Gerações de roteiro ilimitadas',
        'Análises de vídeos ilimitadas',
        'Roteiros para vídeos longos',
        'Suporte prioritário via chat',
        "Sem marca d'água",
      ],
      buttonText: 'Assinar o Pro',
      href: "https://buy.stripe.com/eVqbIUfqy1RC12UchO7EQ00",
      isPopular: true,
    },
  ];
  

interface PricingProps {
  title?: string;
  description?: string;
}

export function Pricing({
  title = "Planos flexíveis para todos os níveis",
  description = "Do iniciante ao profissional, temos o plano perfeito para você viralizar.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div id="pricing" className="container py-20">
      <div className="text-center space-y-4 mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-10 animate-fade-in-up">
          <Label htmlFor="billing-cycle">Mensal</Label>
          <Switch
              id="billing-cycle"
              checked={!isMonthly}
              onCheckedChange={() => setIsMonthly(prev => !prev)}
              className="mx-4"
          />
          <Label htmlFor="billing-cycle">Anual</Label>
          <div className="ml-2 bg-accent/20 text-accent font-semibold text-xs px-2 py-1 rounded-full border border-accent/50">
              Economize 20%
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              `rounded-2xl border p-6 text-center lg:flex lg:flex-col lg:justify-center relative bg-card/50 backdrop-blur-lg`,
              plan.isPopular ? "border-primary border-2 shadow-primary/20 shadow-2xl" : "border-border",
              "flex flex-col",
              "transition-all hover:-translate-y-2",
               plan.isPopular ? "md:scale-1.05" : "scale-1.0"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 right-6 bg-primary py-1 px-3 rounded-full flex items-center shadow-lg">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground ml-1 font-sans font-semibold text-sm">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col pt-6">
              <p className="text-xl font-semibold text-foreground font-headline">
                {plan.name}
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  R${isMonthly ? plan.price : Math.round(Number(plan.yearlyPrice) / 12)}
                </span>
                
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                
              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                {isMonthly ? (plan.name === 'Grátis' ? 'Sempre grátis' : 'cobrado mensalmente') : (plan.name === 'Grátis' ? 'Sempre grátis' : `R$${plan.yearlyPrice} cobrado anualmente`)}
              </p>

              <ul className="mt-8 gap-3 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-left text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-8">
                <Link
                    href={plan.href}
                    target="_blank"
                    className={cn(
                        buttonVariants({
                        variant: plan.isPopular ? "default" : "outline",
                        }),
                        "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                        "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                         plan.isPopular ? "hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground"
                    )}
                    >
                    {plan.buttonText}
                </Link>
                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                    {plan.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
