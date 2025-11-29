import About from "@/components/about";
import Blog from "@/components/blog-section";
import Certifications from "@/components/certifications";
import ProjectsCarousel from "@/components/showcase";
import AchivementsCarousel from "@/components/achievement-carousel";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between md:p-0 p-0">
      <div className="fixed top-16 left-0 w-full z-20">
        <Hero />
      </div>

      <div
        className="w-full max-w-[1600px] flex justify-center"
        style={{
          marginTop: "30vh",
        }}
      >
        <div
          className="w-4/5 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 400px)" }}
        >
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
