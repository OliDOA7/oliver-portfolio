"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    title: 'The Empathy Call: A Customer Support Simulation',
    description: 'Step into the shoes of a support agent handling a frustrated customer. This branching simulation helps learners master empathy, problem-solving, and tone — in real-time. Highlights: Scenario-based, soft skills, decision-driven.',
    imageUrl: 'https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y2FsbCUyMGNlbnRlcnxlbnwwfHx8fDE3NTE5NTg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'customer support',
    projectUrl: 'https://how2studiodemo.s3.us-east-2.amazonaws.com/Login+Issues+Roleplay/story.html',
  },
  {
    title: 'Work Smart: Micro Habits for a Better Desk and Brain',
    description: 'A 5-minute microlearning experience that blends workplace wellness and behavioral science to improve focus and reduce stress through desk setup. Highlights: Microlearning, productivity, well-being.',
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkZXNrdG9wfGVufDB8fHx8MTc1MTk1ODgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'desk wellness',
    projectUrl: 'https://how2studiodemo.s3.us-east-2.amazonaws.com/Organize+Your+Desk+Like+a+Pro/story.html',
  },
  {
    title: 'EcoSort Challenge: Master the Art of Smart Recycling',
    description: 'A gamified challenge where learners sort items quickly and correctly to boost their recycling habits and sustainability awareness. Highlights: Gamified, environmental behavior, visual learning.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyZWN5Y2xlfGVufDB8fHx8MTc1MTk1ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'recycling game',
    projectUrl: 'https://how2studiodemo.s3.us-east-2.amazonaws.com/Recycling+Challenge+Sort+the+Trash/story.html',
  },
];

export function PortfolioSectionClient() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <Button asChild className="mt-6 w-full" variant="outline">
              <Link href={project.projectUrl} target="_blank">
                View Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
