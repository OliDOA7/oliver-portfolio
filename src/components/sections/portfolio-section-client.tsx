"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { generateDesignSuggestions } from '@/ai/flows/generate-design-suggestions';
import { Sparkles, Loader2, ServerCrash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const projects: Project[] = [
  {
    title: 'Interactive Sales Onboarding',
    description: 'A gamified e-learning module for new sales representatives. Focuses on product knowledge, sales techniques, and company culture. Includes interactive scenarios and quizzes.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'corporate training',
  },
  {
    title: 'Software Simulation Training',
    description: 'A step-by-step interactive simulation to train employees on a new proprietary software suite. Features guided walkthroughs and practice environments to ensure proficiency.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'software interface',
  },
  {
    title: 'Compliance & Ethics Course',
    description: 'A mandatory annual training program for all employees covering company policies, data privacy, and ethical conduct. Designed to be engaging and memorable.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'legal document',
  },
  {
    title: 'Leadership Development Series',
    description: 'A blended learning program for emerging leaders. Combines video-based lessons, peer collaboration exercises, and self-paced modules on management skills.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team meeting',
  },
];

export function PortfolioSectionClient() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const handleGenerateSuggestions = async (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await generateDesignSuggestions({ projectDescription: project.description });
      setSuggestions(result.designSuggestions);
    } catch (error) {
      console.error('Error generating design suggestions:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate AI suggestions. Please try again later.',
      });
      setSuggestions('Could not load suggestions at this time.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden bg-card transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="aspect-video w-full object-cover"
              data-ai-hint={project.imageHint}
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-headline text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-muted-foreground">{project.description}</p>
              <Button onClick={() => handleGenerateSuggestions(project)} className="mt-6 w-full" variant="outline">
                <Sparkles className="mr-2 h-4 w-4" />
                Get AI Design Suggestions
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">AI Design Suggestions</DialogTitle>
            <DialogDescription>
              For project: <span className="font-semibold text-primary">{selectedProject?.title}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="prose-sm dark:prose-invert max-h-[60vh] overflow-y-auto rounded-md border p-4">
            {isLoading && (
              <div className="flex items-center justify-center space-x-2 py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span className="text-muted-foreground">Generating creative ideas...</span>
              </div>
            )}
            {suggestions && !isLoading && (
              <ul className="list-disc space-y-2 pl-5">
                 {suggestions.split('\n').map((item, index) => item.trim().length > 0 && <li key={index}>{item.replace(/^- /, '')}</li>)}
              </ul>
            )}
            {suggestions === 'Could not load suggestions at this time.' && !isLoading && (
                <div className="flex flex-col items-center justify-center py-8 text-destructive">
                    <ServerCrash className="h-8 w-8" />
                    <p className="mt-2 text-center">{suggestions}</p>
                </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
