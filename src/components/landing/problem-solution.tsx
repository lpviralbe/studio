import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, Copy, Video } from "lucide-react";

export function ProblemSolution() {
  const features = [
    {
      icon: Copy,
      title: "Copie o que já funciona",
      description: "Nossa IA analisa milhões de vídeos para encontrar os padrões que geram mais visualizações e engajamento no seu nicho.",
    },
    {
      icon: Video,
      title: "Roteiros prontos em minutos",
      description: "Receba roteiros completos, com ganchos, estrutura e CTAs otimizados, prontos para você gravar e postar.",
    },
    {
      icon: Zap,
      title: "Saia na frente da concorrência",
      description: "Enquanto outros testam às cegas, você usa dados para criar conteúdo que o algoritmo ama e seu público não consegue ignorar.",
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container max-w-5xl mx-auto text-center animate-fade-in-up">
        <div className="flex items-center justify-center font-headline text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="mr-2">Chega de postar no escuro</span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Você pode continuar testando às cegas ou deixar a IA te entregar o que já está dando certo — e finalmente começar a viralizar de verdade.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <p className="mt-16 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text">
            ⚡ Não espere o próximo viral — crie o seu.
        </p>
      </div>
    </section>
  );
}