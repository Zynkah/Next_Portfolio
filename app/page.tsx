import About from "@/components/about";
import Blog from "@/components/blog-section";
import Certifications from "@/components/certifications";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectsCarousel from "@/components/showcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-24">
        <div className="flex flex-row gap-4">
          <Header />
        </div>
        <div className="my-10">
          <p className="text-4xl font-thin my-4">About Me</p>
          <About />
          <div className="my-10">
            <p className="text-4xl font-thin my-4">Showcase</p>
            <ProjectsCarousel />
          </div>
          <div className="my-10">
            <p className="text-4xl font-thin my-4">Certifications</p>
            <Certifications />
          </div>
          <div className="my-10">
            <p className="text-4xl font-thin my-4">Blog</p>
            <Blog />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
