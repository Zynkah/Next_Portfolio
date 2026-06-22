export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    label: "LANGUAGES",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "FRAMEWORKS",
    items: ["React.js", "Next.js", "Three.js", "React Native", "Node.js"],
  },
  {
    label: "LIBRARIES",
    items: [
      "Bootstrap",
      "Material UI",
      "Next UI",
      "ShadCn",
      "Daisy UI",
      "Tailwind CSS",
    ],
  },
  {
    label: "DATABASES",
    items: ["MongoDB", "PostgreSQL", "NeonDB", "Drizzle ORM", "Prisma"],
  },
  {
    label: "DEVOPS & TOOLS",
    items: ["AWS", "Google Cloud", "Azure", "Docker", "Git", "Postman"],
  },
  {
    label: "BLOCKCHAIN & ANALYTICS",
    items: ["Privy", "WalletConnect", "Biconomy", "PostHog", "Addressable"],
  },
];
