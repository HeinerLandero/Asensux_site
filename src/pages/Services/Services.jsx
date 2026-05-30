import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Smartphone, Workflow, Palette, ShoppingCart, LayoutPanelLeft, Cpu } from "lucide-react";
import { ease, fadeUp, once } from "../../lib/animations";

const services = [
  {
    id: "web",
    icon: Code2,
    title: "Desarrollo Web",
    subtitle: "Aplicaciones que escalan",
    description: "Construimos aplicaciones web modernas con React, Node y Laravel. Desde MVPs hasta plataformas enterprise con millones de usuarios.",
    features: ["React / Next.js", "Laravel / Node.js", "APIs REST & GraphQL", "Base de datos escalable", "CI/CD automatizado"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #0a1e3d 50%, #040718 100%)",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Apps Móviles",
    subtitle: "Nativas en iOS y Android",
    description: "Apps nativas y multiplataforma con React Native y Flutter. Una base de código, dos ecosistemas, cero compromisos.",
    features: ["React Native", "Flutter", "Notificaciones push", "Offline first", "App Store & Play Store"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #1a1040 50%, #040718 100%)",
  },
  {
    id: "crm",
    icon: Workflow,
    title: "CRM & Automatización",
    subtitle: "Procesos sin fricción",
    description: "Sistemas CRM personalizados y automatización de flujos de trabajo. Elimina tareas repetitivas y duplica tu productividad.",
    features: ["CRM a medida", "Automatización BPM", "Integración API", "Reportes inteligentes", "Workflow builder"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #0a2a2a 50%, #040718 100%)",
  },
  {
    id: "ux",
    icon: Palette,
    title: "Diseño UI/UX",
    subtitle: "Interfaces que enamoran",
    description: "Diseño centrado en el usuario con investigación, prototipado y testing. Interfaces que convierten visitantes en clientes.",
    features: ["Investigación UX", "Wireframes & prototipos", "Design systems", "Testing con usuarios", "Animación de interfaz"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #101832 50%, #040718 100%)",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "Ecommerce",
    subtitle: "Tiendas que venden 24/7",
    description: "Plataformas de comercio electrónico completas con catálogo, carrito, pagos integrados y panel de administración.",
    features: ["Catálogo dinámico", "Carrito & checkout", "Pasarela de pagos", "Panel administrador", "Dashboard ventas"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #0a1e30 50%, #040718 100%)",
  },
  {
    id: "landing",
    icon: LayoutPanelLeft,
    title: "Landing Pages",
    subtitle: "Alto impacto visual",
    description: "Páginas de aterrizaje con diseño cinematográfico, animaciones suaves y optimización de conversión. Tu mejor carta de presentación.",
    features: ["Diseño premium", "Animaciones Framer", "SEO optimizado", "Formularios inteligentes", "Analítica integrada"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #0a1e3d 50%, #040718 100%)",
  },
  {
    id: "bespoke",
    icon: Cpu,
    title: "Software a Medida",
    subtitle: "Tu idea, nuestro código",
    description: "Sistemas empresariales, dashboards, plataformas SaaS y cualquier solución que no existe en el mercado. La construimos.",
    features: ["Arquitectura personalizada", "SaaS platforms", "Dashboards", "APIs & microservicios", "Migración & legacy"],
    gradient: "linear-gradient(135deg, #0c1628 0%, #101832 50%, #040718 100%)",
  },
];

function ServicePanel({ service, index }) {
  const Icon = service.icon;
  return (
    <div className="w-full h-full flex items-center justify-center px-6 lg:px-12">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-electricBlue/50 text-xs font-mono tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-electricBlue/30" />
              <span className="text-electricBlue/70 text-xs font-medium uppercase tracking-[0.12em]">
                {service.subtitle}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-antiFlashWhite">
              {service.title}
            </h2>

            <p className="text-stone/70 leading-relaxed max-w-md">
              {service.description}
            </p>

            <ul className="space-y-2.5">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-stone/60">
                  <span className="w-1 h-1 rounded-full bg-electricBlue/60 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-electricBlue/5 rounded-[32px] blur-[60px]" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-[32px] bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <Icon className="w-20 h-20 md:w-28 md:h-28 text-electricBlue/40" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
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
        const idx = Math.min(services.length - 1, Math.floor(p * services.length));
        setActiveIndex(idx);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToPanel = useCallback((index) => {
    const el = outerRef.current;
    if (!el) return;
    const containerTop = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    const p = (index + 0.5) / services.length;
    window.scrollTo({ top: containerTop + p * total, behavior: "smooth" });
  }, []);

  const transition = { duration: 0.5, ease };

  return (
    <>
      <section className="   from-navyDark to-navy text-antiFlashWhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <motion.div
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <p className="text-electricBlue/70 text-sm font-medium tracking-[0.15em] uppercase mb-6">
              Capacidades
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] -tracking-[0.03em] mb-6">
              Servicios que{" "}
              <span className="text-electricBlue">transforman</span>
            </h1>
            <p className="text-stone text-lg max-w-xl">
              Desplázate para explorar cada capacidad. Cada servicio es un engranaje de una misma máquina: construir tu producto.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative">
        <div
          ref={outerRef}
          className="relative"
          style={{ height: `${services.length * 100}vh` }}
        >
          <div
            className="sticky top-0 h-screen overflow-hidden"
            style={{ background: services[activeIndex].gradient }}
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 w-full h-full">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={services[activeIndex].id}
                  className="w-full h-full"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.96 }}
                  transition={transition}
                  layout
                >
                  <ServicePanel service={services[activeIndex]} index={activeIndex} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToPanel(i)}
                  className="transition-all duration-500"
                  style={{
                    width: i === activeIndex ? 32 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: i === activeIndex ? "#0074D9" : "rgba(255,255,255,0.15)",
                  }}
                  aria-label={`Ir a ${services[i].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="   from-navyDark to-navy text-antiFlashWhite py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Por qué <span className="text-electricBlue">elegirnos</span>?
            </h2>
            <p className="text-stone/70 max-w-lg mx-auto">
              Nos destacamos por nuestro compromiso, innovación y acompañamiento constante.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
            {[
              { icon: Workflow, title: "Enfoque personalizado", text: "Cada solución se adapta a tus necesidades y objetivos de negocio." },
              { icon: Smartphone, title: "Entrega puntual", text: "Cumplimos tiempos con procesos iterativos y ágiles." },
              { icon: Code2, title: "Soporte confiable", text: "Mantenimiento y soporte post-lanzamiento sin complicaciones." },
              { icon: Cpu, title: "Tecnología moderna", text: "Frameworks actuales para escalar sin limitaciones." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="group flex items-start gap-5 p-8 rounded-2xl border border-white/5 hover:border-electricBlue/20  /20 hover: /40 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                  viewport={once}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-electricBlue/10 flex items-center justify-center group-hover:bg-electricBlue/20 transition-all">
                    <Icon className="w-6 h-6 text-electricBlue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-antiFlashWhite mb-2 group-hover:text-electricBlue transition-colors duration-500">{item.title}</h3>
                    <p className="text-stone/60 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
