import { motion } from "framer-motion";
import { ease, once } from "../../../../lib/animations";

export default function AboutIntro() {
  return (
    <motion.div
      className="text-center mb-12"
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
      initial="hidden"
      whileInView="visible"
      viewport={once}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Sobre <span className="text-electricBlue">Asensux</span>
      </h1>
      <p className="text-stone text-lg max-w-3xl mx-auto">
        Nacimos con el propósito de impulsar productos digitales con un enfoque claro en calidad, diseño y tecnología.
      </p>
    </motion.div>
  );
}