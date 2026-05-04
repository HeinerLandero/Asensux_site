import ServicesIntro from "./components/ServicesIntro/ServicesIntro";
import ServiceList from "./components/ServiceList/ServiceList";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import ContactFormSection from "./components/ContactFormSection/ContactFormSection";

export default function Services() {
  return (
    <>
      <ServicesIntro />
      <section className="bg-gradient-to-r from-richBlack to-darkGreen text-antiFlashWhite py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ServiceList />
          <WhyChooseUsSection />
          <ContactFormSection/>
        </div>
      </section>
    </>
  );
}
