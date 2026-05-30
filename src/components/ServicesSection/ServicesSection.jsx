import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, ServerCog, Users2, ShieldCheck, Bot } from "lucide-react";
import { ease, fadeUp, once } from "../../lib/animations";

const services = [
    {
        icon: <Code2 className="w-6 sm:w-8 h-6 sm:h-8 text-electricBlue" />,
        title: "Desarrollo web",
        desc: "Aplicaciones a medida con React, Node y Laravel. Escalables desde el día uno."
    },
    {
        icon: <MonitorSmartphone className="w-6 sm:w-8 h-6 sm:h-8 text-electricBlue" />,
        title: "Apps móviles",
        desc: "React Native y Flutter. Una base de código, iOS y Android nativos."
    },
    {
        icon: <ServerCog className="w-6 sm:w-8 h-6 sm:h-8 text-electricBlue" />,
        title: "Backend & APIs",
        desc: "Arquitectura REST y GraphQL. Base de datos, autenticación y despliegue automatizado."
    },
    {
        icon: <Users2 className="w-6 sm:w-8 h-6 sm:h-8 text-electricBlue" />,
        title: "Experiencia de usuario",
        desc: "Prototipado, testing con usuarios e interfaces que convierten visitantes en clientes."
    },
    {
        icon: <ShieldCheck className="w-6 sm:w-8 h-6 sm:h-8 text-electricBlue" />,
        title: "Seguridad & DevOps",
        desc: "CI/CD, monitoreo 24/7, backups automáticos. Tu producto siempre disponible."
    },
    {
        icon: <Bot className="w-6 sm:w-8 h-6 sm:h-8 text-electricBlue" />,
        title: "IA & Bots",
        desc: "Chatbots, asistentes inteligentes y automatización de procesos con modelos de lenguaje."
    }
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="   from-navyDark to-navy text-antiFlashWhite justify-center items-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden text-center"
        >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] bg-electricBlue/25 blur-3xl rounded-full -top-32 -left-32 -z-10" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="text-center mb-10 sm:mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={once}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                        Lo que hacemos
                    </h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-antiFlashWhite/70 max-w-xl mx-auto">
                        De la idea al producto. Cada servicio está pensado para que tu empresa avance sin fricción.
                    </p>
                </motion.div>

                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            className={`group flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl  /30 hover: /50 transition-all duration-300 cursor-default ${i === 0 ? 'md:col-span-2' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}
                            viewport={{ once: true }}
                        >
                            <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-electricBlue/10 flex items-center justify-center group-hover:bg-electricBlue/20 group-active:scale-[0.95] transition-all">
                                {s.icon}
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-antiFlashWhite mb-1">{s.title}</h3>
                                <p className="text-antiFlashWhite/60 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
