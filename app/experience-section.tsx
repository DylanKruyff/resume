import { BriefcaseIcon } from "lucide-react";
import { Section } from "../components/ui/section";
import { Separator } from "../components/ui/separator";
import { experienceItems, ExperienceItemProps } from "./experiences";
import { SkillList } from "../components/ui/skill-list";
import { Fragment } from "react/jsx-runtime";

export function ExperienceSection() {
  return (
    <Section title="Experience" icon={BriefcaseIcon}>
      {experienceItems.map((item, index) => (
        <Fragment key={index}>
          <ExperienceItem {...item} />
          <Separator className="last:hidden" />
        </Fragment>
      ))}
    </Section>
  );
}

function ExperienceItem({
  company,
  link,
  location,
  roles,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row items-center gap-1">
        <h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="italic"
          >
            {company}
          </a>
        </h3>
        <span className="text-sm text-gray-500 hidden md:block">-</span>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      <ul className="flex flex-col gap-4">
        {roles.map((role, index) => (
          <li className="text-sm flex flex-col gap-2" key={index}>
            <div>
              <h4 className="text-lg font-bold">{role.title}</h4>
              <p className="text-gray-500 text-sm">{role.fte}</p>
              <p className="text-gray-500 text-sm">
                {role.startDate.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
                -{" "}
                {role.endDate?.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                }) || "Present"}{" "}
                ({timeBetween(role.startDate, role.endDate || new Date())})
              </p>
            </div>
            <div>
              <h5 className="font-semibold">Description</h5>
              <p>{role.description}</p>
            </div>
            <div>
              <h5 className="font-semibold">Key learnings</h5>
              <ul className="list-disc list-inside">
                {role.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
            <SkillList skills={role.skills} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function timeBetween(startDate: Date, endDate: Date) {
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearsString =
    years === 1 ? "1 year" : years > 1 ? `${years} years` : "";
  const monthsString =
    months === 1 ? "1 month" : months > 1 ? `${months} months` : "";
  return `${yearsString} ${monthsString}`.trim();
}
