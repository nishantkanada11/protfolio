import Hero from "../components/home/Hero";
import TechMarquee from "../components/home/TechMarquee";
import WhyChooseMe from "../components/home/WhyChooseMe";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ExperienceSection from "../components/home/ExperienceSection";
import ContactSection from "../components/home/ContactSection";


const Home = () => {
  return (
    <>
      <Hero />

      <TechMarquee />

      <WhyChooseMe />

      <AboutSection />

      <ServicesSection />

      <ExperienceSection />

      <ContactSection />
    </>
  );
};

export default Home;