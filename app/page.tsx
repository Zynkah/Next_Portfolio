import About from "@/components/about";
import Blog from "@/components/blog-section";
import Certifications from "@/components/certifications";
import ProjectsCarousel from "@/components/showcase";
import AchivementsCarousel from "@/components/achievement-carousel";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="space-y-24 my-10 md:mt-0 w-4/5">
        <div className="my-16">
          <div className="my-24 xl:my-56">
            <Hero />
          </div>
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
