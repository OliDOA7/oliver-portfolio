import { PortfolioSectionClient } from './portfolio-section-client';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Featured Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects that showcase my expertise in creating effective and engaging learning solutions.
          </p>
          <p className="mt-4 text-muted-foreground">
            For each project, click the button to get AI-powered design suggestions based on its description. It's a demonstration of how AI can assist in the creative process.
          </p>
        </div>
        <PortfolioSectionClient />
      </div>
    </section>
  );
}
