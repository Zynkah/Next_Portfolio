import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {blogs.map((blog, index) => (
          <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
            <Card className="relative w-fit lg:h-[500px] sm:h-[550px] h-[450px]">
              <Image
                src={blog.image}
                width={blog.image_width}
                height={blog.image_height}
                alt={blog.image_alt}
                priority
                className="rounded-lg rounded-b-none"
              />
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardHeader>
              <CardFooter className="absolute bottom-0 right-0">
                <Link href={blog.link} aria-label={blog.image_alt}>
                  Read More →
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
