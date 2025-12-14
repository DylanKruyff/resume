import { GraduationCapIcon } from "lucide-react";
import { Section } from "../components/ui/section";
import { Separator } from "../components/ui/separator";
import { Fragment } from "react/jsx-runtime";

interface EducationItemProps {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  institution: string;
  location: string;
}

const educationItems: EducationItemProps[] = [
  {
    title: "Master of Science in Computer Science",
    description:
      "Specializing in Algorithmic Data Analysis with a specialization in Visual Analytics",
    institution: "Universiteit Utrecht",
    location: "Utrecht, The Netherlands",
    startDate: new Date("2019-01-01"),
    endDate: new Date("2021-01-01"),
  },
  {
    title: "Bachelor of Science in Computer Science",
    description: "Specialising in  Gametechnologie with a minor in Mathematics",
    institution: "Universiteit Utrecht",
    location: "Utrecht, The Netherlands",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2018-01-01"),
  },
];

export function EducationSection() {
  return (
    <Section title="Education" icon={GraduationCapIcon}>
      {educationItems.map((item, index) => (
        <Fragment key={index}>
          <EducationItem {...item} />
          <Separator className="last:hidden" />
        </Fragment>
      ))}
    </Section>
  );
}

function EducationItem({
  title,
  description,
  institution,
  location,
  startDate,
  endDate,
}: EducationItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row items-center gap-1">
        <h3>{institution}</h3>
        <span className="text-sm text-gray-500 hidden md:block">-</span>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-gray-500">
          {startDate.toLocaleDateString("en-US", {
            year: "numeric",
          })}{" "}
          -{" "}
          {endDate.toLocaleDateString("en-US", {
            year: "numeric",
          })}
        </p>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
