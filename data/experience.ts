export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  details: string;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Fareplay",
    title: "Software Engineer",
    period: "MAY 2023 — PRESENT",
    details:
      "Built front-end and mobile components for a crypto casino platform using React, Next.js, TypeScript, and Three.js. Integrated blockchain authentication and wallet management with Privy.io and Biconomy. Delivered responsive UIs with Tailwind & Styled Components, and enhanced product insight via PostHog + Addressable.",
    tech: ["React", "Three.js", "Privy.io", "Biconomy"],
  },
  {
    company: "Beeps",
    title: "Junior Software Engineer",
    period: "SEP 2023 — APR 2024",
    details:
      "Developed a full-stack company portal with Next.js, Drizzle ORM, NeonDB, and Next-Auth. Designed and implemented a marketing website with reusable UI components (Shadcn/UI, Tailwind CSS).",
    tech: ["Next.js", "Drizzle ORM", "NeonDB", "Shadcn/UI"],
  },
  {
    company: "Danica\u2019s Custom Bakes",
    title: "Backend Dev Intern",
    period: "JAN 2023 — SEP 2023",
    details:
      "Built APIs for business expense tracking and image upload validation using Node.js, Prisma, and Docker. Performed API testing with Postman/Insomnia; maintained version control with GitHub.",
    tech: ["Node.js", "Prisma", "Docker"],
  },
  {
    company: "Twitch",
    title: "Affiliated Web Dev & Streamer",
    period: "JUN 2021 — PRESENT",
    details:
      "Live-stream coding projects and tutorials, building an engaged tech-focused audience. Created and maintained interactive bots, chat commands, and real-time integrations. Grew a developer community by showcasing practical builds and industry trends.",
    tech: ["Community", "Chat Bots", "Live Builds"],
  },
];
