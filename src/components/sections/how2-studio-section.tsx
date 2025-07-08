import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function How2StudioSection() {
  return (
    <section id="how2-studio" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              Need a Bigger Team?
            </h2>
          </div>
          <p className="text-muted-foreground">
            If you ever need something more full-scale, I’ve got a team for that too. At How2 Studio, we build smart learning experiences and custom software—fast, creative, and always tailored to your goals.
          </p>
          <Button asChild className="transition-transform hover:scale-105">
            <Link href="https://studio--how2-studio.us-central1.hosted.app/" target="_blank">
              Check Out How2 Studio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <Card className="overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/images/how2s.png?v=1"
              alt="How2 Studio Team"
              width={600}
              height={400}
              className="aspect-video w-full object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
