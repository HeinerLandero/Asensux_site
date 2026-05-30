import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Cómo optimizar tu inventario con tecnología",
    excerpt: "Descubre las mejores prácticas para gestionar tu inventario de forma eficiente y reducir pérdidas.",
    date: "2026-04-15",
    category: "Inventario",
  },
  {
    title: "Tendencias en desarrollo web para 2026",
    excerpt: "Las tecnologías y frameworks que están dominando el panorama del desarrollo web este año.",
    date: "2026-04-01",
    category: "Desarrollo",
  },
  {
    title: "IA aplicada a pequeños negocios",
    excerpt: "Cómo la inteligencia artificial puede ayudar a automatizar procesos y mejorar la toma de decisiones.",
    date: "2026-03-20",
    category: "IA",
  },
];

export default function Blog() {
  return (
    <section className="   from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog de <span className="text-electricBlue">Asensux</span>
          </h1>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Artículos, novedades y consejos de nuestro equipo sobre tecnología, desarrollo y negocios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className=" /50 rounded-xl border border-white/10 p-6 hover:border-electricBlue/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-electricBlue font-medium">{post.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
              <p className="text-stone text-sm mb-4">{post.excerpt}</p>
              <time className="text-xs text-stone">{post.date}</time>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
