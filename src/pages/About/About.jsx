import AboutHighlights from "./components/AboutHighlights/AboutHighlights";
import AboutIntro from "./components/AboutIntro/AboutIntro";
import FAQSection from "./components/FAQSection/FAQSection";
import TeamSection from "./components/TeamSection/TeamSection";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";

export default function About() {
  return (
    <CircuitBackground>
      <section className="bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite py-32 px-6">
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
