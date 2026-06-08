import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Package, AlertTriangle, FileText, BarChart3, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";
import { ease, fadeUp, once, staggerContainer } from "../../lib/animations";
import mockupImg from "@/assets/images/mockup-desktop-inventory.png";
import demoGif from "@/assets/images/demo-asensux.gif";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";
import TiltCard from "../../components/TiltCard/TiltCard";
import SEO from "../../components/SEO/SEO";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { PAGES } from "../../lib/siteConfig";

const features = [
  {
    id: "productos",
    icon: Package,
    title: "Gestión de Productos",
    subtitle: "Catálogo completo",
    description: "Organiza tu inventario con categorías, precios, variantes y búsqueda avanzada. Todo desde un panel centralizado y fácil de usar.",
    items: ["Categorías ilimitadas", "Precios y variantes", "Búsqueda avanzada", "Importación masiva", "SKU automático"],
    gradient: ["#0c1628", "#0a1e3d", "#040718"],
  },
  {
    id: "stock",
    icon: AlertTriangle,
    title: "Control de Stock",
    subtitle: "Alertas inteligentes",
    description: "Nunca más te quedes sin inventario. Alertas automáticas cuando el stock esté bajo, tracking en tiempo real y más.",
    items: ["Alertas automáticas", "Stock mínimo configurable", "Historial de movimientos", "Inventario cíclico", "Notificaciones push"],
    gradient: ["#0c1628", "#0a2a2a", "#040718"],
  },
  {
    id: "facturacion",
    icon: FileText,
    title: "Facturación DIAN",
    subtitle: "Cumplimiento fiscal",
    description: "Facturación electrónica integrada con resolución DIAN. Emite facturas, recibos y notas crédito con un clic.",
    items: ["Resolución DIAN", "Facturas electrónicas", "Notas crédito/débito", "Reportes fiscales", "Multi-moneda"],
    gradient: ["#0c1628", "#101832", "#040718"],
  },
  {
    id: "dashboard",
    icon: BarChart3,
    title: "Dashboard en Vivo",
    subtitle: "Decisiones basadas en datos",
    description: "Métricas en tiempo real de tu inventario, ventas y rentabilidad. Gráficos interactivos que te muestran lo que importa.",
    items: ["Métricas en vivo", "Gráficos interactivos", "Exportación de datos", "Forecast predictivo", "Paneles personalizables"],
    gradient: ["#0c1628", "#0a1e30", "#040718"],
  },
];

const metrics = [
  { value: 40, suffix: "+", label: "Empresas confían en nosotros" },
  { value: 5000, suffix: "+", label: "Productos gestionados" },
  { value: 15000, suffix: "+", label: "Facturas electrónicas" },
  { value: 3, suffix: "+", label: "Años de experiencia" },
];

const plans = [
  {
    name: "Gratis",
    price: "Gratis",
    period: "por 1 mes",
    description: "Prueba todas las funcionalidades básicas",
    features: ["Generación de inventario", "Módulo de facturación", "1 Usuario maestro", "1 Colaborador"],
    popular: false,
  },
  {
    name: "Basic",
    price: "$12.000",
    period: "/mes",
    description: "Perfecto para pequeños negocios",
    features: ["Todas las funcionalidades", "1 Usuario maestro", "3 Colaboradores"],
    popular: false,
  },
  {
    name: "Business",
    price: "$20.000",
    period: "/mes",
    description: "Para empresas en crecimiento",
    features: ["Módulo de cotización", "Todas las funcionalidades", "9 Colaboradores", "Creación de reportes", "Notificaciones en tiempo real", "Soporte prioritario"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Soluciones a medida",
    features: ["Todo lo de Business", "Usuarios ilimitados", "Integraciones personalizadas", "Soporte 24/7", "Consultoría dedicada"],
    popular: false,
  },
];

function MetricCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, once);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2.5,
      ease,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-3xl md:text-5xl font-bold text-antiFlashWhite font-display"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        viewport={once}
      >
        {displayValue}{suffix}
      </motion.div>
      <p className="text-stone/60 text-sm mt-2">{label}</p>
    </div>
  );
}

