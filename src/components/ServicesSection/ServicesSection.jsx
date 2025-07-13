import { motion } from "framer-motion";
import {
    Code2,
    MonitorSmartphone,
    ServerCog,
    Users2,
    ShieldCheck,
    Bot
} from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-10 h-10 text-caribbeanGreen" />,
        title: "Desarrollo web",
        desc: "Aplicaciones a medida con tecnologías modernas y escalables."
    },
    {
        icon: <MonitorSmartphone className="w-10 h-10 text-caribbeanGreen" />,
        title: "Apps móviles",
        desc: "Soluciones móviles fluidas, intuitivas y multiplataforma."
    },
    {
        icon: <ServerCog className="w-10 h-10 text-caribbeanGreen" />,
        title: "Backend & APIs",
        desc: "Arquitectura robusta, segura y conectada a tu negocio."
    },
    {
        icon: <Users2 className="w-10 h-10 text-caribbeanGreen" />,
        title: "Experiencia de usuario",
        desc: "Interfaces centradas en el usuario para máxima conversión."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-caribbeanGreen" />,
        title: "Seguridad & DevOps",
        desc: "Automatización, despliegue y monitoreo continuo."
    },
    {
        icon: <Bot className="w-10 h-10 text-caribbeanGreen" />,
        title: "IA & Bots",
        desc: "Automatiza procesos con asistentes inteligentes y chatbots."
    }
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative bg-gradient-to-r from-richBlack to-black  py-24 bg-darkGreen text-antiFlashWhite px-6"
        >
            {/* Patrón de fondo */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            {/* Halo de luz */}
            <div className="absolute w-[500px] h-[500px] bg-caribbeanGreen/25 blur-3xl rounded-full -top-32 -left-32 -z-10" />

            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Servicios que impulsan tu negocio
            </motion.h2>

            <motion.p
                className="mt-6 text-lg text-center text-antiFlashWhite/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                viewport={{ once: true }}
            >
                Nuestro equipo te acompaña desde la estrategia hasta la ejecución, diseñando soluciones que se adaptan a tu visión.
            </motion.p>

            {/* Grid de servicios */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {services.map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="bg-richBlack/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-[0_0_25px_rgba(0,223,129,0.4)] transition duration-300 group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-caribbeanGreen/10 rounded-full p-3 w-fit">
                            {s.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-antiFlashWhite">{s.title}</h3>
                        <p className="text-antiFlashWhite/70 text-sm">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
