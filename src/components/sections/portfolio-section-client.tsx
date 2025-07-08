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
    title: 'Interactive Sales Onboarding',
    description: 'A gamified e-learning module for new sales representatives. Focuses on product knowledge, sales techniques, and company culture. Includes interactive scenarios and quizzes.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'corporate training',
    projectUrl: '#',
  },
  {
    title: 'Software Simulation Training',
    description: 'A step-by-step interactive simulation to train employees on a new proprietary software suite. Features guided walkthroughs and practice environments to ensure proficiency.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'software interface',
    projectUrl: '#',
  },
  {
    title: 'Compliance & Ethics Course',
    description: 'A mandatory annual training program for all employees covering company policies, data privacy, and ethical conduct. Designed to be engaging and memorable.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'legal document',
    projectUrl: '#',
  },
  {
    title: 'Leadership Development Series',
    description: 'A blended learning program for emerging leaders. Combines video-based lessons, peer collaboration exercises, and self-paced modules on management skills.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team meeting',
    projectUrl: '#',
  },
];

export function PortfolioSectionClient() {
  return (
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
