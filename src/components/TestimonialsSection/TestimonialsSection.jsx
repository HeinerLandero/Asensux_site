import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Camila R.",
        role: "CEO en Startify",
        text: "Con kambio logramos lanzar nuestro producto 3 veces más rápido. Su enfoque en calidad y diseño fue clave para nuestro éxito.",
    },
    {
        name: "Luis M.",
        role: "CTO en NovaTech",
        text: "El equipo de kambio nos brindó una infraestructura escalable y segura. Desde entonces, no hemos tenido caídas.",
    },
    {
        name: "Valeria T.",
        role: "Marketing Lead en Uplift",
        text: "Una experiencia increíble. Comunicación clara, entregas a tiempo y resultados que superaron nuestras expectativas.",
    },
];

export default function TestimonialsCarousel() {
    const timer = useRef(null);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        slides: {
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 24 },
            },
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            timer.current = setInterval(() => {
                instanceRef.current?.next();
            }, 6000);
        }
        return () => {
            clearInterval(timer.current);
        };
    }, [instanceRef]);

    return (
        <section className="bg-gradient-to-r from-richBlack to-black py-20 px-6 text-antiFlashWhite">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    Lo que dicen nuestros <span className="text-caribbeanGreen">clientes</span>
                </h2>

                {/* 🚫 No pongas animación en este div */}
                <div ref={sliderRef} className="keen-slider hover:overflow-y-visible py-2">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="keen-slider__slide bg-darkGreen p-8 rounded-xl border border-[#ffffff] shadow-md transition-all duration-300 hover:scale-[1.02]"
                        >
                            <motion.p
                                className="text-gray-300 italic mb-6 text-lg leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                “{t.text}”
                            </motion.p>
                            <motion.div
                                className="text-caribbeanGreen font-semibold text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.25 + 0.2 }}
                                viewport={{ once: true }}
                            >
                                {t.name}
                            </motion.div>
                            <motion.div
                                className="text-sm text-stone"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.25 + 0.4 }}
                                viewport={{ once: true }}
                            >
                                {t.role}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
