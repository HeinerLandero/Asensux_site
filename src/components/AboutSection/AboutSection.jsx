import { motion } from "framer-motion";
import {
  Cpu,
  Palette,
  CloudCog
} from "lucide-react"; 

const features = [
  {
    icon: <Cpu className="w-12 h-12 text-caribbeanGreen" />,
    title: "Ingeniería de software",
    desc: "Productos digitales robustos, escalables y a medida."
  },
  {
    icon: <Palette className="w-12 h-12 text-caribbeanGreen" />,
    title: "Multimedia & UX",
    desc: "Diseño centrado en el usuario para experiencias memorables."
  },
  {
    icon: <CloudCog className="w-12 h-12 text-caribbeanGreen" />,
    title: "Infraestructura & DevOps",
    desc: "Cloud, CI/CD y monitoreo que mantienen tu negocio en línea 24/7."
  }
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-richBlack to-black py-24 text-antiFlashWhite flex flex-col items-center px-6 overflow-hidden"
    >
      {/* grid decorativa */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />

      {/* halo verde detrás de la sección */}
      <div className="absolute w-[550px] h-[550px] bg-caribbeanGreen/20 rounded-full blur-3xl -z-10 -top-40 -right-40" />

      {/* título */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Transformamos ideas en{" "}
        <span className="text-caribbeanGreen">soluciones que generan valor</span>.
      </motion.h2>

      {/* párrafo lead */}
      <motion.p
        className="mt-6 text-lg text-antiFlashWhite/80 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Desde apps web hasta infraestructura en la nube: combinamos talento,
        metodologías ágiles y pasión por la innovación para que tu empresa crezca sin límites.
      </motion.p>

      {/* grid de pilares */}
      <div className="mt-16  grid gap-10 md:grid-cols-3 w-full max-w-6xl">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="group flex flex-col items-center text-center p-10 rounded-3xl bg-darkGreen/40 backdrop-blur-md border border-white/10 shadow-[0_0_20px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_2px_rgba(255,255,255,0.4)] transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            {f.icon}
            <h3 className="font-semibold text-2xl mt-6 mb-3 text-antiFlashWhite">
              {f.title}
            </h3>
            <p className="text-antiFlashWhite/70 text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
