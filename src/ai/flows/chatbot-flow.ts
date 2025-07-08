'use server';
/**
 * @fileOverview A chatbot for Oliver Valenzuela's portfolio site.
 *
 * - chatbotFlow - A function that handles chat conversations about Oliver and How2 Studio.
 * - ChatbotFlowInput - The input type for the chatbotFlow function.
 * - ChatbotFlowOutput - The return type for the chatbotFlow function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotHistorySchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const ChatbotFlowInputSchema = z.object({
  query: z.string().describe("The user's latest message to the chatbot."),
  history: z
    .array(ChatbotHistorySchema)
    .describe('The history of the conversation so far.'),
});
export type ChatbotFlowInput = z.infer<typeof ChatbotFlowInputSchema>;

export const ChatbotFlowOutputSchema = z.object({
  response: z.string().describe("The chatbot's response to the user query."),
  suggestions: z
    .array(z.string())
    .describe(
      'A list of up to 3 relevant follow-up questions for the user.'
    ),
});
export type ChatbotFlowOutput = z.infer<typeof ChatbotFlowOutputSchema>;

export async function chatbotFlow(
  input: ChatbotFlowInput
): Promise<ChatbotFlowOutput> {
  return chatbotFlowImpl(input);
}

const KNOWLEDGE_BASE = `
**1. ABOUT OLIVER**
- Q: Who is Oliver Valenzuela?
- A: Oliver Valenzuela is a creative learning strategist with over 16 years of experience in instructional design, learning leadership, and performance consulting. He’s worked with companies across industries to design high-impact learning experiences that actually drive results.

- Q: What’s his background?
- A: Oliver began his career as a facilitator and quickly grew into designing large-scale learning programs—from onboarding to leadership development. He’s led training teams, built certification programs, and helped global clients create smarter, more human learning solutions.

- Q: Where is he based?
- A: Oliver is based in Guatemala, but he works with clients all over the world remotely.

- Q: What’s his working style?
- A: Collaborative, fast-paced, and impact-driven. Oliver combines strategy, design, and tech to make sure learning isn’t just pretty—but effective and aligned with business goals.

**2. SERVICES & EXPERTISE**
- Q: What services does he offer?
- A: Oliver offers a full range of learning design services—from needs assessment and storyboarding to full course development, onboarding journeys, simulations, and interactive tools. He also advises on performance improvement and learning strategy.
- Follow-up Suggestions: "What kind of learning tools does he use?", "Does he build eLearning content?", "Can he help with LMS setup?"

- Q: What industries has he worked with?
- A: Healthcare, financial services, tech, education, legal, government, customer service, BPO, and retail. His work adapts well across sectors because it's focused on performance outcomes.

- Q: What authoring tools does he use?
- A: Oliver works with Articulate 360 (Storyline, Rise), Adobe Captivate, Canva, Mindsmith, and Adobe Creative Suite (Photoshop, Illustrator). He also uses JavaScript for custom interactions and prototypes.

- Q: What LMS platforms is he familiar with?
- A: He’s experienced with Canvas, Bridge, TalentLMS, Moodle, LMS360, and custom LMS deployments. He’s helped teams set up, manage, and optimize their LMS environments.

- Q: Does he do performance consulting?
- A: Yes. Oliver often starts with a performance-first mindset—looking at business goals and learner behavior before designing any learning. He’s helped companies reduce time to competency, improve QA metrics, and build better coaching systems.

**3. PROJECTS & PORTFOLIO**
- Q: Where can I see his work?
- A: You can check out the Portfolio section right here on the site. It features three interactive samples that showcase different styles of learning design.
- Follow-up Suggestion: "Show me a sample", "The Empathy Call", "Work Smart", "EcoSort Challenge"

- Q: What is “The Empathy Call”?
- A: It’s an interactive simulation that puts learners in the shoes of a customer support agent. They handle a login issue while managing tone, empathy, and problem-solving—all in real time.

- Q: What is “Work Smart”?
- A: A short, visual microlearning that teaches small desk and habit changes to improve focus and reduce stress. It’s designed for busy professionals and takes less than 5 minutes.

- Q: What is “EcoSort Challenge”?
- A: A gamified drag-and-drop experience that teaches users how to properly sort recyclables. It’s fast, fun, and reinforces environmental compliance habits.

**4. ABOUT HOW2 STUDIO**
- Q: What is How2 Studio?
- A: How2 Studio is Oliver’s startup. It’s a creative agency that blends learning design, technology, and storytelling. They build scalable learning solutions, simulations, and even apps and websites.

- Q: What does How2 Studio do?
- A: How2 Studio has two divisions: Learning Solutions and Digital Solutions. The Learning team builds courses, simulations, onboarding paths, and upskilling programs. The Digital team creates websites, mobile apps, and custom software—often for learning or enablement purposes.

- Q: Who’s part of the How2 Studio team?
- A: A small but mighty team of instructional designers, developers, creatives, and technologists. Oliver leads the strategy, but the studio delivers full-service execution when needed.

- Q: Can I work with the studio instead of just Oliver?
- A: Absolutely. If you’re looking for something larger or ongoing, How2 Studio can scale up with a full team to support your goals.

- Q: What kind of apps or tools has the studio built?
- A: They’ve developed AI-powered QA tools, learning platforms, emotional support apps for kids, gamified experiences, and secure transcription platforms. Everything is custom-built around user needs.

**5. CONTACT & COLLABORATION**
- Q: How can I get in touch with Oliver?
- A: You can reach him via Email at oliver.andere@gmail.com, or on WhatsApp at +502 3050 8344. You can also visit the studio website at howw2.com.

- Q: Can I hire him for a freelance project?
- A: Yes. Oliver works solo or with his studio depending on the size and scope of the project.

- Q: Does he take short-term projects?
- A: Definitely. From a single module to a 3-month rollout, Oliver’s flexible and happy to discuss the right fit.

- Q: Can he help with both design and tech?
- A: Yes. That’s one of his specialties—bringing together instructional design, visual design, and digital development into a single experience.
`;

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: z.object({query: z.string(), history: z.string()})},
  output: {schema: ChatbotFlowOutputSchema},
  prompt: `You are a friendly, professional chatbot for Oliver Valenzuela's portfolio site. Your goal is to answer visitor questions based ONLY on the information provided in the KNOWLEDGE BASE.

If you don't know the answer, respond with "I'm sorry, I don't have information about that. You can try asking about Oliver's background, services, or How2 Studio." and suggest 3 general questions like "What's Oliver's background?", "See a sample project", and "What's How2 Studio?".

Keep your answers concise and conversational.

After providing an answer, suggest up to three relevant follow-up questions based on the user's query and the knowledge base. The suggestions should be questions the user might ask next.

**KNOWLEDGE BASE START**
${KNOWLEDGE_BASE}
**KNOWLEDGE BASE END**

---
Here is the conversation history:
{{{history}}}

---
Based on the history and the knowledge base, answer the following user query and provide suggestions for the next turn.

User Query: {{{query}}}
`,
});

const chatbotFlowImpl = ai.defineFlow(
  {
    name: 'chatbotFlowImpl',
    inputSchema: ChatbotFlowInputSchema,
    outputSchema: ChatbotFlowOutputSchema,
  },
  async input => {
    const formattedHistory = input.history
      .map(msg => `${msg.role === 'model' ? 'Bot' : 'User'}: ${msg.content}`)
      .join('\n');

    const {output} = await prompt({
      query: input.query,
      history: formattedHistory,
    });
    return output!;
  }
);
