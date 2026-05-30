import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { ease, once } from "../../../../lib/animations";

const features = [
  {
    icon: CheckCircle,
    title: "Enfoque personalizado",
    text: "Adaptamos cada solución a tus necesidades y objetivos de negocio.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    text: "Cumplimos los tiempos de desarrollo con procesos iterativos y ágiles.",
  },
  {
    icon: Shield,
    title: "Soporte confiable",
    text: "Ofrecemos mantenimiento y soporte post-lanzamiento sin complicaciones.",
  },
  {
    icon: Zap,
    title: "Tecnología moderna",
    text: "Usamos frameworks actuales para escalar tu producto digital sin limitaciones.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className=" Dark text-antiFlashWhite py-32 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
        initial="hidden"
        whileInView="visible"
        viewport={once}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Por qué <span className="text-electricBlue">elegirnos</span>?
          </h2>
          <p className="text-stone/70 max-w-lg mx-auto">
            Nos destacamos por nuestro compromiso, innovación y acompañamiento constante.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group flex items-start gap-5 p-8 rounded-2xl border border-white/5 hover:border-electricBlue/20  /20 hover: /40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease }}
              viewport={once}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electricBlue/10 flex items-center justify-center group-hover:bg-electricBlue/20 transition-all">
                <feature.icon className="w-6 h-6 text-electricBlue" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-antiFlashWhite mb-2 group-hover:text-electricBlue transition-colors duration-500">{feature.title}</h3>
                <p className="text-stone/60 text-sm leading-relaxed group-hover:text-stone/80 transition-colors duration-500">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
