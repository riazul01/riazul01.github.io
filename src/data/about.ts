import TechnextLogo from "assets/images/technext-logo.webp";

export interface SkillItem {
  name: string;
  icon: string;
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
  responsibilities: string[];
  technologies?: string[];
}

export interface Project {
  id: number | string;
  title: string;
  subtitle: string;
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
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "npm", icon: "logos:npm-icon" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Gulp", icon: "logos:gulp" },
      { name: "Pug", icon: "logos:pug" },
      { name: "ChatGPT", icon: "simple-icons:openai" },
      { name: "GitHub Copilot", icon: "logos:github-copilot" },
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
      "Contributed to the development and maintenance of Hummingbird UI, an open-source UI framework, by building reusable components, documentation, developer tooling, UI blocks, and other product features.",
      "Developed and enhanced Aurora, a premium React and Material UI template, by building dashboards, business application modules, feature-rich application pages, and Next.js implementations of application features.",
      "Contributed to Phoenix Tailwind and Falcon Tailwind by transforming Bootstrap-based templates into modern Tailwind CSS implementations, improving maintainability, performance, and developer experience.",
      "Performed code refactoring, debugging, optimization, and ongoing maintenance to ensure high-quality and scalable frontend applications.",
      "Collaborated throughout the development lifecycle, contributing to feature implementation, testing, and performance enhancements while ensuring responsive, accessible, and cross-browser compatible applications.",
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
      "Developed free admin dashboard templates, including DashDarkX, DNX, Horizon, Venus, Base, and others, converting Figma designs into pixel-perfect, responsive, and production-ready user interfaces.",
      "Built reusable dashboard components, charts, tables, forms, and layouts using React, TypeScript, Material UI, MUI X, and Apache ECharts.",
      "Collaborated with the team to fix bugs, improve code quality, optimize performance, and maintain a consistent user experience across multiple products.",
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
    title: "Hummingbird UI",
    subtitle: "Open-source Tailwind CSS framework",
    description:
      "Contributed to reusable components, documentation, developer tooling, UI blocks, framework features, and the overall developer experience.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "MDX"],
    href: "https://hbui.dev/",
  },
  {
    id: 2,
    title: "Aurora",
    subtitle: "Premium React & Material UI template",
    description:
      "Developed dashboards, CRM modules, HRM dashboards, Kanban applications, pricing pages, FAQ pages, and Next.js implementations of application features.",
    technologies: ["React", "Next.js", "TypeScript", "Material UI"],
    href: "https://mui.com/store/items/aurora/",
  },
  {
    id:3,
    title: "Phoenix Tailwind",
    subtitle: "Tailwind CSS dashboard template",
    description:
      "Converted the Bootstrap-based Phoenix template to Tailwind CSS, improving maintainability, scalability, and developer experience.",
    technologies: ["Tailwind CSS", "Pug", "Gulp", "JavaScript"],
    href: "https://themewagon.com/themes/phoenix-tailwind/",
  },
  {
    id: 4,
    title: "Falcon Tailwind",
    subtitle: "Tailwind CSS dashboard template",
    description:
      "Working on the migration of Falcon from Bootstrap to Tailwind CSS, focusing on automation, consistency, and scalable frontend architecture.",
    technologies: ["Tailwind CSS", "Pug", "Gulp", "JavaScript"],
    href: "https://themewagon.com/themes/falcon-tailwind/",
  },
  {
    id: 5,
    title: "DashDarkX",
    subtitle: "Free React Admin Dashboard",
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
    description:
      "Created responsive dashboard pages and reusable UI patterns while maintaining accessibility, performance, and code quality standards.",
    technologies: ["React", "TypeScript", "Material UI", "Apache ECharts"],
    href: "https://themewagon.github.io/venus/",
  },
  {
    id: 9,
    title: "Base",
    subtitle: "Free React Admin Dashboard",
    description:
      "Developed reusable dashboard components, application pages, charts, and layouts with a focus on scalability and maintainability.",
    technologies: ["React", "TypeScript", "Material UI", "Apache ECharts"],
    href: "https://themewagon.github.io/base/",
  },
];
