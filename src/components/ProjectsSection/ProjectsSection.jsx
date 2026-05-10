import { motion } from "framer-motion";
import kambioLogo from "@/assets/images/kambio-main-logo.svg";

const projects = [
    {
        title: "Asensux Manager",
        image: kambioLogo,
        description: "Sistema de gestión empresarial completo: tareas, proyectos, equipos y clientes.",
    },
    {
        title: "UpTranslink",
        image: kambioLogo,
        description: "Plataforma de transporte inteligente para gestión de rutas y movilidad urbana.",
    },
    {
        title: "Landing AI SaaS",
        image: kambioLogo,
        description: "Sitio web promocional para producto basado en inteligencia artificial.",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Proyectos recientes
                </motion.h2>

                {/* Descripción */}
                <motion.p
                    className="text-center text-stone/70 max-w-2xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Estas son algunas de las soluciones que hemos desarrollado con pasión por la innovación y la excelencia técnica.
                </motion.p>

                {/* Asymmetric grid - different sizes */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className={`relative group rounded-2xl overflow-hidden bg-richBlack/60 backdrop-blur-sm ${
                                i === 0 ? 'md:col-span-8 md:row-span-2' : 
                                i === 1 ? 'md:col-span-4' : 'md:col-span-4'
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[200px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-richBlack/90 via-richBlack/40 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-antiFlashWhite mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-stone/80">{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
