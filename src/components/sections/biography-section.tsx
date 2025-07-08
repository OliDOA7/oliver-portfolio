import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function BiographySection() {
  return (
    <section id="about" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div className="relative mx-auto w-full max-w-md">
          <Card className="overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/images/profile.png"
              alt="Oliver Valenzuela"
              width={600}
              height={700}
              className="aspect-[6/7] object-cover"
            />
          </Card>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              A Brief Bio
            </h2>
            <p className="font-semibold text-primary">Passionate About Learning, Driven by Design</p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              With over a decade of experience in instructional design and multimedia development, I've dedicated my career to bridging the gap between knowledge and understanding. I believe that effective learning isn't just about information transfer; it's about creating memorable experiences that inspire and empower.
            </p>
            <p>
              My approach blends cognitive science principles with modern design aesthetics to build solutions that are not only effective but also enjoyable to use. From interactive e-learning modules to comprehensive training programs, I thrive on transforming complex topics into clear, accessible, and engaging content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
