import { motion } from "framer-motion";
import { History, Target, Users } from "lucide-react";
import { easeAlt } from "../../../../lib/animations";

const highlights = [
  {
    icon: History,
    title: "Nuestra historia",
    text: "Iniciamos como un pequeño equipo con grandes ideas. Hoy trabajamos con startups y empresas que confían en nuestro compromiso.",
  },
  {
    icon: Target,
    title: "Misión",
    text: "Empoderar a nuestros clientes con soluciones tecnológicas sólidas y modernas que potencien su crecimiento.",
  },
  {
    icon: Users,
    title: "Equipo",
    text: "Somos un grupo de desarrolladores, diseñadores y estrategas apasionados por transformar ideas en realidades digitales.",
  },
];

export default function AboutHighlights() {
  return (
    <div className="space-y-4">
      {highlights.map((item, idx) => (
        <motion.div
          key={item.title}
          className="group flex items-start gap-5 p-8 rounded-2xl border border-white/5 hover:border-electricBlue/20  /20 hover: /40 transition-all duration-500"
          initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
           transition={{ delay: idx * 0.1, duration: 0.6, ease: easeAlt }}
          viewport={{ once: true }}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electricBlue/10 flex items-center justify-center group-hover:bg-electricBlue/20 transition-all">
            <item.icon className="w-6 h-6 text-electricBlue" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-antiFlashWhite mb-2 group-hover:text-electricBlue transition-colors duration-500">{item.title}</h3>
            <p className="text-stone/60 leading-relaxed group-hover:text-stone/80 transition-colors duration-500">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
