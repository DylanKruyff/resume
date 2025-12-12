import {
  BrainIcon,
  BriefcaseIcon,
  CodeIcon,
  GraduationCapIcon,
  LucideIcon,
  UserIcon,
} from "lucide-react";
import { Section } from "../components/ui/section";
import { Header } from "./header";

const sections: { title: string; icon: LucideIcon; description: string }[] = [
  {
    title: "About",
    icon: UserIcon,
    description: "-",
  },
  {
    title: "Experience",
    icon: BriefcaseIcon,
    description: "-",
  },
  {
    title: "Education",
    icon: GraduationCapIcon,
    description: "-",
  },
  {
    title: "Skills",
    icon: BrainIcon,
    description: "-",
  },
  {
    title: "Projects",
    icon: CodeIcon,
    description: "-",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-16 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Header />
        {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            icon={section.icon}
          >
            <p>{section.description}</p>
          </Section>
        ))}
      </main>
    </div>
  );
}
