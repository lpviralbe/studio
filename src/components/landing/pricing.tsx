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
        isPopular: true,
        cta: "Assinar Pro",
        href: "https://viralbeai.vercel.app/"
    }
]

export function Pricing() {
    return (
        <section id="pricing" className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Plano e Preços</h2>
                    <p className="mt-4 text-muted-foreground">Acesso completo para transformar suas ideias em conteúdo viral.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto items-stretch">
                    {plans.map(plan => (
                        <Card key={plan.name} className={`flex flex-col relative ${plan.isPopular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                            {plan.isPopular && (
                                <div className="py-1 px-4 bg-primary text-primary-foreground text-sm font-semibold rounded-t-lg text-center">
                                    Mais Vendido
                                </div>
                            )}
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <div>
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.priceDetails}</span>
                                </div>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-4">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.isPopular ? 'default' : 'outline'} asChild>
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
