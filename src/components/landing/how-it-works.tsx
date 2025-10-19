import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Scissors, Download } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    title: "Digite seu nicho",
    objection: "“Não sou criativo”",
    answer: "Tudo bem, a IA gera ideias para você.",
    description: "Basta inserir o tema do seu conteúdo e nossa IA entrega dezenas de ideias virais em segundos."
  },
  {
    icon: Scissors,
    title: "Escolha um roteiro",
    objection: "“E se não combinar com meu estilo?”",
    answer: "Templates personalizáveis: ajuste tom e duração em 1 clique.",
    description: "Selecione a ideia que mais gostar e personalize o roteiro, tom de voz e duração para se alinhar perfeitamente com sua marca."
  },
  {
    icon: Download,
    title: "Baixe ou publique",
    objection: "“Preciso de formatos diferentes?”",
    answer: "Gera formatos otimizados para cada rede.",
    description: "Exporte seu conteúdo final nos formatos ideais para Reels, TikTok, Shorts e mais. Pronto para viralizar."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Como usar em 3 passos</h2>
          <p className="mt-4 text-muted-foreground">O processo é tão simples que parece mágica. Transforme suas ideias em conteúdo viral em minutos.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border border-white/10 transition-all hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/20">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-muted-foreground">{step.description}</p>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
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
