'use server';

/**
 * @fileOverview A flow to generate authentic user testimonials.
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
  prompt: `You are a marketing expert and you know how to create authentic and persuasive testimonials. Write {{numberOfTestimonials}} testimonials in English for the SaaS ViralBe.AI, which helps influencers and content creators grow quickly on any social network. The testimonials should be varied by niche ({{niche}}). Each testimonial must include:

*   A full name.
*   A social media handle.
*   The social network used.
*   A profile picture URL.
*   The testimonial text, which should sound realistic and mention positive results achieved with ViralBe.AI (e.g., rapid growth, time savings, ease of use).

Make sure the testimonials address different success stories and benefits of ViralBe.AI. Format the output as a JSON object that matches the GenerateAuthenticTestimonialsOutputSchema.`,
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
