import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import ParallaxBanner from "@/components/ParallaxBanner";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EditModeToggle from "@/components/EditModeToggle";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <EditModeToggle />
      <main>
        <Hero />
        <StatsBar />
        <MarqueeBanner />
        <About />
        <VisionMission />
        <Services />
        <ParallaxBanner />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
