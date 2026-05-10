import ServicesIntro from "./components/ServicesIntro/ServicesIntro";
import ServiceList from "./components/ServiceList/ServiceList";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import ContactFormSection from "./components/ContactFormSection/ContactFormSection";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";

export default function Services() {
  return (
    <CircuitBackground>
      <ServicesIntro />
      <section className="bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ServiceList />
          <WhyChooseUsSection />
          <ContactFormSection/>
        </div>
      </section>
    </CircuitBackground>
  );
}
