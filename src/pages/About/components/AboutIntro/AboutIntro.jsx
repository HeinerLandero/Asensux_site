import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Sobre <span className="text-caribbeanGreen">Asensux</span>
      </h1>
      <p className="text-stone text-lg max-w-3xl mx-auto">
        Nacimos con el propósito de impulsar productos digitales con un enfoque claro en calidad, diseño y tecnología.
      </p>
    </motion.div>
  );
}