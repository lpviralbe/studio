import { TextRotate } from "@/components/ui/text-rotate";

export function ProblemSolution() {
  const rotatingTexts = [
    "Pare de postar no escuro.",
    "Copie o que já funciona e saia na frente.",
    "Transforme minutos em vídeos que o algoritmo ama.",
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-3xl mx-auto text-center animate-fade-in-up">
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Chega de perder tempo tentando entender o algoritmo. Nossa IA vasculha os vídeos que mais explodem no seu nicho e transforma tudo em roteiros prontos pra gravar — feitos pra prender atenção e gerar engajamento real.
        </p>
        
        <div className="font-headline text-2xl md:text-3xl font-bold text-foreground my-8 h-24 md:h-10 flex items-center justify-center">
            <span className="mr-2">🔥</span>
            <TextRotate texts={rotatingTexts} />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mt-8">
          Você pode continuar testando às cegas...<br/>
          ou deixar a IA te entregar o que já tá dando certo — e finalmente começar a viralizar de verdade.
        </p>

        <p className="mt-12 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-400 to-accent text-transparent bg-clip-text">
            ⚡ Não espere o próximo viral — crie o seu.
        </p>
      </div>
    </section>
  );
}
