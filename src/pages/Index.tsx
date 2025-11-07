import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Projects from "@/components/Projects";
import ArtGallery from "@/components/ArtGallery";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import LanguageSwitch from "@/components/LanguageSwitch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitch />
      <Hero />
      <ValueProposition />
      <Projects />
      <ArtGallery />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
