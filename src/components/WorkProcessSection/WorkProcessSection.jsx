// src/sections/WorkProcessSection.tsx
import { FaSearch, FaCode, FaRocket, FaHandshake, FaCogs } from "react-icons/fa";

const steps = [
    {
        icon: <FaSearch className="text-caribbeanGreen text-4xl mb-4" />,
        title: "1. Descubrimiento",
        description:
            "Escuchamos tus necesidades, analizamos tu mercado y definimos los objetivos del proyecto.",
    },
    {
        icon: <FaHandshake className="text-caribbeanGreen text-4xl mb-4" />,
        title: "2. Propuesta",
        description:
            "Te entregamos una propuesta detallada con cronograma, herramientas y costos estimados.",
    },
    {
        icon: <FaCogs className="text-caribbeanGreen text-4xl mb-4" />,
        title: "3. Desarrollo",
        description:
            "Creamos tu solución usando tecnologías modernas, con revisiones iterativas y comunicación constante.",
    },
    {
        icon: <FaRocket className="text-caribbeanGreen text-4xl mb-4" />,
        title: "4. Entrega & Lanzamiento",
        description:
            "Publicamos tu producto, te capacitamos y te entregamos toda la documentación.",
    },
    {
        icon: <FaCode className="text-caribbeanGreen text-4xl mb-4" />,
        title: "5. Soporte & Evolución",
        description:
            "Ofrecemos mantenimiento y mejoras para seguir impulsando tu crecimiento digital.",
    },
];

export default function WorkProcessSection() {
    return (
        <section className="bg-gradient-to-r from-richBlack to-black bg-richBlack py-20 px-6 text-antiFlashWhite">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Nuestro <span className="text-caribbeanGreen">proceso de trabajo</span>
                </h2>
                <p className="text-stone mb-12">
                    Nos adaptamos a tus necesidades, pero seguimos una estructura clara para garantizar resultados.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="bg-darkGreen p-6 rounded-xl border border-[#004e3a] hover:shadow-xl transition duration-300"
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-stone">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
