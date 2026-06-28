import TopBar from "@/components/portfolio/TopBar";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Stack from "@/components/portfolio/Stack";
import Timeline from "@/components/portfolio/Timeline";
import Commission from "@/components/portfolio/Commission";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-sans-editorial text-foreground">
      <TopBar />
      <Hero />
      <Projects />
      <Stack />
      <Timeline />
      <Commission />
      <Footer />
    </main>
  );
};

export default Index;
