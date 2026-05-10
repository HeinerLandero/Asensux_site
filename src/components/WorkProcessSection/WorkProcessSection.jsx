import { motion } from "framer-motion";
import { Search, FileText, Code, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Descubrimiento",
    description:
      "Escuchamos tus necesidades, analizamos tu mercado y definimos los objetivos del proyecto.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Propuesta",
    description:
      "Te entregamos una propuesta detallada con cronograma, herramientas y costos estimados.",
  },
  {
    icon: Code,
    step: "03",
    title: "Desarrollo",
    description:
      "Creamos tu solución usando tecnologías modernas, con revisiones iterativas y comunicación constante.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Entrega & Lanzamiento",
    description:
      "Publicamos tu producto, te capacitamos y te entregamos toda la documentación.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Soporte & Evolución",
    description:
      "Ofrecemos mantenimiento y mejoras para seguir impulsando tu crecimiento digital.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorkProcessSection() {
  return (
    <section className="bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-caribbeanGreen/5 blur-[140px] rounded-full top-1/3 left-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-caribbeanGreen/70 text-sm font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cómo trabajamos
          </motion.p>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-antiFlashWhite mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nuestro{" "}
            <span className="text-caribbeanGreen">proceso de trabajo</span>
          </motion.h2>

          <motion.p
            className="text-stone/70 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos adaptamos a tus necesidades, pero seguimos una estructura clara
            para garantizar resultados.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-px" />

          {/* Animated glow line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-24 w-px bg-gradient-to-b from-caribbeanGreen/40 to-transparent blur-[2px] pointer-events-none" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const variants = isEven ? itemVariants : itemVariantsRight;

              return (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-14 md:pl-0 ${
                      isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                    }`}
                  >
                    <div
                      className={`group inline-block bg-darkGreen/30 border border-white/5 hover:border-caribbeanGreen/20 p-6 md:p-8 rounded-2xl transition-all duration-500 hover:bg-darkGreen/50 ${
                        isEven ? "md:w-full" : "md:w-full"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="text-xs font-mono text-caribbeanGreen/50 tracking-wider">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-antiFlashWhite group-hover:text-caribbeanGreen transition-colors duration-500">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-stone/60 text-sm leading-relaxed group-hover:text-stone/80 transition-colors duration-500">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot + icon */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-richBlack border-2 border-caribbeanGreen/30 group-hover:border-caribbeanGreen shadow-[0_0_20px_rgba(0,223,129,0.15)] transition-all duration-500">
                      <step.icon
                        className="w-4 h-4 md:w-5 md:h-5 text-caribbeanGreen"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
