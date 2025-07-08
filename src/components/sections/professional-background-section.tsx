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

const toolsIUse = [
  "Articulate Storyline & Rise",
  "Adobe Captivate",
  "Adobe Illustrator & Photoshop",
  "Canva",
  "Mindsmith",
  "Google AI Studio",
  "OpenAI Playground",
];

const lmsExperience = [
  "Instructure Canvas & Bridge",
  "TalentLMS",
  "LMS360",
  "Moodle",
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
              <CardTitle className="font-headline text-2xl">Technology Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Tools I Use</h3>
                  <ul className="space-y-3">
                    {toolsIUse.map((tool) => (
                      <li key={tool} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">LMS Experience</h3>
                  <ul className="space-y-3">
                    {lmsExperience.map((lms) => (
                      <li key={lms} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{lms}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
