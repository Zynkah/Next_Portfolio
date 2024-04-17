import AboutParallax from "@/components/about-parrallax";
import Blog from "@/components/blog-section";
import Certifications from "@/components/certifications";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectsCarousel from "@/components/projects-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-24">
        <div className="flex flex-row gap-4">
          <Header />
        </div>
        <div className="my-10">
          <AboutParallax />
          <div className="my-10">
            <h1>Showcase</h1>
            <ProjectsCarousel />
          </div>
          <div className="my-10">
            <h1>Certifications</h1>
            <Certifications />
          </div>
          <div className="my-10">
            <h1>Blog</h1>
            <Blog />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
