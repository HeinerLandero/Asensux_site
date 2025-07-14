import { motion } from "framer-motion";
import { FaSearch, FaCode, FaRocket, FaHandshake, FaCogs } from "react-icons/fa";

const steps = [
    {
        icon: <FaSearch className="text-caribbeanGreen text-4xl" />,
        title: "1. Descubrimiento",
        description:
            "Escuchamos tus necesidades, analizamos tu mercado y definimos los objetivos del proyecto.",
    },
    {
        icon: <FaHandshake className="text-caribbeanGreen text-4xl" />,
        title: "2. Propuesta",
        description:
            "Te entregamos una propuesta detallada con cronograma, herramientas y costos estimados.",
    },
    {
        icon: <FaCogs className="text-caribbeanGreen text-4xl" />,
        title: "3. Desarrollo",
        description:
            "Creamos tu solución usando tecnologías modernas, con revisiones iterativas y comunicación constante.",
    },
    {
        icon: <FaRocket className="text-caribbeanGreen text-4xl" />,
        title: "4. Entrega & Lanzamiento",
        description:
            "Publicamos tu producto, te capacitamos y te entregamos toda la documentación.",
    },
    {
        icon: <FaCode className="text-caribbeanGreen text-4xl" />,
        title: "5. Soporte & Evolución",
        description:
            "Ofrecemos mantenimiento y mejoras para seguir impulsando tu crecimiento digital.",
    },
];

export default function WorkProcessSection() {
    return (
        <section className="bg-gradient-to-r from-richBlack to-black py-20 px-6 text-antiFlashWhite">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Nuestro{" "}
                    <span className="text-caribbeanGreen">proceso de trabajo</span>
                </motion.h2>

                <motion.p
                    className="text-stone mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Nos adaptamos a tus necesidades, pero seguimos una estructura clara
                    para garantizar resultados.
                </motion.p>

                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="bg-darkGreen p-6 rounded-xl border border-[#ffffff] text-left shadow-sm hover:shadow-[0_0_30px_2px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 flex justify-center">{step.icon}</div>
                            <h3 className="text-lg font-semibold text-center mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-stone text-center">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
