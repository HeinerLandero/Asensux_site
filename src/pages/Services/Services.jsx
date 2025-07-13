import "./Services.scss";
import ServicesIntro from "./components/ServicesIntro/ServicesIntro";
import ServiceList from "./components/ServiceList/ServiceList";

export default function Services() {
  return (
    <section className="bg-gradient-to-r from-richBlack to-black bg-richBlack text-antiFlashWhite py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ServicesIntro />
        <ServiceList />
      </div>
    </section>
  );
}
