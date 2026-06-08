import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { ease, letterReveal as lr } from "../../lib/animations";
import homeImg from "@/assets/images/homeimage.webp";

const letterReveal = (i) => lr(i * 0.06);

const line1 = "Construimos".split("");
const line2 = "el software".split("");
const line3 = "que hace crecer".split("");
const line4 = "tu negocio.".split("");

function AnimatedLine({ words, baseDelay }) {
  return (
    <span className="block overflow-hidden">
      {words.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={letterReveal(baseDelay + i)}
          initial="hidden"
          animate="visible"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const mockupRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-bgDeep"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80dvh]">
          <motion.div
            className="max-w-xl"
            style={{ opacity: contentOpacity }}
          >
            <motion.p
              className="text-electricBlue font-body text-sm font-medium uppercase tracking-[0.15em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
            >
              Software studio · Colombia
            </motion.p>

            <motion.h1
              className="font-display text-[clamp(2.8rem,7vw,4.5rem)] font-bold leading-[0.95] -tracking-[0.04em] text-antiFlashWhite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01 }}
            >
              <AnimatedLine words={line1} baseDelay={0.15} />
              <AnimatedLine words={line2} baseDelay={0.15 + line1.length * 0.06} />
              <AnimatedLine words={line3} baseDelay={0.15 + (line1.length + line2.length) * 0.06} />
              <span className="text-electricBlue">
                <AnimatedLine words={line4} baseDelay={0.15 + (line1.length + line2.length + line3.length) * 0.06} />
              </span>
            </motion.h1>

            <motion.p
              className="font-body text-lg text-stone leading-relaxed max-w-lg mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease }}
            >
              Desarrollo web, apps moviles e IA para empresas que quieren resultados reales, no promesas.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease }}
            >
              <Link
                to="/servicios"
                className="group inline-flex items-center gap-2 bg-electricBlue hover:bg-electricBlueLight text-antiFlashWhite font-body font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_30px_rgba(0,116,217,0.25)] hover:shadow-[0_0_50px_rgba(0,116,217,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Descubre como lo hacemos
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portafolio"
                className="group inline-flex items-center gap-2 border border-white/10 hover:border-electricBlue/30 text-antiFlashWhite/80 hover:text-antiFlashWhite font-body font-medium px-8 py-4 rounded-xl transition-all duration-300 ease-out hover:bg-white/5"
              >
                <Play className="w-4 h-4" />
                Ver proyectos
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center relative"
            style={{ y: mockupY, rotate: mockupRotate }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-10 bg-electricBlue/10 rounded-[32px] blur-[80px]" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-electricBlue/20 via-transparent to-electricBlue/10 rounded-[24px] blur-[40px]" />
              <motion.div
                className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={homeImg}
                  alt="Asensux Home"
                  className="w-full h-auto"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgDeep/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-electricBlue/10 rounded-full blur-[30px]" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-electricBlue/15 rounded-full blur-[25px]" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center pt-2"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-electricBlue"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
