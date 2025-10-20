import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Scissors, Download, Search, FileVideo, Sparkles } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Search,
    title: "Encontre um Viral",
    objection: "“Não sei o que está em alta”",
    answer: "Nós mostramos os vídeos com maior potencial.",
    description: "Pesquise por seu nicho e veja os vídeos que mais estão viralizando no momento para se inspirar.",
    image: {
      src: "https://i.imgur.com/aoPgzXZ.mp4",
      alt: "Tela de pesquisa de vídeos virais",
      hint: "search interface",
      type: "video"
    }
  },
  {
    icon: FileVideo,
    title: "Selecione um Vídeo",
    objection: "“E se não combinar com meu estilo?”",
    answer: "Você escolhe a base, nós adaptamos a magia.",
    description: "Escolha o vídeo que mais te agrada e que tem a ver com seu público. Ele será a base para sua nova criação.",
    image: {
      src: "https://i.imgur.com/F2ueVnD.mp4",
      alt: "Tela de seleção de vídeo",
      hint: "video selection",
      type: "video"
    }
  },
  {
    icon: Sparkles,
    title: "Receba seu Roteiro",
    objection: "“Preciso criar o roteiro do zero?”",
    answer: "Não. A IA cria um roteiro novo para você.",
    description: "Nossa IA analisa o vídeo selecionado e cria um roteiro 100% novo e aprimorado para você apenas gravar.",
    image: {
      src: "https://picsum.photos/seed/step3/600/400",
      alt: "Tela de exibição do roteiro gerado por IA",
      hint: "AI script"
    }
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Como usar em 3 passos</h2>
          <p className="mt-4 text-muted-foreground">O processo é tão simples que parece mágica. Transforme inspiração em conteúdo viral em minutos.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border border-white/10 transition-all hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full border border-primary/20">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <div className="relative aspect-video rounded-md overflow-hidden mb-4 border border-border">
                  {(step.image as any).type === 'video' ? (
                    <video
                      src={step.image.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Image 
                      src={step.image.src} 
                      alt={step.image.alt} 
                      fill 
                      className="object-cover"
                      data-ai-hint={step.image.hint}
                    />
                  )}
                </div>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="mt-auto bg-muted/30 p-4 rounded-lg border border-border">
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