function StickyFeatureShowcase() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    panelRefs.current = panelRefs.current.slice(0, features.length);
  }, []);

  useEffect(() => {
    const observers = features.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.4 }
      );
      const el = panelRefs.current[i];
      if (el) observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToPanel = useCallback((index) => {
    panelRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className=" Dark relative">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="hidden lg:flex lg:w-64 lg:flex-shrink-0 lg:self-start lg:sticky lg:top-0 lg:h-screen flex-col justify-center px-6 lg:px-0 lg:pl-12">
          <nav className="space-y-10">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => scrollToPanel(i)}
                className="group flex items-center gap-4 text-left w-full"
              >
                <span
                  className={`text-xs font-mono transition-colors duration-500 ${
                    i === activeIndex ? "text-electricBlue" : "text-stone/20"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <span
                    className={`block text-sm font-medium transition-all duration-500 ${
                      i === activeIndex
                        ? "text-antiFlashWhite translate-x-2"
                        : "text-stone/40 group-hover:text-stone/60"
                    }`}
                  >
                    {f.title}
                  </span>
                </div>
                {i === activeIndex && (
                  <motion.span
                    layoutId="featureIndicator"
                    className="w-1.5 h-1.5 rounded-full bg-electricBlue flex-shrink-0"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div ref={containerRef} className="flex-1">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <section
                key={f.id}
                ref={(el) => (panelRefs.current[i] = el)}
                className="min-h-[80dvh] lg:min-h-screen flex items-center px-6 lg:pr-16 lg:pl-4 py-24 lg:py-32"
                style={{ background: `linear-gradient(135deg, ${f.gradient.join(", ")})` }}
              >
                <div className="w-full max-w-4xl">
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease }}
                    viewport={once}
                  >
                    <span className="text-electricBlue/50 text-xs font-mono tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-electricBlue/30" />
                    <span className="text-electricBlue/80 text-xs font-medium uppercase tracking-[0.12em]">
                      {f.subtitle}
                    </span>
                  </motion.div>

                  <motion.h2
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-antiFlashWhite mb-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={once}
                  >
                    {f.title}
                  </motion.h2>

                  <motion.p
                    className="text-stone/70 leading-relaxed max-w-xl mb-12 text-base lg:text-lg"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={once}
                  >
                    {f.description}
                  </motion.p>

                  <motion.ul
                    className="grid sm:grid-cols-2 gap-3 max-w-xl"
                    variants={staggerContainer(0.06)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={once}
                  >
                    {f.items.map((item) => (
                      <motion.li
                        key={item}
                        className="flex items-center gap-3 text-sm text-stone/60"
                        variants={fadeUp}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-electricBlue/60 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="hidden lg:block mt-12">
                    <Link
                      to="/contacto"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-electricBlue hover:text-electricBlueLight transition-colors duration-300"
                    >
                  Saber más
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Productos() {
  return (
    <>
      <SEO {...PAGES["/productos"]} canonical="/productos" />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Productos", url: "/productos" },
      ]} />
      <CircuitBackground>
      <section className="relative min-h-screen flex items-center px-6 lg:px-12  from-navyDark via-navyDark to-navy">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <motion.p
                className="text-electricBlue/80 text-sm font-medium tracking-[0.15em] uppercase mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease }}
              >
                Producto propio
              </motion.p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] -tracking-[0.03em] mb-6">
                El control total de tu{" "}
                <span className="text-electricBlue">inventario</span>
              </h1>
              <p className="text-stone text-lg leading-relaxed mb-10 max-w-lg">
                Optimiza tus ventas, evita pérdidas y gestiona tu inventario de forma inteligente con la plataforma todo-en-uno para pymes colombianas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto" className={ctaBase}>
                  Prueba gratis hoy
                </Link>
                <Link
                  to="/productos#demo"
                  className="group inline-flex items-center justify-center gap-2 text-antiFlashWhite/80 hover:text-antiFlashWhite font-medium text-base px-8 py-4 rounded-xl border border-white/10 hover:border-electricBlue/30 transition-all duration-300"
                >
                  Ver en acción
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute -inset-8 bg-electricBlue/10 rounded-[32px] blur-[80px] opacity-60" />
                  <TiltCard className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl glow-hero" intensity={5}>
                  <div className="flex items-center gap-2 px-4 py-3 bg-bgSurface/80 border-b border-white/5">
                    <span className="w-3 h-3 rounded-full bg-red-400/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <span className="w-3 h-3 rounded-full bg-green-400/60" />
                    <span className="ml-2 text-xs text-stone/50 font-mono">inventory.asensux.tech</span>
                  </div>
                  <img
                    src={mockupImg}
                    alt="Asensux Inventory"
                    className="w-full max-w-[520px] h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </TiltCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="  border-y border-white/[0.03] py-16 lg:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((m) => (
              <MetricCounter key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>

      <StickyFeatureShowcase />

      <section id="demo" className=" Dark py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Míralo en{" "}
              <span className="text-electricBlue">acción</span>
            </h2>
            <p className="text-stone/70 max-w-lg mx-auto">
              Así se ve Asensux Inventory en funcionamiento. Gestión completa en tiempo real.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl max-w-5xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-bgSurface/80 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-400/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <span className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="ml-2 text-xs text-stone/50 font-mono">demo.asensux.tech</span>
            </div>
            <img
              src={demoGif}
              alt="Asensux Inventory Demo"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      <section className="  py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Planes y{" "}
              <span className="text-electricBlue">Precios</span>
            </h2>
            <p className="text-stone/70 max-w-lg mx-auto">
              Empieza gratis. Escala cuando lo necesites. Sin compromisos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-500 border ${
                  plan.popular
                    ? "border-electricBlue bg-electricBlue/[0.04]"
                    : "border-white/5 hover:border-white/10  /40"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease }}
                viewport={once}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-electricBlue bg-electricBlue/10 px-3 py-1.5 rounded">
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-antiFlashWhite mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-electricBlue font-display">{plan.price}</span>
                    {plan.period && <span className="text-stone/60 text-sm">{plan.period}</span>}
                  </div>
                  <p className="text-stone/50 text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-electricBlue mt-0.5 flex-shrink-0" />
                      <span className="text-antiFlashWhite/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacto"
                  className={`${ctaBase} w-full text-center`}
                >
                  {plan.name === "Enterprise" ? "Contactar asesor" : plan.name === "Gratis" ? "Comenzar prueba" : `Seleccionar ${plan.name}`}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 lg:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navyDark via-electricBlue/5 to-navyDark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electricBlue/10 rounded-full blur-[150px] pointer-events-none" />
        <motion.div
          className="relative text-center max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={once}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            ¿Listo para transformar tu{" "}
            <span className="text-electricBlue">inventario</span>?
          </h2>
          <p className="text-stone/70 text-lg mb-10 max-w-lg mx-auto">
            Únete a las empresas que ya confían en Asensux Inventory. Prueba gratis por 1 mes, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className={ctaBase}>
              Prueba gratis hoy
            </Link>
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-2 text-antiFlashWhite/80 hover:text-antiFlashWhite font-medium text-base px-8 py-4 rounded-xl border border-white/10 hover:border-electricBlue/30 transition-all duration-300"
            >
              Hablar con ventas
            </Link>
          </div>
        </motion.div>
      </section>
    </CircuitBackground>
    </>
  );
}
