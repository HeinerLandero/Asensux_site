import { motion } from "framer-motion";
import { ease, once } from "../../../../lib/animations";

export default function ServicesIntro() {
  return (
    <section className="   from-navyDark to-navy text-antiFlashWhite py-32 px-6  justify-center items-center">
      <motion.div
        className="text-center "
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
        initial="hidden"
        whileInView="visible"
        viewport={once}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Nuestros{" "}
          <span className="text-electricBlue relative inline-block">
            Servicios
            <motion.span
              className="absolute left-0 -bottom-1 h-[3px] w-full bg-electricBlue rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5, ease }}
              viewport={once}
            />
          </span>
        </h1>
        <motion.p
          className="text-stone text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease }}
          viewport={once}
        >
          Brindamos soluciones personalizadas que transforman ideas en productos tecnológicos robustos y escalables.
        </motion.p>
      </motion.div>

    </section>
  );
}
