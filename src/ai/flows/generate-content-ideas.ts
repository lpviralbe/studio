'use server';

/**
 * @fileOverview An AI agent to generate content ideas and scripts based on a given niche.
 *
 * - generateContentIdeas - A function that handles the content idea generation process.
 * - GenerateContentIdeasInput - The input type for the generateContentIdeas function.
 * - GenerateContentIdeasOutput - The return type for the generateContentIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateContentIdeasInputSchema = z.object({
  niche: z.string().describe('The content niche for which to generate ideas, e.g., "fitness", "beauty", "finance".'),
});
export type GenerateContentIdeasInput = z.infer<typeof GenerateContentIdeasInputSchema>;

const GenerateContentIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of content ideas and scripts relevant to the given niche.'),
});
export type GenerateContentIdeasOutput = z.infer<typeof GenerateContentIdeasOutputSchema>;

export async function generateContentIdeas(input: GenerateContentIdeasInput): Promise<GenerateContentIdeasOutput> {
  return generateContentIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContentIdeasPrompt',
  input: {schema: GenerateContentIdeasInputSchema},
  output: {schema: GenerateContentIdeasOutputSchema},
  prompt: `You are an expert content creator and strategist. Generate 5 highly engaging content ideas and scripts for the following niche:

Niche: {{{niche}}}

Each idea should be concise, actionable, and suitable for platforms like TikTok, Reels, and YouTube. Focus on viral potential and current trends.

Output the content ideas in a numbered list.`,
});

const generateContentIdeasFlow = ai.defineFlow(
  {
    name: 'generateContentIdeasFlow',
    inputSchema: GenerateContentIdeasInputSchema,
    outputSchema: GenerateContentIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
