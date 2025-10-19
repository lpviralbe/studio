import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqs = [
    {
        question: "Preciso ser criativo para usar?",
        answer: "De jeito nenhum! O ViralBe.AI foi feito exatamente para quem não se considera criativo. Nossa IA gera as ideias e os roteiros para você, eliminando o bloqueio criativo."
    },
    {
        question: "Funciona para TikTok, Reels, YouTube e X (Twitter)?",
        answer: "Sim! Geramos conteúdos otimizados para os formatos de vídeo curto (TikTok, Reels, Shorts) e também para posts mais longos no YouTube e textos para o X (antigo Twitter)."
    },
    {
        question: "Posso editar os roteiros antes de publicar?",
        answer: "Com certeza. Todos os roteiros e ideias são 100% editáveis. Você pode ajustar o tom, adicionar suas próprias piadas ou informações, e deixar o conteúdo com a sua cara."
    },
    {
        question: "Como funciona o período grátis?",
        answer: "Você tem direito a 3 gerações de conteúdo (ideias e roteiros) totalmente grátis, sem precisar cadastrar cartão de crédito. É uma forma de você testar e ver o valor na prática."
    },
    {
        question: "Tem suporte e tutoriais?",
        answer: "Sim. Oferecemos uma base de conhecimento com tutoriais e exemplos, e os assinantes do plano Pro contam com suporte prioritário via chat e e-mail para qualquer dúvida."
    }
]

export function Faq() {
    return (
        <section id="faq" className="py-20 md:py-32">
            <div className="container max-w-3xl mx-auto animate-fade-in-up">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Perguntas Frequentes</h2>
                    <p className="mt-4 text-muted-foreground">Tudo o que você precisa saber antes de começar a viralizar.</p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-12">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
