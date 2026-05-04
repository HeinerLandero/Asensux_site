import { motion } from "framer-motion";

export default function ProductosIntro() {
  return (
    <section className="relative flex bg-gradient-to-r from-richBlack to-darkGreen h-screen justify-center items-center">
      <div className="overlay-hero inset-0 pointer-events-none "></div>
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight">
          Nuestros{" "}
          <span className="text-caribbeanGreen relative inline-block">
            Productos
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
          Descubre nuestros productos tecnológicos innovadores diseñados para impulsar tu negocio.
        </motion.p>
      </motion.div>

    </section>
  );
}