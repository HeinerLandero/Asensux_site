import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";
import { ease, fadeUp, once } from "../../lib/animations";

export default function CallToActionSection() {
  return (
    <section
      id="cta"
      className="relative    from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden overflow-hidden"
    >
      {/* Patrón de fondo y luz */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-electricBlue/20 blur-3xl rounded-full -bottom-40 -right-40 -z-10" />

      {/* Contenido */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={once}
        >
          ¿Listo para llevar tu empresa al siguiente nivel?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          viewport={once}
        >
          Hablemos sobre tu idea. El equipo de <strong>Asensux</strong> está listo para construir algo increíble contigo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          viewport={once}
        >
          <Link
            to="/contacto"
            className={ctaBase}
          >
            Contáctanos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
