import './Home.scss';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import CallToActionSection from '../../components/CallToActionSection/CallToActionSection';
import TechStackSection from '../../components/TechStackSection/TechStackSection';
import WorkProcessSection from '../../components/WorkProcessSection/WorkProcessSection';
import ClientsSection from '../../components/ClientsSection/ClientsSection';

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
      <ClientsSection />
    </>
  );
}

