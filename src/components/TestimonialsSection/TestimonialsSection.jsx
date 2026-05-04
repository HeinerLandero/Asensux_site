import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Camila Restrepo",
        role: "CEO, Startify",
        text: "Lanzamos nuestro producto 3 veces más rápido de lo previsto. El equipo entendió el problema desde el primer día y entregó exactamente lo que necesitábamos.",
    },
    {
        name: "Luis Mendoza",
        role: "CTO, NovaTech",
        text: "La infraestructura que nos construyeron lleva 8 meses sin una sola caída. Eso para nosotros es tranquilidad pura.",
    },
    {
        name: "Valeria Torres",
        role: "Marketing Lead, Uplift",
        text: "Entregas a tiempo, comunicación directa y un producto final que superó lo que teníamos en mente. Raro de encontrar.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-gradient-to-r from-richBlack to-darkGreen py-32 px-6 text-antiFlashWhite">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-caribbeanGreen/70 text-sm font-medium tracking-widest uppercase mb-4">
                        Testimonios
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Lo que dicen nuestros <span className="text-caribbeanGreen">clientes</span>
                    </h2>
                </motion.div>

                {/* Static grid — no carousel, no dots */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className="bg-darkGreen/40 p-8 rounded-2xl border border-white/5 hover:border-caribbeanGreen/20 transition-colors duration-500 text-left"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                        >
                            <p className="text-antiFlashWhite/80 leading-relaxed mb-6">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div>
                                <div className="font-semibold text-caribbeanGreen">{t.name}</div>
                                <div className="text-sm text-stone">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
