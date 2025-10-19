import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqs = [
    {
        question: "Preciso ter ideias para usar o ViralBe.AI?",
        answer: "Não! A grande vantagem é que você não precisa de ideias. Basta pesquisar seu nicho, encontrar um vídeo que já é viral e nós criamos um roteiro novo e melhorado para você."
    },
    {
        question: "A IA vai copiar o vídeo de outra pessoa?",
        answer: "De forma alguma. A IA usa o vídeo selecionado apenas como inspiração para entender a estrutura e o tema. O roteiro gerado é 100% original e pronto para você gravar com seu estilo."
    },
    {
        question: "Funciona para qualquer nicho?",
        answer: "Sim! De finanças a games, de beleza a programação. Se existe conteúdo em vídeo no seu nicho, nossa ferramenta pode encontrar os virais e te ajudar a criar sua versão."
    },
    {
        question: "Como funciona o período grátis?",
        answer: "Você tem direito a 3 gerações de roteiros totalmente grátis, sem precisar cadastrar cartão de crédito. É a melhor forma de você testar e ver o poder da ferramenta na prática."
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
