import { BrainIcon } from "lucide-react";
import { Section } from "../components/ui/section";
import { SkillList } from "../components/ui/skill-list";
import { experienceItems } from "./experiences";
import { useMemo } from "react";

export function SkillsSection() {
  const skills = experienceItems.flatMap((item) =>
    item.roles.flatMap((role) => role.skills)
  );
  const uniqueSkills = useMemo(() => [...new Set(skills)].sort(), [skills]);

  return (
    <Section title="Skills" icon={BrainIcon}>
      <SkillList skills={uniqueSkills} />
    </Section>
  );
}
