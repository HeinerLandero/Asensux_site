import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // si usas shadcn/ui

export default function CallToActionSection() {
  return (
    <section
      id="cta"
      className="relative relative bg-gradient-to-r from-richBlack to-black  bg-richBlack py-24 px-6 text-white overflow-hidden"
    >
      {/* Patrón de fondo y luz */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-caribbeanGreen/20 blur-3xl rounded-full -bottom-40 -right-40 -z-10" />

      {/* Contenido */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Listo para llevar tu empresa al siguiente nivel?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hablemos sobre tu idea. El equipo de <strong>Asensux</strong> está listo para construir algo increíble contigo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-caribbeanGreen hover:bg-caribbeanGreen/80 text-black font-semibold text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,223,129,0.4)] transition"
          >
            Contáctanos <ArrowRight className="inline ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
