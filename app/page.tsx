import About from "@/components/about";
import Blog from "@/components/blog-section";
import Certifications from "@/components/certifications";
import ProjectsCarousel from "@/components/showcase";
import AchivementsCarousel from "@/components/achievement-carousel";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen max-w-[1600px] m-auto flex flex-col items-center justify-between md:p-0 p-0">
      <div className="w-full z-20 md:mt-10 mt-5">
        <Hero />
      </div>

      <div className="w-full flex justify-center mt-8 mb-16 overflow-x-hidden">
        <div className="w-full max-w-[1280px] px-2 sm:px-4">
          <p className="text-4xl font-thin my-4">About Me</p>
          <About />
          <div className="my-16">
            <p className="text-4xl font-thin my-4">Showcase</p>
            <ProjectsCarousel />
          </div>
          <div className="my-16">
            <p className="text-4xl font-thin my-4">Certifications</p>
            <Certifications />
          </div>
          <div className="my-16">
            <p className="text-4xl font-thin my-4">Achievements</p>
            <AchivementsCarousel />
          </div>
          <div className="my-16">
            <p className="text-4xl font-thin my-4">Blog</p>
            <Blog />
          </div>
        </div>
      </div>
    </main>
  );
}
