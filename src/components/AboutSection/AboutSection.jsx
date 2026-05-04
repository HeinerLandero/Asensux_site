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
      className="relative bg-gradient-to-r from-richBlack to-darkGreen py-32 text-antiFlashWhite px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
      <div className="absolute w-[550px] h-[550px] bg-caribbeanGreen/15 rounded-full blur-3xl -z-10 -top-40 -right-40" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-caribbeanGreen/70 text-sm font-medium tracking-widest uppercase mb-4">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Transformamos ideas en{" "}
            <span className="text-caribbeanGreen">soluciones que generan valor</span>.
          </h2>
          <p className="mt-6 text-lg text-stone/70 max-w-2xl mx-auto leading-relaxed">
            Desde apps web hasta infraestructura en la nube: combinamos talento,
            metodologías ágiles y pasión por la innovación para que tu empresa crezca sin límites.
          </p>
        </motion.div>

        {/* Horizontal feature cards */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group flex items-start gap-6 p-8 rounded-2xl border border-white/5 hover:border-caribbeanGreen/20 bg-darkGreen/20 hover:bg-darkGreen/40 transition-all duration-500"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-caribbeanGreen/10 flex items-center justify-center group-hover:bg-caribbeanGreen/20 transition-all">
                <f.icon className="w-7 h-7 text-caribbeanGreen" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-antiFlashWhite mb-2 group-hover:text-caribbeanGreen transition-colors duration-500">
                  {f.title}
                </h3>
                <p className="text-stone/60 leading-relaxed group-hover:text-stone/80 transition-colors duration-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
