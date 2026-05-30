import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ease, fadeUp, once } from "../../lib/animations";
import inventoryImg from "@/assets/images/asensuxinventory.png";
import ritmocaribeImg from "@/assets/images/ritmocaribe.png";
import anrealstudioImg from "@/assets/images/anrealstudio.png";

const projects = [
    {
        title: "Inventory Master",
        image: inventoryImg,
        category: "Producto propio",
        description: "Sistema de gestión de inventarios con facturación electrónica, alertas de stock y dashboard en tiempo real para pymes colombianas.",
        tags: ["React", "Laravel", "MySQL"],
        link: "https://inventorymaster.asensux.tech",
        metric: "40% menos pérdidas",
    },
    {
        title: "Ritmo Caribeño",
        image: ritmocaribeImg,
        category: "Sitio web musical",
        description: "Plataforma web para agrupación musical del Carnaval de Barranquilla. Eventos, discografía y booking.",
        tags: ["React", "Tailwind", "Animaciones"],
        link: "https://lightgrey-quail-267025.hostingersite.com",
        metric: "+50% tráfico orgánico",
    },
    {
        title: "Anrealstudio",
        image: anrealstudioImg,
        category: "Portafolio de arquitectura",
        description: "Sitio web profesional para estudio de arquitectura con galerías inmersivas y formulario de contacto.",
        tags: ["React", "Tailwind", "Galería"],
        link: "https://lightslategrey-caterpillar-688694.hostingersite.com",
        metric: "80% más leads",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative    from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center mb-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={once}
                >
                    Proyectos recientes
                </motion.h2>

                {/* Descripción */}
                <motion.p
                    className="text-center text-stone/70 max-w-2xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease }}
                    viewport={{ once: true }}
                >
                    Estas son algunas de las soluciones que hemos desarrollado con pasión por la innovación y la excelencia técnica.
                </motion.p>

                {/* Project cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group rounded-2xl overflow-hidden  Dark/60 backdrop-blur-sm ${
                                i === 0 ? 'md:col-span-8 md:row-span-2' : 
                                i === 1 ? 'md:col-span-4' : 'md:col-span-4'
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[200px]"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navyDark/90 via-navyDark/40 to-transparent flex items-end p-6">
                                <div className="w-full">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-electricBlue bg-electricBlue/10 px-2 py-0.5 rounded">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-antiFlashWhite mb-1 flex items-center gap-2">
                                        {project.title}
                                        <ExternalLink className="w-3.5 h-3.5 text-stone/40 group-hover:text-electricBlue transition-colors" />
                                    </h3>
                                    <p className="text-sm text-stone/80 mb-2">{project.description}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] text-stone/50 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs font-semibold text-electricBlue/80 ml-auto">
                                            {project.metric}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={once}
                >
                    <Link
                        to="/portafolio"
                        className="group inline-flex items-center gap-2 bg-electricBlue hover:bg-electricBlueLight text-antiFlashWhite font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(0,116,217,0.25)] hover:shadow-[0_0_50px_rgba(0,116,217,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Ver todos los proyectos
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
