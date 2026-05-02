import { motion } from "framer-motion";
import { History, Target, Users } from "lucide-react";
import AboutCard from "../AboutCard/AboutCard";

const highlights = [
  {
    title: "Nuestra historia",
    icon: <History className="w-5 h-5" />,
    text: "Iniciamos como un pequeño equipo con grandes ideas. Hoy trabajamos con startups y empresas que confían en nuestro compromiso.",
  },
  {
    title: "Misión",
    icon: <Target className="w-5 h-5" />,
    text: "Empoderar a nuestros clientes con soluciones tecnológicas sólidas y modernas que potencien su crecimiento.",
  },
  {
    title: "Equipo",
    icon: <Users className="w-5 h-5" />,
    text: "Somos un grupo de desarrolladores, diseñadores y estrategas apasionados por transformar ideas en realidades digitales.",
  },
];

export default function AboutHighlights() {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-4"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
      }}
      viewport={{ once: true }}
    >
      {highlights.map((item, idx) => (
        <AboutCard key={item.title} {...item} index={idx} />
      ))}
    </motion.div>
  );
}
