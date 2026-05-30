import { motion } from "framer-motion";
import { ease, once } from "../../../../lib/animations";

export default function ProductosIntro() {
  return (
    <section className="relative    from-navyDark to-navy text-antiFlashWhite min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 z-0">
      <div className="overlay-hero inset-0 pointer-events-none "></div>
      <motion.div
        className="text-center relative z-10"
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
        initial="hidden"
        whileInView="visible"
        viewport={once}
      >
        <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight">
          Nuestros{" "}
          <span className="text-electricBlue relative inline-block">
            Productos
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
          Descubre nuestros productos tecnológicos innovadores diseñados para impulsar tu negocio.
        </motion.p>
      </motion.div>

    </section>
  );
}