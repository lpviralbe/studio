import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

const plans = [
    {
        name: "Pro",
        price: "Planos",
        priceDetails: "flexíveis",
        description: "Para criadores que querem crescer de verdade.",
        features: [
            "Ideias de conteúdo ilimitadas",
            "Roteiros longos e detalhados",
            "Todos os templates Premium",
            "Sem marca d'água",
            "Suporte prioritário via chat"
        ],
        isPopular: false,
        cta: "Assinar Pro",
        href: "https://viralbeai.vercel.app/"
    }
]

export function Pricing() {
    return (
        <section id="pricing" className="py-20 md:py-32">
            <div className="container animate-fade-in-up">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Plano e Preços</h2>
                    <p className="mt-4 text-muted-foreground">Acesso completo para transformar suas ideias em conteúdo viral.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8 max-w-lg mx-auto items-stretch">
                    {plans.map(plan => (
                        <Card key={plan.name} className="flex flex-col relative transition-all hover:-translate-y-2 bg-card/50 backdrop-blur-lg border border-white/10 hover:border-primary/50 hover:shadow-primary/20">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                                <div>
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground"> {plan.priceDetails}</span>
                                </div>
                                <CardDescription className="text-foreground/80">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-4 text-center">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center justify-center gap-2">
                                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" asChild>
                                    <Link href={plan.href} target="_blank">{plan.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
