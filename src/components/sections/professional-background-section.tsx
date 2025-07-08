import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const skills = [
  "Instructional Design",
  "E-Learning Development",
  "User Experience (UX) for Learning",
  "Storyboarding & Scripting",
  "Gamification Strategies",
  "Performance Analysis",
];

const tools = [
  { name: 'Articulate Storyline', Icon: StorylineIcon },
  { name: 'Adobe Captivate', Icon: CaptivateIcon },
  { name: 'Figma', Icon: FigmaIcon },
  { name: 'Vyond', Icon: VyondIcon },
  { name: 'LMS Platforms', Icon: LmsIcon },
  { name: 'Camtasia', Icon: CamtasiaIcon},
];

export function ProfessionalBackgroundSection() {
  return (
    <section id="background" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">My Professional Toolkit</h2>
          <p className="mt-4 text-lg text-muted-foreground">Combining proven design methodologies with leading industry tools to deliver exceptional results.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Design Approach & Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Proficient Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {tools.map(({ name, Icon }) => (
                  <div key={name} className="flex flex-col items-center gap-3 text-center transition-transform hover:scale-110">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function StorylineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Z" />
      <path d="m14 10-4 4 4 4" />
      <path d="M10 10h1" />
    </svg>
  );
}

function CaptivateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a9 9 0 0 1 9 9" /><path d="M12 3a9 9 0 0 0 9 9" /><path d="M3 12a9 9 0 0 1 9-9" /><path d="M21 12a9 9 0 0 1-9 9" /><path d="M12 21a9 9 0 0 1-9-9" /><path d="M12 21a9 9 0 0 0-9-9" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function VyondIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" /><rect x="2" y="7" width="14" height="10" rx="2" />
    </svg>
  );
}

function LmsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="m12 13-2-2 2-2" /><path d="m16 13-2-2 2-2" />
    </svg>
  );
}

function CamtasiaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </svg>
  );
}
