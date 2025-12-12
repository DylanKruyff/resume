import {
  BrainIcon,
  BriefcaseIcon,
  CodeIcon,
  GraduationCapIcon,
  LanguagesIcon,
  LucideIcon,
  MailIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { Section } from "../components/ui/section";
import Image from "next/image";
import { ContactItem } from "../components/ui/contact-item";

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
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Dylan Kruyff</h1>
            <p className="text-lg italic flex">DevOps Software Engineer</p>
            <div className="flex flex-col gap-2">
              <ContactItem icon={MapPinIcon}>
                Utrecht, The Netherlands
              </ContactItem>
              <ContactItem icon={MailIcon}>
                <a href="mailto:dylan.kruyff@gmail.com">
                  dylan.kruyff@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={LanguagesIcon}>English, Dutch</ContactItem>
            </div>
          </div>
          <Image
            src="/profile.jpg"
            alt="Dylan Kruyff"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>
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
