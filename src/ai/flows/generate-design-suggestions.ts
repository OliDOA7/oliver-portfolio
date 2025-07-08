// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview AI-powered design layout suggestions for projects.
 *
 * - generateDesignSuggestions - A function that provides design layout suggestions based on project description keywords.
 * - GenerateDesignSuggestionsInput - The input type for the generateDesignSuggestions function.
 * - GenerateDesignSuggestionsOutput - The return type for the generateDesignSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignSuggestionsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project to generate design suggestions for.'),
});
export type GenerateDesignSuggestionsInput = z.infer<
  typeof GenerateDesignSuggestionsInputSchema
>;

const GenerateDesignSuggestionsOutputSchema = z.object({
  designSuggestions: z
    .string()
    .describe(
      'A list of design layout suggestions based on the project description keywords.'
    ),
});
export type GenerateDesignSuggestionsOutput = z.infer<
  typeof GenerateDesignSuggestionsOutputSchema
>;

export async function generateDesignSuggestions(
  input: GenerateDesignSuggestionsInput
): Promise<GenerateDesignSuggestionsOutput> {
  return generateDesignSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDesignSuggestionsPrompt',
  input: {schema: GenerateDesignSuggestionsInputSchema},
  output: {schema: GenerateDesignSuggestionsOutputSchema},
  prompt: `You are an expert design assistant providing layout suggestions for projects.

  Based on the following project description, generate a list of design layout suggestions:

  Project Description: {{{projectDescription}}}

  Consider keywords and the overall theme of the project when making suggestions.
  Provide suggestions that are creative, visually appealing, and suitable for showcasing the project in a portfolio.
  Return a well-formatted list of suggestions that can be easily implemented.
  Design layout suggestions:`,
});

const generateDesignSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateDesignSuggestionsFlow',
    inputSchema: GenerateDesignSuggestionsInputSchema,
    outputSchema: GenerateDesignSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
