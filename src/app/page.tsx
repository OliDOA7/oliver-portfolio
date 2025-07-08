import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { BiographySection } from '@/components/sections/biography-section';
import { ProfessionalBackgroundSection } from '@/components/sections/professional-background-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ContactSection } from '@/components/sections/contact-section';
import { How2StudioSection } from '@/components/sections/how2-studio-section';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BiographySection />
        <ProfessionalBackgroundSection />
        <PortfolioSection />
        <ContactSection />
        <How2StudioSection />
      </main>
      <Footer />
    </div>
  );
}
