import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
           <Link href="#home" className="flex items-center gap-2 font-headline text-xl font-bold">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>Oliver Valenzuela</span>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:gap-6">
          <Link href="#home" className="transition-colors hover:text-primary">Home</Link>
          <Link href="#about" className="transition-colors hover:text-primary">About</Link>
          <Link href="#portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <a href="mailto:oliver.valenzuela@example.com" className="transition-colors hover:text-primary">oliver.valenzuela@example.com</a>
        </nav>
        <p className="text-sm text-muted-foreground">&copy; {currentYear} Oliver Valenzuela. All rights reserved.</p>
      </div>
    </footer>
  );
}
