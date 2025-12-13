import {
  HeartHandshakeIcon,
  LucideIcon,
  RocketIcon,
  ScaleIcon,
  TestTubeIcon,
  TrendingUpIcon,
  TriangleAlertIcon,
  UserIcon,
} from "lucide-react";
import { Section } from "../components/ui/section";

export function AboutSection() {
  return (
    <Section title="About" icon={UserIcon}>
      <p>
        Passionate and studious full-stack developer with a strong focus on
        simplicity and efficiency. I&apos;ve worked in various domains and
        organization structures, ranging from start-up SaaS-applications to
        large enterprise systems. Learning and exploring new concepts gives me
        energy, which has led me to a vast array of skills and experiences. My
        core philosophy in software engineering/delivery is to keep it simple,
        while maintaining high quality. My key guidelines are:
      </p>
      <ul className="ml-4 flex flex-col gap-y-1">
        <Guideline icon={RocketIcon}>
          A strong CI/CD pipeline (striving for{" "}
          <a href="https://dora.dev/" className="underline">
            Elite DORA metrics
          </a>
          )
        </Guideline>
        <Guideline icon={HeartHandshakeIcon}>
          Transparent, honest and quick communication.
        </Guideline>
        <Guideline icon={TrendingUpIcon}>
          Continuously iterating and improving the workflow of the team
        </Guideline>
        <Guideline icon={TriangleAlertIcon}>
          Challenge and discuss implementation decisions when they don&apos;t
          feel intuitive
        </Guideline>
        <Guideline icon={TestTubeIcon}>
          Short delivery loops with user-focussed testing (find out what works)
        </Guideline>
        <Guideline icon={ScaleIcon}>
          Keep the code scalable, but don&apos;t over-optimize too soon
        </Guideline>
      </ul>
    </Section>
  );
}

function Guideline({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-2 items-center">
      <Icon className="size-4" size={16} />
      <div>{children}</div>
    </li>
  );
}
