import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFirebase, SiVite } from "react-icons/si";
import { motion } from "framer-motion";

export default function TechStackSection() {
    const stack = [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
    ];

    return (
        <section className="bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden text-center">
            <motion.div
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
            >
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Tecnologías que{" "}
                    <span className="text-caribbeanGreen">usamos</span>
                </motion.h2>

                <motion.p
                    className="text-stone mb-16 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Trabajamos con herramientas modernas y confiables para garantizar
                    calidad, escalabilidad y eficiencia.
                </motion.p>

                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.06,
                            },
                        },
                    }}
                    viewport={{ once: true }}
                >
                    {stack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-3 cursor-default group"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-darkGreen/40 border border-white/5 group-hover:border-caribbeanGreen/20 group-hover:bg-caribbeanGreen/10 transition-all duration-500">
                                <div className="text-2xl text-caribbeanGreen/60 group-hover:text-caribbeanGreen transition-colors duration-500">{tech.icon}</div>
                            </div>
                            <span className="text-xs text-stone/50 group-hover:text-stone/80 transition-colors duration-500">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
