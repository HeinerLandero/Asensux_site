import "./Services.scss";
import ServicesIntro from "./components/ServicesIntro/ServicesIntro";
import ServiceList from "./components/ServiceList/ServiceList";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import ClientLogosSection from "./components/ClientLogosSection/ClientLogosSection";
import ContactFormSection from "./components/ContactFormSection/ContactFormSection";

export default function Services() {
  return (
    <>
      <ServicesIntro />
      <section className="bg-gradient-to-r from-richBlack to-black bg-richBlack text-antiFlashWhite py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ServiceList />
          <WhyChooseUsSection />
          <ClientLogosSection />
          <ContactFormSection/>
        </div>
      </section>
    </>
  );
}
