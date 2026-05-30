import HeroSection from '../../components/HeroSection/HeroSection';
import WorkProcessSection from '../../components/WorkProcessSection/WorkProcessSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TechStackSection from '../../components/TechStackSection/TechStackSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import ClientsSection from '../../components/ClientsSection/ClientsSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import CircuitBackground from '../../components/CircuitBackground/CircuitBackground';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CircuitBackground>
        <WorkProcessSection />
        <ProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <AboutSection />
        <TestimonialsSection />
        <ClientsSection />
        <BenefitsSection />
        <ContactSection />
      </CircuitBackground>
    </>
  );
}

