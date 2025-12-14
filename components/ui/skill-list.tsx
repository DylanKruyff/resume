import { useMemo } from "react";

export function SkillList({ skills }: { skills: string[] }) {
  const sortedSkills = useMemo(() => skills.sort(), [skills]);

  return (
    <div className="flex flex-wrap gap-1">
      {sortedSkills.map((skill) => (
        <span
          key={skill}
          className="text-sm text-gray-500 not-last:after:content-['•'] not-last:after:ml-1"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
