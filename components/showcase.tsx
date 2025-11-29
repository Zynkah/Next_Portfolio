"use client";

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
  <motion.div className="relative w-full flex items-center justify-center h-[300px] overflow-hidden rounded-xl shadow-lg bg-card/80 border border-accent backdrop-blur-md font-mulish">
    <Link
      href={project.link}
      aria-label={project.image_alt}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <Image
        src={project.image}
        width={project.image_width}
        height={project.image_height}
        alt={project.image_alt}
        className="rounded-lg w-full object-cover hover:opacity-80 transition-opacity duration-300 ease-in-out "
      />
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 py-6 bg-black/60 rounded-xl text-center">
        <h2 className="text-4xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide font-mulish">
          {project.title}
        </h2>
        <p className="text-lg leading-relaxed font-mulish text-white mb-4 drop-shadow-lg">
          {project.description}
        </p>
        <Link
          href={project.git_hub_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.image_alt}
          className="text-cyan-300 underline font-bold tracking-wide font-mulish"
        >
          GitHub Repository →
        </Link>
      </div>
    </Link>
  </motion.div>
);

export default function ProjectsCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {projects.map((project: ProjectType, index: number) => (
        <Section project={project} key={index} />
      ))}
    </div>
  );
}
