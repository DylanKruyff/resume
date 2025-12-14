interface ExperienceRole {
  title: string;
  fte: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string[];
  learnings: string[];
}

export interface ExperienceItemProps {
  company: string;
  link: string;
  location: string;
  roles: ExperienceRole[];
}

export const experienceItems: ExperienceItemProps[] = [
  {
    company: "Nela / Truqu",
    location: "Driebergen-Rijsenburg, The Netherlands",
    link: "https://nela.io/",
    roles: [
      {
        title: "DevOps Tech Lead",
        fte: "Full-time",
        startDate: new Date("2024-01-01"),
        description:
          "Creating an AI-powered SaaS application for performance management from scratch + maintaining a legacy system",
        skills: [
          "Next.js",
          "Vercel",
          "React",
          "Nx",
          "Posthog",
          "AI",
          "Scrum",
          "Docker",
        ],
        learnings: [
          "How to successfully build a SaaS application from scratch with a small team and limited time",
          "Using AI as a tool for developing efficiency",
          "Building AI-features",
        ],
      },
      {
        title: "DevOps Engineer",
        fte: "Transitioning from part-time to full-time",
        startDate: new Date("2022-05-01"),
        endDate: new Date("2024-01-01"),
        description:
          "Migrating a legacy performance management SaaS application to a modern architecture, whilst delivering new features",
        skills: [
          "Angular",
          "NestJS",
          "Azure",
          "Azure DevOps",
          "Nx",
          "NgRx",
          "Elm",
          "Erlang",
          "Operations management",
          "Scrum",
          "Docker",
        ],
        learnings: [
          `The importance of "using the right tool for the right job" (e.g. the impact of technical decisions)`,
          "The pro's and cons of migrating versus building new",
        ],
      },
    ],
  },
  {
    company: "RightBrains",
    location: "Driebergen-Rijsenburg, The Netherlands",
    link: "https://rightbrains.nl/",
    roles: [
      {
        title: "Lead DevOps Engineer",
        fte: "0.2 FTE",
        startDate: new Date("2021-12-01"),
        endDate: new Date("2023-04-01"),
        description:
          "Maintaining and developing on a social platform for women in tech",
        skills: [
          "Angular",
          "DotNet",
          "Azure",
          "Azure DevOps",
          "Nx",
          "NgRx",
          "Kanban",
          "Docker",
        ],
        learnings: [
          "Requirements gathering and implementation",
          "Stakeholder management",
        ],
      },
    ],
  },
  {
    company: "Energiedirect.nl",
    location: "Den Bosch, The Netherlands",
    link: "https://www.energiedirect.nl/",
    roles: [
      {
        title: "Software Engineer",
        fte: "0.8 FTE",
        startDate: new Date("2021-09-01"),
        endDate: new Date("2022-07-01"),
        description:
          "Building the Customer Acquisition flow + buliding frontend components and integrating them into SiteCore (Headless CMS)",
        skills: [
          "Angular",
          "Nestjs",
          "AWS",
          "NgRx",
          "SiteCore",
          "Nx",
          "Docker",
          "SAFe",
        ],
        learnings: [],
      },
    ],
  },
  {
    company: "Hostnet",
    location: "Amsterdam, The Netherlands",
    link: "https://www.hostnet.nl/",
    roles: [
      {
        title: "Software Engineer",
        fte: "0.4 FTE",
        startDate: new Date("2019-02-01"),
        endDate: new Date("2020-05-01"),
        description: "Full-stack software engineer for the e-commerce team",
        skills: ["Angular", "Java", "PHP", "Scrum"],
        learnings: [],
      },
      {
        title: "Software Engineer",
        fte: "Full-time",
        startDate: new Date("2018-01-01"),
        endDate: new Date("2018-09-01"),
        description: "Full-stack software engineer for the e-commerce team",
        skills: ["Angular", "Java", "PHP", "Scrum"],
        learnings: [],
      },
    ],
  },
];
