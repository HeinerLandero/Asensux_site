import AboutHighlights from "./components/AboutHighlights/AboutHighlights";
import AboutIntro from "./components/AboutIntro/AboutIntro";
import FAQSection from "./components/FAQSection/FAQSection";
import TeamSection from "./components/TeamSection/TeamSection";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-richBlack to-black text-antiFlashWhite py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AboutIntro />
        <AboutHighlights />
        <FAQSection/>
        <TeamSection/>
      </div>
    </section>
  );
}
