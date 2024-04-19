import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

export default function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselPrevious />
      <CarouselContent>
        {projects.map((project: ProjectType, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="w-fit h-[500px] relative">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
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
                    layout="intrinsic"
                    className="rounded-lg hover:opacity-80 transition-opacity duration-300 ease-in-out"
                  />
                </Link>
              </CardContent>
              <CardFooter className="absolute bottom-0 right-0">
                <Link
                  href={project.git_hub_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.image_alt}
                >
                  GitHub Repository →
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  );
}
