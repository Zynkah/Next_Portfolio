import { ProjectType } from "@/app/types/ProjectType";

export const projects: ProjectType[] = [
  {
    title: "Final Fantasy X Site",
    genre: "RPG",
    description:
      "A polished Final Fantasy X fan site — character, culture, location and equipment guides, built with Next.js and animated with Framer Motion.",
    image: "/image/FFX.png",
    image_alt: "FFX Fan Site",
    image_height: 700,
    image_width: 700,
    link: "https://ffx-v2.vercel.app/",
    git_hub_link: "https://github.com/Zynkah/FFX_V2",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    hasLive: true,
  },
  {
    title: "Maid Cafe",
    genre: "SIM",
    description:
      "A full-stack cafe experience with a React + Material UI front end and an Express/MongoDB back end. Hosted on Vercel.",
    image: "/image/MaidCafe.png",
    image_alt: "Maid Cafe",
    image_height: 700,
    image_width: 700,
    link: "https://maid-cafe.vercel.app/",
    git_hub_link: "https://github.com/Zynkah/React_Maid_Cafe",
    tech: ["React", "Node.js", "Express", "Material UI", "MongoDB"],
    hasLive: true,
  },
  {
    title: "Adventure Game",
    genre: "TEXT RPG",
    description:
      "Stone\u2019s Edge — a choose-your-own-adventure game written in Python that you play right in the terminal.",
    image: "/image/StonesEdge.png",
    image_alt: "Stone-Edge",
    image_height: 700,
    image_width: 700,
    link: "/",
    git_hub_link: "https://github.com/Zynkah/Stones_Edge",
    tech: ["Python", "Terminal"],
    hasLive: false,
  },
  {
    title: "Zyntendo",
    genre: "ARCADE",
    description:
      "A pixel-perfect Game Gal Color handheld recreated in pure HTML, CSS and the Canvas API. Hosted on Netlify.",
    image: "/image/Zyntendo.png",
    image_alt: "Zyntendo",
    image_height: 200,
    image_width: 200,
    link: "https://zyntendo.netlify.app/",
    git_hub_link: "https://github.com/Zynkah/css-gameboy-color",
    tech: ["HTML", "CSS", "Canvas API", "Netlify"],
    hasLive: true,
  },
  {
    title: "Gemini AI Chatbot",
    genre: "AI",
    description:
      "A conversational AI chatbot powered by Gemini, with fuzzy search via fuse.js and a React front end. Hosted on Vercel.",
    image: "/image/chatbot.png",
    image_alt: "Gemini AI Chatbot",
    image_height: 700,
    image_width: 700,
    link: "https://ai-chatbot-topaz-psi-70.vercel.app/",
    git_hub_link: "https://github.com/Zynkah/ai_chatbot",
    tech: ["Gemini AI", "React", "react-chatbot-kit", "fuse.js"],
    hasLive: true,
  },
  {
    title: "Fare Privy NPM",
    genre: "DEV TOOL",
    description:
      "A published npm package wrapping Privy auth for React — styled with Styled Components and state-managed with valtio.",
    image: "/image/npm.png",
    image_alt: "Fare Privy NPM",
    image_height: 700,
    image_width: 700,
    link: "https://www.npmjs.com/package/fare-privy-core",
    git_hub_link:
      "https://www.npmjs.com/package/fare-privy-core?activeTab=code",
    tech: ["React", "@privy-io/react-auth", "Styled Components", "valtio"],
    hasLive: true,
  },
];
