'use server';

/**
 * @fileOverview A flow to generate authentic user testimonials in Portuguese.
 *
 * - generateAuthenticTestimonials - A function that generates realistic-sounding user testimonials.
 * - GenerateAuthenticTestimonialsInput - The input type for the generateAuthenticTestimonials function.
 * - GenerateAuthenticTestimonialsOutput - The return type for the generateAuthenticTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAuthenticTestimonialsInputSchema = z.object({
  numberOfTestimonials: z
    .number()
    .describe('The number of testimonials to generate.')
    .default(4),
  niche: z.string().describe('The niche for which to generate testimonials.'),
});
export type GenerateAuthenticTestimonialsInput = z.infer<
  typeof GenerateAuthenticTestimonialsInputSchema
>;

const GenerateAuthenticTestimonialsOutputSchema = z.object({
  testimonials: z.array(
    z.object({
      name: z.string().describe('The name of the testimonial author.'),
      handle: z.string().describe('The social media handle of the author.'),
      network: z.string().describe('The social media network of the author.'),
      photoUrl: z.string().describe('URL of the testimonial author photo.'),
      text: z.string().describe('The testimonial text.'),
    })
  ),
});

export type GenerateAuthenticTestimonialsOutput = z.infer<
  typeof GenerateAuthenticTestimonialsOutputSchema
>;

export async function generateAuthenticTestimonials(
  input: GenerateAuthenticTestimonialsInput
): Promise<GenerateAuthenticTestimonialsOutput> {
  return generateAuthenticTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAuthenticTestimonialsPrompt',
  input: {
    schema: GenerateAuthenticTestimonialsInputSchema,
  },
  output: {
    schema: GenerateAuthenticTestimonialsOutputSchema,
  },
  prompt: `Você é um especialista em marketing e sabe como criar depoimentos autênticos e persuasivos. Escreva {{numberOfTestimonials}} depoimentos em português (pt-BR) para o SaaS ViralBe.AI, que ajuda influencers e criadores de conteúdo a crescerem rapidamente em qualquer rede social. Os depoimentos devem ser variados por nicho ({{niche}}). Cada depoimento deve incluir:

*   Um nome completo.
*   Um handle de rede social.
*   A rede social utilizada.
*   Uma URL de foto de perfil.
*   O texto do depoimento, que deve soar realista e mencionar resultados positivos obtidos com o ViralBe.AI (ex: crescimento rápido, economia de tempo, facilidade de uso).

Certifique-se de que os depoimentos abordem diferentes casos de sucesso e benefícios do ViralBe.AI. Formate a saída como um objeto JSON que corresponde ao GenerateAuthenticTestimonialsOutputSchema.`,
});

const generateAuthenticTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateAuthenticTestimonialsFlow',
    inputSchema: GenerateAuthenticTestimonialsInputSchema,
    outputSchema: GenerateAuthenticTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
