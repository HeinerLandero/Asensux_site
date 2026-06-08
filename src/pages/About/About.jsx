import AboutHighlights from "./components/AboutHighlights/AboutHighlights";
import AboutIntro from "./components/AboutIntro/AboutIntro";
import FAQSection from "./components/FAQSection/FAQSection";
import TeamSection from "./components/TeamSection/TeamSection";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";
import SEO from "../../components/SEO/SEO";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { PAGES } from "../../lib/siteConfig";

export default function About() {
  return (
    <CircuitBackground>
      <SEO {...PAGES["/nosotros"]} canonical="/nosotros" />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Nosotros", url: "/nosotros" },
      ]} />
      <section className="   from-navyDark to-navy text-antiFlashWhite py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <AboutIntro />
          <AboutHighlights />
          <FAQSection/>
          <TeamSection/>
        </div>
      </section>
    </CircuitBackground>
  );
}
