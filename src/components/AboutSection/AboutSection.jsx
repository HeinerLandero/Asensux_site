import { motion } from "framer-motion";
import {
  Cpu,
  Palette,
  CloudCog
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Ingeniería de software",
    desc: "Productos digitales robustos, escalables y a medida."
  },
  {
    icon: Palette,
    title: "Multimedia & UX",
    desc: "Diseño centrado en el usuario para experiencias memorables."
  },
  {
    icon: CloudCog,
    title: "Infraestructura & DevOps",
    desc: "Cloud, CI/CD y monitoreo que mantienen tu negocio en línea 24/7."
  }
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite py-16 sm:py-24 md:py-32 px-4 sm:px-6 justify-center items-center"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
      <div className="absolute w-[550px] h-[550px] bg-electricBlue/15 rounded-full blur-3xl -z-10 -top-40 -right-40" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-electricBlue/70 text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Quiénes somos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Transformamos ideas en{" "}
            <span className="text-electricBlue">soluciones que generan valor</span>.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone/70 max-w-2xl mx-auto leading-relaxed">
            Desde apps web hasta infraestructura en la nube: combinamos talento,
            metodologías ágiles y pasión por la innovación para que tu empresa crezca sin límites.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 hover:border-electricBlue/20 bg-navy/30 hover:bg-navy/50 transition-all duration-500"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-electricBlue/10 flex items-center justify-center group-hover:bg-electricBlue/20 transition-all">
                <f.icon className="w-5 sm:w-7 h-5 sm:h-7 text-electricBlue" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-xl font-semibold text-antiFlashWhite mb-1 sm:mb-2 group-hover:text-electricBlue transition-colors duration-500">
                  {f.title}
                </h3>
                <p className="text-stone/60 leading-relaxed text-sm sm:text-base group-hover:text-stone/80 transition-colors duration-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
