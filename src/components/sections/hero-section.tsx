import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
      <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Designing <span className="text-primary">Engaging</span> Learning Experiences
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            I'm Oliver Valenzuela, a passionate learning solutions designer specializing in creating intuitive, effective, and visually compelling educational content.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="transition-transform hover:scale-105">
              <Link href="#portfolio">
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
