"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  image_height: number;
  image_width: number;
  link: string;
  git_hub_link: string;
}

const Section = ({ project }: { project: ProjectType }) => (
  <motion.div
    // initial={{ scale: 0.9, opacity: 0.7 }}
    // animate={{ scale: isActive ? 1.1 : 0.9, opacity: isActive ? 1 : 0.7 }}
    // transition={{ duration: 0.5 }}
    className="flex flex-row items-center gap-20"
  >
    <div className="basis-1/2">
      <Link
        href={project.link}
        aria-label={project.image_alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={project.image}
          width={project.image_width}
          height={project.image_height}
          alt={project.image_alt}
          priority
          className="rounded-lg hover:opacity-80 transition-opacity duration-300 ease-in-out"
        />
      </Link>
    </div>
    <div className="flex flex-col basis-1/2">
      <div className="flex flex-row space-x-2 text-nowrap hero-text text-3xl">
        <h2>{project.title}</h2>
      </div>
      <p className="text-base leading-6 font-gohu font-medium text-justify">
        {project.description}
      </p>
      <Link
        href={project.git_hub_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.image_alt}
      >
        GitHub Repository →
      </Link>
    </div>
  </motion.div>
);

export default function ProjectsCarousel() {
  return (
    <div className="space-y-12 h-[500px] overflow-scroll no-scrollbar">
      {projects.map((project: ProjectType, index: number) => (
        <Section project={project} key={index} />
      ))}
    </div>
  );
}
