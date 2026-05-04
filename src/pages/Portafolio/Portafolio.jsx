import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";
import kambioLogo from "@/assets/images/kambio-main-logo.svg";
import mockupImg from "@/assets/images/mockup-desktop-inventory.png";

const projects = [
  {
    id: "asensux-inventory",
    title: "Asensux Inventory",
    category: "Producto propio",
    description: "Sistema de gestión de inventarios con facturación electrónica, alertas de stock, dashboard en tiempo real y soporte multiusuario. Diseñado para pymes colombianas que necesitan control total sin complicaciones.",
    image: mockupImg,
    tags: ["React", "Laravel", "MySQL", "DIAN"],
    year: "2025",
    featured: true,
    link: "/productos",
  },
  {
    id: "kambio",
    title: "UpTranslink",
    category: "Plataforma de transporte",
    description: "Sistema de gestión de rutas y movilidad urbana para operadores de transporte público. Optimización de itinerarios, seguimiento GPS en tiempo real y panel de control para flotas.",
    image: kambioLogo,
    tags: ["React", "Node.js", "PostgreSQL", "Maps API"],
    year: "2024",
    link: "#",
  },
  {
    id: "landing-ai",
    title: "Landing AI SaaS",
    category: "Marketing digital",
    description: "Sitio web promocional completo para producto de inteligencia artificial. Diseño editorial con animaciones scroll-driven, formulario de captación de leads y optimización SEO técnica.",
    image: kambioLogo,
    tags: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    year: "2025",
    link: "#",
  },
  {
    id: "asensux-manager",
    title: "Asensux Manager",
    category: "Herramienta interna",
    description: "Panel de gestión empresarial para seguimiento de proyectos, asignación de tareas, control de tiempos y comunicación con clientes. Integrado con nuestro pipeline de desarrollo.",
    image: mockupImg,
    tags: ["React", "Express", "MongoDB", "WebSocket"],
    year: "2024",
    link: "#",
  },
];

export default function Portafolio() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="bg-gradient-to-r from-richBlack to-darkGreen text-antiFlashWhite py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Proyectos que{" "}
            <span className="text-caribbeanGreen">hablan solos</span>
          </h1>
          <p className="text-stone text-lg max-w-xl mx-auto">
            Cada proyecto es un problema resuelto. Aquí mostramos el cómo.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featured && (
          <motion.div
            className="mb-16 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to={featured.link}
              className="block"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/5 hover:border-caribbeanGreen/20 transition-colors duration-500">
                {/* Image */}
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-darkGreen">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-richBlack/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-richBlack via-richBlack/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-caribbeanGreen bg-caribbeanGreen/10 border border-caribbeanGreen/20 px-3 py-1.5 rounded">
                      Proyecto destacado
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-sm text-caribbeanGreen font-medium">{featured.category}</span>
                    <span className="text-stone text-sm">{featured.year}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{featured.title}</h2>
                  <p className="text-antiFlashWhite/60 leading-relaxed max-w-3xl mb-6">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-stone bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Other Projects - Asymmetric Grid */}
        <div className="space-y-4">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                to={project.link}
                className="group block"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 rounded-2xl overflow-hidden border border-white/5 hover:border-caribbeanGreen/20 transition-colors duration-500 bg-darkGreen/30`}>
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 aspect-[4/3] overflow-hidden bg-richBlack">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-richBlack/30 group-hover:bg-richBlack/10 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/80 to-transparent md:bg-gradient-to-l" />

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-caribbeanGreen">{project.category}</span>
                      <span className="text-stone text-xs">{project.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-caribbeanGreen transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-antiFlashWhite/50 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-stone/80 bg-white/5 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20 pt-16 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-stone mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <Link
            to="/contacto"
            className={ctaBase}
          >
            Hablemos de tu idea
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
