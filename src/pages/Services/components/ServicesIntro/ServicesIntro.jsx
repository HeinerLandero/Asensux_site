// src/pages/Services/components/ServicesIntro.jsx
import { motion } from "framer-motion";

export default function ServicesIntro() {
  return (
    <motion.div
      className="text-center my-16 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight  ">
        Nuestros{" "}
        <span className="text-caribbeanGreen relative inline-block">
          Servicios
          <motion.span
            className="absolute left-0 -bottom-1 h-[3px] w-full bg-caribbeanGreen rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />
        </span>
      </h1>
      <motion.p
        className="text-stone text-lg max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Brindamos soluciones personalizadas que transforman ideas en productos tecnológicos robustos y escalables.
      </motion.p>
    </motion.div>
  );
}
