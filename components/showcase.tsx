"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import { ProjectType } from "@/app/types/ProjectType";

const Section = ({ project }: { project: ProjectType }) => (
  <section
    aria-label={`Project: ${project.title}`}
    role="region"
    tabIndex={-1}
    className="relative w-full flex items-center justify-center h-[300px] overflow-hidden rounded-xl shadow-lg bg-card/80 border border-accent backdrop-blur-md"
  >
    <article className="flex flex-col h-[300px] w-full hover:opacity-60 transition-opacity duration-300 ease-in-out relative">
      <Image
        src={project.image}
        width={project.image_width}
        height={project.image_height}
        alt={project.image_alt}
        className="w-full h-[250px] absolute  object-cover hover:opacity-60 transition-opacity duration-300 ease-in-out top-1/2 -translate-y-1/2"
      />
      {/* Overlay text */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col justify-center items-center px-8 py-6 bg-black/60 rounded-xl text-center"
        style={{ textDecoration: "none" }}
      >
        <h3
          id={project.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")}
          className="text-4xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide"
        >
          {project.title}
        </h3>{" "}
        <p className="text-lg leading-relaxed  text-white mb-4 drop-shadow-lg">
          {project.description}
        </p>
      </a>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <a
          href={project.git_hub_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.image_alt} on GitHub`}
          className="text-cyan-300 underline font-bold tracking-wide hover:bg-black/70 px-3 py-1 rounded whitespace-nowrap"
        >
          GitHub Repository →
        </a>
      </div>
    </article>
  </section>
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
