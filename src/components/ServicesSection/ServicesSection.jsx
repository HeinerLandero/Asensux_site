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
        icon: <Code2 className="w-8 h-8 text-caribbeanGreen" />,
        title: "Desarrollo web",
        desc: "Aplicaciones a medida con React, Node y Laravel. Escalables desde el día uno."
    },
    {
        icon: <MonitorSmartphone className="w-8 h-8 text-caribbeanGreen" />,
        title: "Apps móviles",
        desc: "React Native y Flutter. Una base de código, iOS y Android nativos."
    },
    {
        icon: <ServerCog className="w-8 h-8 text-caribbeanGreen" />,
        title: "Backend & APIs",
        desc: "Arquitectura REST y GraphQL. Base de datos, autenticación y despliegue automatizado."
    },
    {
        icon: <Users2 className="w-8 h-8 text-caribbeanGreen" />,
        title: "Experiencia de usuario",
        desc: "Prototipado, testing con usuarios e interfaces que convierten visitantes en clientes."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-caribbeanGreen" />,
        title: "Seguridad & DevOps",
        desc: "CI/CD, monitoreo 24/7, backups automáticos. Tu producto siempre disponible."
    },
    {
        icon: <Bot className="w-8 h-8 text-caribbeanGreen" />,
        title: "IA & Bots",
        desc: "Chatbots, asistentes inteligentes y automatización de procesos con modelos de lenguaje."
    }
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative bg-gradient-to-r from-richBlack to-darkGreen py-32 text-antiFlashWhite px-6"
        >
            {/* Patrón de fondo */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            {/* Halo de luz */}
            <div className="absolute w-[500px] h-[500px] bg-caribbeanGreen/25 blur-3xl rounded-full -top-32 -left-32 -z-10" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Lo que hacemos
                    </h2>
                    <p className="mt-4 text-lg text-antiFlashWhite/70 max-w-xl mx-auto">
                        De la idea al producto. Cada servicio está pensado para que tu empresa avance sin fricción.
                    </p>
                </motion.div>

                {/* Asymmetric grid — first item full width, rest in 2 columns */}
                <div className="grid gap-4 md:grid-cols-2">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            className={`group flex items-start gap-5 p-6 rounded-2xl border border-white/5 hover:border-caribbeanGreen/30 bg-darkGreen/20 hover:bg-darkGreen/40 transition-all duration-300 cursor-default ${i === 0 ? 'md:col-span-2' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-caribbeanGreen/10 flex items-center justify-center group-hover:bg-caribbeanGreen/20 group-active:scale-[0.95] transition-all">
                                {s.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-antiFlashWhite mb-1">{s.title}</h3>
                                <p className="text-antiFlashWhite/60 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
