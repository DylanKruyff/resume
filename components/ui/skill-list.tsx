export function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-sm text-gray-500 not-last:after:content-['•'] not-last:after:mx-1"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
