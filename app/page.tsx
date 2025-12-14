import { Header } from "./header";
import { AboutSection } from "./about-section";
import { ExperienceSection } from "./experience-section";
import { EducationSection } from "./education-section";
import { SkillsSection } from "./skills-section";
import { PublicationSection } from "./publication-section";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 py-16 px-16 bg-white dark:bg-black sm:items-start">
        <Header />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <PublicationSection />
      </main>
    </div>
  );
}
