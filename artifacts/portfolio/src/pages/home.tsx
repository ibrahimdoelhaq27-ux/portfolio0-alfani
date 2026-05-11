import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { CustomCursor } from "@/components/cursor";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background cursor-none">
      <CustomCursor />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border bg-background text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Designed & Built with Intention.</p>
      </footer>
      <BackToTop />
    </div>
  );
}
