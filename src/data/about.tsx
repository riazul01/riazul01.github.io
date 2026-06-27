import type { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TechnextLogo from "assets/images/technext-logo.webp";
import Aurora from "assets/images/projects/aurora.webp";
import Base from "assets/images/projects/base.webp";
import DashdarkX from "assets/images/projects/dashdarkx.webp";
import DNX from "assets/images/projects/dnx.webp";
import Falcon from "assets/images/projects/falcon.webp";
import Hummingbird from "assets/images/projects/hummingbird.webp";
import Horizon from "assets/images/projects/horizon.webp";
import Venus from "assets/images/projects/venus.webp";
import Phoenix from "assets/images/projects/phoenix.webp";

export interface SkillItem {
  name: string;
  icon: string;
  invert?: boolean;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: { logo: string; name: string; url: string };
  period: string;
  location: string;
  responsibilities: ReactNode[];
  technologies?: string[];
}

export interface Project {
  id: number | string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: string[];
  href: string;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages & Core Technologies",
    items: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "C/C++", icon: "logos:c-plusplus" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Astro", icon: "logos:astro-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Material UI", icon: "logos:material-ui" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "Sass", icon: "logos:sass" },
      { name: "TanStack Query", icon: "logos:react-query-icon" },
      { name: "React Hook Form", icon: "simple-icons:reacthookform" },
      { name: "Zod", icon: "simple-icons:zod" },
      { name: "Apache ECharts", icon: "simple-icons:apacheecharts" },
      { name: "shadcn/ui", icon: "simple-icons:shadcnui" },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon", invert: true },
      { name: "npm", icon: "logos:npm-icon" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Gulp", icon: "logos:gulp" },
      { name: "Pug", icon: "logos:pug" },
      { name: "ChatGPT", icon: "simple-icons:openai" },
      { name: "GitHub Copilot", icon: "logos:github-copilot", invert: true },
      { name: "Codex", icon: "simple-icons:openai" },
      { name: "Google AI Studio", icon: "logos:google-gemini" },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Jr. Software Engineer",
    company: {
      logo: TechnextLogo,
      name: "Technext Limited",
      url: "https://technext.it/",
    },
    period: "Aug 2024 - Present",
    location: "Dhaka, Bangladesh (Hybrid)",
    responsibilities: [
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Contributed to the development and maintenance of{" "}
        <Typography
          component={Link}
          href="https://hbui.dev/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Hummingbird UI
        </Typography>
        , an open-source UI framework, by building reusable components,
        documentation, developer tooling, UI blocks, and other product features.
      </Typography>,
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Developed and enhanced{" "}
        <Typography
          component={Link}
          href="https://aurora.themewagon.com/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Aurora
        </Typography>
        , a premium React and Material UI template, by building dashboards,
        business application modules, feature-rich application pages, and
        Next.js implementations of application features.
      </Typography>,
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Contributed to{" "}
        <Typography
          component={Link}
          href="https://themewagon.com/themes/phoenix-tailwind/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Phoenix Tailwind
        </Typography>{" "}
        and{" "}
        <Typography
          component={Link}
          href="https://themewagon.com/themes/falcon-tailwind/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Falcon Tailwind
        </Typography>{" "}
        by transforming Bootstrap-based templates into modern Tailwind CSS
        implementations, improving maintainability, performance, and developer
        experience.
      </Typography>,
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Performed code refactoring, debugging, optimization, and ongoing
        maintenance to ensure high-quality and scalable frontend applications.
      </Typography>,
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Collaborated throughout the development lifecycle, contributing to
        feature implementation, testing, and performance enhancements while
        ensuring responsive, accessible, and cross-browser compatible
        applications.
      </Typography>,
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Astro",
      "Pug",
      "Gulp",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: {
      logo: TechnextLogo,
      name: "Technext Limited",
      url: "https://technext.it/",
    },
    period: "Apr 2024 - Jul 2024",
    location: "Dhaka, Bangladesh (Hybrid)",
    responsibilities: [
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Developed free admin dashboard templates, including{" "}
        <Typography
          component={Link}
          href="https://themewagon.github.io/dashdarkX/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          DashDarkX
        </Typography>
        ,{" "}
        <Typography
          component={Link}
          href="https://themewagon.github.io/dnx/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          DNX
        </Typography>
        ,{" "}
        <Typography
          component={Link}
          href="https://themewagon.github.io/horizon/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Horizon
        </Typography>
        ,{" "}
        <Typography
          component={Link}
          href="https://themewagon.github.io/venus/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Venus
        </Typography>
        ,{" "}
        <Typography
          component={Link}
          href="https://themewagon.github.io/base/"
          target="_blank"
          sx={{ fontWeight: 600 }}
        >
          Base
        </Typography>
        , and others, converting Figma designs into pixel-perfect, responsive,
        and production-ready user interfaces.
      </Typography>,
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Built reusable dashboard components, charts, tables, forms, and layouts
        using React, TypeScript, Material UI, MUI X, and Apache ECharts.
      </Typography>,
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          lineHeight: 1.75,
        }}
      >
        Collaborated with the team to fix bugs, improve code quality, optimize
        performance, and maintain a consistent user experience across multiple
        products.
      </Typography>,
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "MUI X",
      "Apache ECharts",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aurora",
    subtitle: "React & Material UI template",
    image: Aurora,
    description:
      "Developed dashboards, CRM modules, HRM dashboards, Kanban applications, pricing pages, FAQ pages, and Next.js implementations of application features.",
    technologies: ["React", "Next.js", "TypeScript", "Material UI"],
    href: "https://aurora.themewagon.com/",
  },
  {
    id: 2,
    title: "Hummingbird UI",
    subtitle: "Tailwind framework",
    image: Hummingbird,
    description:
      "Contributed to reusable components, documentation, developer tooling, UI blocks, framework features, and the overall developer experience.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "MDX"],
    href: "https://hbui.dev/",
  },
  {
    id: 3,
    title: "Phoenix",
    subtitle: "Tailwind CSS Dashboard template",
    image: Phoenix,
    description:
      "Converted the Bootstrap-based Phoenix template to Tailwind CSS, improving maintainability, scalability, and developer experience.",
    technologies: ["Tailwind CSS", "Pug", "Gulp", "JavaScript"],
    href: "https://themewagon.com/themes/phoenix-tailwind/",
  },
  {
    id: 4,
    title: "Falcon",
    subtitle: "Tailwind CSS Dashboard template",
    image: Falcon,
    description:
      "Working on the migration of Falcon from Bootstrap to Tailwind CSS, focusing on automation, consistency, and scalable frontend architecture.",
    technologies: ["Tailwind CSS", "Pug", "Gulp", "JavaScript"],
    href: "https://themewagon.com/themes/falcon-tailwind/",
  },
  {
    id: 5,
    title: "DashDarkX",
    subtitle: "Free React Admin Dashboard",
    image: DashdarkX,
    description:
      "Developed a modern admin dashboard from Figma designs, featuring analytics dashboards, charts, tables, forms, and reusable UI components.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "MUI X",
      "Apache ECharts",
    ],
    href: "https://themewagon.github.io/dashdarkX/",
  },
  {
    id: 6,
    title: "DNX",
    subtitle: "Free React Admin Dashboard",
    image: DNX,
    description:
      "Built responsive dashboard interfaces with reusable components, data visualizations, application pages, and modern Material UI design patterns.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "MUI X",
      "Apache ECharts",
    ],
    href: "https://themewagon.github.io/dnx/",
  },
  {
    id: 7,
    title: "Horizon",
    subtitle: "Free React Admin Dashboard",
    image: Horizon,
    description:
      "Implemented pixel-perfect Figma designs and developed dashboard layouts, charts, widgets, tables, and reusable frontend components.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "MUI X",
      "Apache ECharts",
    ],
    href: "https://themewagon.github.io/horizon/",
  },
  {
    id: 8,
    title: "Venus",
    subtitle: "Free React Admin Dashboard",
    image: Venus,
    description:
      "Created responsive dashboard pages and reusable UI patterns while maintaining accessibility, performance, and code quality standards.",
    technologies: ["React", "TypeScript", "Material UI", "Apache ECharts"],
    href: "https://themewagon.github.io/venus/",
  },
  {
    id: 9,
    title: "Base",
    subtitle: "Free React Admin Dashboard",
    image: Base,
    description:
      "Developed reusable dashboard components, application pages, charts, and layouts with a focus on scalability and maintainability.",
    technologies: ["React", "TypeScript", "Material UI", "Apache ECharts"],
    href: "https://themewagon.github.io/base/",
  },
];
