import HeroSection from '../../components/HeroSection/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import TechStackSection from '../../components/TechStackSection/TechStackSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import CallToActionSection from '../../components/CallToActionSection/CallToActionSection';
import WorkProcessSection from '../../components/WorkProcessSection/WorkProcessSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServicesSection />
      <ContactSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BenefitsSection />
      <CallToActionSection />
      <WorkProcessSection />
    </>
  );
}

