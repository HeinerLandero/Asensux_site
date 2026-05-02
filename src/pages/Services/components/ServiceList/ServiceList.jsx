import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Globe, Cog, Cloud } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web",
    icon: Globe,
    text: "Creamos sitios y aplicaciones modernas, rápidas y seguras.",
  },
  {
    title: "Transformación Digital",
    icon: Cog,
    text: "Ayudamos a migrar tus procesos tradicionales al mundo digital.",
  },
  {
    title: "Infraestructura Cloud",
    icon: Cloud,
    text: "Diseñamos arquitecturas escalables y seguras en la nube.",
  },
];

export default function ServiceList() {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {services.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <ServiceCard {...item} />
        </motion.div>
      ))}
    </div>
  );
}
