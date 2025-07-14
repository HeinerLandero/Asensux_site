// src/pages/Services/components/WhyChooseUsSection.tsx
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUserShield, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle className="text-caribbeanGreen text-3xl mb-4" />,
    title: "Enfoque personalizado",
    text: "Adaptamos cada solución a tus necesidades y objetivos de negocio.",
  },
  {
    icon: <FaClock className="text-caribbeanGreen text-3xl mb-4" />,
    title: "Entrega puntual",
    text: "Cumplimos los tiempos de desarrollo con procesos iterativos y ágiles.",
  },
  {
    icon: <FaUserShield className="text-caribbeanGreen text-3xl mb-4" />,
    title: "Soporte confiable",
    text: "Ofrecemos mantenimiento y soporte post-lanzamiento sin complicaciones.",
  },
  {
    icon: <FaBolt className="text-caribbeanGreen text-3xl mb-4" />,
    title: "Tecnología moderna",
    text: "Usamos frameworks actuales para escalar tu producto digital sin limitaciones.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="to-richBlack text-antiFlashWhite py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Por qué <span className="text-caribbeanGreen">elegirnos</span>?
        </h2>
        <p className="text-stone mb-12">
          Nos destacamos por nuestro compromiso, innovación y acompañamiento constante.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-darkGreen p-6 rounded-xl border border-[#ffffff] hover:border-caribbeanGreen shadow-md hover:shadow-neonGreen transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div>{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-stone">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
