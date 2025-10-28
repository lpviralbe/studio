"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
  isPopular: boolean;
  priceNote: string;
}

export function Pricing() {
  const { t } = useI18n();

  const plans: PricingPlan[] = [
    {
      name: t('pricing.free.name'),
      price: "0",
      period: t('pricing.monthly'),
      description: t('pricing.free.description'),
      features: [
        t('pricing.free.feature1'),
        t('pricing.free.feature2'),
        t('pricing.free.feature3'),
      ],
      buttonText: t('pricing.free.button'),
      href: "https://viralbeai.vercel.app/",
      isPopular: false,
      priceNote: t('pricing.free.priceNote'),
    },
    {
      name: t('pricing.pro.name'),
      price: "49",
      period: t('pricing.monthly'),
      description: t('pricing.pro.description'),
      features: [
        t('pricing.pro.feature1'),
        t('pricing.pro.feature2'),
        t('pricing.pro.feature3'),
        t('pricing.pro.feature4'),
        t('pricing.pro.feature5'),
      ],
      buttonText: t('pricing.pro.button'),
      href: "https://buy.stripe.com/00w00cguCeEofXO4Pm7EQ01",
      isPopular: true,
      priceNote: t('pricing.pro.priceNote'),
    },
  ];

  return (
    <div id="pricing" className="container py-20">
      <div className="text-center space-y-4 mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          {t('pricing.title')}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {t('pricing.description')}
        </p>
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
                  {t('pricing.popular')}
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col pt-6">
              <p className="text-xl font-semibold text-foreground font-headline">
                {plan.name}
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  R${plan.price}
                </span>
                
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                
              </div>

              <p className="text-xs leading-5 text-muted-foreground">
                {plan.priceNote}
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
