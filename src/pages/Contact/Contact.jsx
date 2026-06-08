import { useState } from "react";
import { Mail, MapPin, Phone, Send, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";
import { ease, fadeUp, once } from "../../lib/animations";
import blogPosts from "../../data/blogPosts";
import SEO from "../../components/SEO/SEO";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { PAGES } from "../../lib/siteConfig";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contacto@asensux.com", href: "mailto:contacto@asensux.com" },
  { icon: Phone, label: "Teléfono", value: "+57 300 000 0000", href: "tel:+573000000000" },
  { icon: MapPin, label: "Ubicación", value: "Colombia" },
];

const recentPosts = blogPosts.slice(0, 3);

function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
  };

  const inputBase = "peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.04] text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-electricBlue focus:border-electricBlue transition outline-none";
  const labelBase = "absolute left-4 top-4 text-sm text-stone/50 transition-all duration-200 pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-focus:text-electricBlue";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="relative">
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          placeholder=" "
          className={inputBase}
        />
        <label htmlFor="nombre" className={labelBase}>
          Nombre completo
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="correo"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
          placeholder=" "
          className={inputBase}
        />
        <label htmlFor="correo" className={labelBase}>
          Correo electrónico
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          id="asunto"
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
          required
          placeholder=" "
          className={inputBase}
        />
        <label htmlFor="asunto" className={labelBase}>
          Asunto
        </label>
      </div>

      <div className="relative">
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows="5"
          required
          placeholder=" "
          className={`${inputBase} resize-none pt-6`}
        />
        <label htmlFor="mensaje" className={labelBase}>
          Mensaje
        </label>
      </div>

      <button
        type="submit"
        className="group w-full bg-electricBlue hover:bg-electricBlueLight text-antiFlashWhite font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(0,116,217,0.25)] hover:shadow-[0_0_50px_rgba(0,116,217,0.4)] flex items-center justify-center gap-2"
      >
        Enviar mensaje
        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <SEO {...PAGES["/contacto"]} canonical="/contacto" />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Contacto", url: "/contacto" },
      ]} />
      <CircuitBackground>
      <section className="relative py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-2xl mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <p className="text-electricBlue/80 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Contacto
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] -tracking-[0.03em] mb-6">
              Hablemos de tu{" "}
              <span className="text-electricBlue">proyecto</span>
            </h1>
            <p className="text-stone text-lg max-w-lg">
              Cuéntanos en qué estás trabajando y te responderemos en menos de 24 horas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                className="flex items-center gap-2 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={once}
              >
                <span className="h-px w-8 bg-electricBlue/30" />
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-electricBlue/80">
                  Del blog
                </span>
              </motion.div>

              {recentPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  viewport={once}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electricBlue/20 hover:bg-white/[0.04] transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-electricBlue bg-electricBlue/10 px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-stone/50 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-antiFlashWhite group-hover:text-electricBlue transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone/60 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.article>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease }}
                viewport={once}
              >
                <Link
                  to="/blog"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-antiFlashWhite/60 hover:text-electricBlue transition-colors duration-300"
                >
                  Ver todos los artículos
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                className="p-8 lg:p-10 rounded-3xl bg-white/[0.03] border border-white/5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease }}
                viewport={once}
              >
                <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-white/5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="bg-electricBlue/10 p-2.5 rounded-xl">
                          <Icon className="w-5 h-5 text-electricBlue" />
                        </div>
                        <div>
                          <p className="text-xs text-stone/50">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-medium text-antiFlashWhite hover:text-electricBlue transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-antiFlashWhite">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </CircuitBackground>
    </>
  );
}
