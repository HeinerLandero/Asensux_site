import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Qué tipo de soluciones ofrece Asensux?",
    answer:
      "Ofrecemos desarrollo web, apps móviles, sistemas administrativos y herramientas personalizadas para automatizar procesos empresariales.",
  },
  {
    question: "¿Asensux trabaja con startups?",
    answer:
      "Sí, ayudamos a startups a lanzar sus productos digitales rápidamente con una base tecnológica sólida y escalable.",
  },
  {
    question: "¿Ofrecen soporte después del desarrollo?",
    answer:
      "Sí. Nuestros planes incluyen mantenimiento y soporte técnico para asegurar la continuidad del servicio.",
  },
  {
    question: "¿Los proyectos son personalizados?",
    answer:
      "Sí, adaptamos cada solución a las necesidades específicas de cada cliente para garantizar resultados óptimos.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-richBlack text-antiFlashWhite py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Preguntas <span className="text-caribbeanGreen">Frecuentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-darkGreen rounded-xl p-4 bg-darkGreen/40"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-caribbeanGreen text-2xl transition-transform duration-300"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    key="answer"
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-stone/70 overflow-hidden"
                    role="region"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
