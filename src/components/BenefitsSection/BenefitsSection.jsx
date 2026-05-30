import { motion } from "framer-motion";
import { Zap, Target, Wrench } from "lucide-react";
import { ease, fadeUp, once } from "../../lib/animations";

const benefits = [
    {
        icon: Zap,
        title: "Entrega Rápida",
        description: "Nuestro enfoque ágil permite lanzar productos hasta 3 veces más rápido que el promedio del mercado.",
    },
    {
        icon: Target,
        title: "Enfoque en Resultados",
        description: "Creamos soluciones que impactan directamente en tus métricas clave: conversiones, retención y escalabilidad.",
    },
    {
        icon: Wrench,
        title: "Tecnología Moderna",
        description: "Usamos herramientas de última generación para ofrecer productos seguros, mantenibles y listos para crecer.",
    },
];

export default function BenefitsSection() {
    return (
        <section className="   from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Heading + description */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={once}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            ¿Por qué elegir{" "}
                            <span className="text-electricBlue">Asensux</span>?
                        </h2>
                        <p className="text-stone/70 text-lg leading-relaxed max-w-lg">
                            No solo escribimos código. Entendemos tu negocio, diseñamos la solución correcta y la entregamos a tiempo. Cada proyecto es una oportunidad para demostrar que la tecnología bien hecha genera resultados reales.
                        </p>
                    </motion.div>

                    {/* Right: Benefits list */}
                    <motion.div className="space-y-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={once} transition={{ delay: 0.15 }}>
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease }}
                                viewport={once}
                                className="group flex items-start gap-5 p-6 rounded-2xl border border-white/5 hover:border-electricBlue/20  /20 hover: /40 transition-all duration-500"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electricBlue/10 flex items-center justify-center group-hover:bg-electricBlue/20 transition-all">
                                    <b.icon className="w-6 h-6 text-electricBlue" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-antiFlashWhite mb-1">{b.title}</h3>
                                    <p className="text-stone/70 text-sm leading-relaxed">{b.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
