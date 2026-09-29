import { Navbar } from "@/components/Navbar";
import Backdrop from "@/components/Backdrop";
import Marquee from "@/components/Marquee";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const STACK = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "React",
  "Docker",
  "AWS ECS",
  "GitHub Actions",
  "WebSockets",
  "MySQL",
  "Git",
  "REST APIs",
  "JWT",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Backdrop />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Marquee items={STACK} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
