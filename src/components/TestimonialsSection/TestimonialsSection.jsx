import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";

const testimonials = [
    {
        name: "Camila R.",
        role: "CEO en Startify",
        text: "Con Asensux logramos lanzar nuestro producto 3 veces más rápido. Su enfoque en calidad y diseño fue clave para nuestro éxito.",
    },
    {
        name: "Luis M.",
        role: "CTO en NovaTech",
        text: "El equipo de Asensux nos brindó una infraestructura escalable y segura. Desde entonces, no hemos tenido caídas.",
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
            perView: 2,
            spacing: 20,
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            timer.current = setInterval(() => {
                instanceRef.current.next();
            }, 5000);
        }

        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        };
    }, [instanceRef]);

    return (
        <section className="bg-gradient-to-r from-richBlack to-black bg-richBlack py-20 px-6 text-antiFlashWhite">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    Lo que dicen nuestros <span className="text-caribbeanGreen">clientes</span>
                </h2>
                <div ref={sliderRef} className="keen-slider">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="keen-slider__slide bg-darkGreen p-8 rounded-xl border border-[#004e3a] shadow-lg"
                        >
                            <p className="text-gray-300 italic mb-6">“{t.text}”</p>
                            <div className="text-caribbeanGreen font-semibold">{t.name}</div>
                            <div className="text-sm text-stone">{t.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
