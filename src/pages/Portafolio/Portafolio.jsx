import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";
import { ease, once, fadeUp } from "../../lib/animations";
import inventoryImg from "@/assets/images/asensuxinventory.png";
import ritmocaribeImg from "@/assets/images/ritmocaribe.png";
import anrealstudioImg from "@/assets/images/anrealstudio.png";
import solucionesImg from "@/assets/images/soluciones-arquitectura.png";
import estructurasImg from "@/assets/images/estructuras_y_acabados.png";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";
import TiltCard from "../../components/TiltCard/TiltCard";
import SEO from "../../components/SEO/SEO";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { PAGES } from "../../lib/siteConfig";

const projects = [
  {
    id: "inventory-master",
    title: "Inventory Master",
    category: "Producto propio",
    description: "Sistema de gestión de inventarios con facturación electrónica, alertas de stock, dashboard en tiempo real y soporte multiusuario. Diseñado para pymes colombianas que necesitan control total sin complicaciones.",
    image: inventoryImg,
    tags: ["React", "Laravel", "MySQL", "DIAN"],
    year: "2025",
    link: "https://inventorymaster.asensux.tech",
    metric: "40% menos pérdidas",
    gradient: ["#0c1628", "#0a1e3d", "#040718"],
  },
  {
    id: "ritmo-caribeno",
    title: "Ritmo Caribeño",
    category: "Sitio web musical",
    description: "Plataforma web para agrupación musical del Carnaval de Barranquilla. Eventos, discografía, biografía y booking.",
    image: ritmocaribeImg,
    tags: ["React", "Tailwind", "Animaciones", "Responsive"],
    year: "2025",
    link: "https://lightgrey-quail-267025.hostingersite.com",
    metric: "+50% tráfico orgánico",
    gradient: ["#0c1628", "#1a1040", "#040718"],
  },
  {
    id: "anrealstudio",
    title: "Anrealstudio",
    category: "Portafolio de arquitectura",
    description: "Sitio web profesional para estudio de arquitectura con galerías inmersivas, servicios y formulario de contacto.",
    image: anrealstudioImg,
    tags: ["React", "Tailwind", "Galería", "Moderno"],
    year: "2025",
    link: "https://lightslategrey-caterpillar-688694.hostingersite.com",
    metric: "80% más leads",
    gradient: ["#0c1628", "#0a2a2a", "#040718"],
  },
  {
    id: "soluciones-arquitectonicas",
    title: "Soluciones Arquitectónicas",
    category: "Constructora",
    description: "Sitio web corporativo con portafolio de proyectos, servicios constructivos y sección de contacto.",
    image: solucionesImg,
    tags: ["React", "Tailwind", "Portfolio", "Diseño"],
    year: "2025",
    link: "https://soluciones-arquitectonicas.netlify.app",
    metric: "60% más visibilidad",
    gradient: ["#0c1628", "#101832", "#040718"],
  },
  {
    id: "estructuras-y-acabados",
    title: "Estructuras y Acabados",
    category: "Constructora",
    description: "Sitio web para empresa de construcción especializada. Proyectos, servicios y contacto profesional.",
    image: estructurasImg,
    tags: ["React", "Tailwind", "Construcción", "Portfolio"],
    year: "2025",
    link: "https://estructuras-y-acabados.netlify.app",
    metric: "3 semanas de desarrollo",
    gradient: ["#0c1628", "#0a1e30", "#040718"],
  },
];

const transition = { duration: 0.5, ease };

function ProjectContent({ project, index, total }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-electricBlue/5 rounded-2xl blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <TiltCard className="relative rounded-xl overflow-hidden bg-bgSurface/50 border border-white/5 shadow-2xl backdrop-blur-sm" intensity={4}>
              <div className="flex items-center gap-2 px-4 py-3 bg-bgSurface/80 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-stone/50 font-mono">{project.link.replace("https://", "")}</span>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </TiltCard>
          </div>
        </div>

        <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-electricBlue/50 text-xs font-mono tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-electricBlue/30" />
            <span className="text-xs text-stone/60">{project.year}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-electricBlue bg-electricBlue/10 px-3 py-1.5 rounded">
              {project.category}
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight text-antiFlashWhite">
            {project.title}
          </h2>

          <p className="text-stone/70 leading-relaxed text-sm md:text-base">
            {project.description}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electricBlue/10 border border-electricBlue/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-electricBlue">Resultado</span>
            <span className="text-sm font-bold text-antiFlashWhite">{project.metric}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-stone/60 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-antiFlashWhite/70 hover:text-electricBlue transition-colors duration-300"
          >
            Ver proyecto vivo
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portafolio() {
  const outerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total > 0) {
        const p = Math.max(0, Math.min(1, -rect.top / total));
        const idx = Math.min(projects.length - 1, Math.floor(p * projects.length));
        setActiveIndex(idx);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <SEO {...PAGES["/portafolio"]} canonical="/portafolio" />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Portafolio", url: "/portafolio" },
      ]} />
      <CircuitBackground>
      <section className="relative min-h-screen flex items-center justify-center text-antiFlashWhite overflow-hidden">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-electricBlue/80 bg-electricBlue/10 px-4 py-2 rounded-full border border-electricBlue/20">
                <span className="w-1.5 h-1.5 rounded-full bg-electricBlue animate-pulse" />
                Portafolio
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] -tracking-[0.04em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease }}
            >
              Proyectos que{" "}
              <span className="text-electricBlue relative inline-block">
                hablan solos
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] w-full bg-electricBlue rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6, ease }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-stone/70 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
            >
              Cada proyecto es un problema resuelto. Cada línea de código, una decisión. Desplázate para ver nuestro trabajo.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease }}
            >
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 bg-electricBlue hover:bg-electricBlueLight text-antiFlashWhite font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(0,116,217,0.25)] hover:shadow-[0_0_50px_rgba(0,116,217,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Cuéntanos tu proyecto
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-electricBlue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs text-stone/40 uppercase tracking-[0.15em] font-medium">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-electricBlue/60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <div
        ref={outerRef}
        className="relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen ">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${projects[activeIndex].gradient.join(", ")})` }}
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
            <div
              className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
              style={{ backgroundColor: `rgba(0, 116, 217, ${0.04 + activeIndex * 0.01})` }}
            />
            <div className="relative z-10 w-full h-full flex items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={projects[activeIndex].id}
                  className="w-full"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.96 }}
                  transition={transition}
                  layout
                >
                  <ProjectContent
                    project={projects[activeIndex]}
                    index={activeIndex}
                    total={projects.length}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <section className="   from-navyDark to-navy text-antiFlashWhite py-32 px-6">
        <motion.div
          className="text-center max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={once}
        >
          <p className="text-stone text-lg mb-8">
            ¿Tienes un proyecto en mente?
          </p>
          <Link to="/contacto" className={ctaBase}>
            Hablemos de tu idea
          </Link>
        </motion.div>
      </section>
    </CircuitBackground>
    </>
  );
}
