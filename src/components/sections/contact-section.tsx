import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 p-8 text-center text-primary-foreground shadow-2xl md:p-12">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              I'm always excited to hear about new projects and opportunities. If you're looking for a dedicated learning solutions designer, let's connect and discuss how I can help you achieve your goals.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary shadow-lg transition-transform hover:scale-105 hover:bg-primary-foreground/90"
              asChild
            >
              <a href="mailto:oliver.valenzuela@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
