import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";
import { ease, fadeUp, once, staggerContainer } from "../../lib/animations";
import blogPosts from "../../data/blogPosts";
import TiltCard from "../../components/TiltCard/TiltCard";
import SEO from "../../components/SEO/SEO";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { PAGES } from "../../lib/siteConfig";

const featuredPosts = blogPosts.filter((p) => p.featured);
const otherPosts = blogPosts.filter((p) => !p.featured);

export default function Blog() {
  return (
    <>
      <SEO {...PAGES["/blog"]} canonical="/blog" />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
      ]} />
      <CircuitBackground>
      <section className="relative py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <p className="text-electricBlue/80 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Blog
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] -tracking-[0.03em] mb-6">
              Artículos y{" "}
              <span className="text-electricBlue">recursos</span>
            </h1>
            <p className="text-stone text-lg max-w-xl">
              Tecnología, desarrollo y negocios. Consejos prácticos de nuestro equipo para impulsar tu empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                className={i === 0 ? "md:col-span-2" : "md:col-span-1"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                viewport={once}
              >
                <TiltCard className="w-full h-full" intensity={4}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`group block rounded-3xl border border-white/5 hover:border-electricBlue/20 transition-all duration-500 ${
                      i === 0 ? "p-8 md:p-12" : "p-6 md:p-8"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-electricBlue bg-electricBlue/10 px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-stone/50 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="text-[10px] text-stone/50">{post.readTime} lectura</span>
                    </div>
                    <h2
                      className={`font-display font-bold text-antiFlashWhite group-hover:text-electricBlue transition-colors duration-300 mb-3 ${
                        i === 0 ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p className={`text-stone/60 leading-relaxed ${i === 0 ? "text-base max-w-2xl" : "text-sm"}`}>
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-electricBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Leer artículo
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex items-center gap-3 mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={once}
          >
            <span className="h-px w-8 bg-electricBlue/30" />
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-electricBlue/80">
              Más artículos
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={once}
              >
                <TiltCard className="w-full h-full" intensity={3}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electricBlue/20 hover:bg-white/[0.04] transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-electricBlue bg-electricBlue/10 px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-stone/50">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-antiFlashWhite group-hover:text-electricBlue transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone/60 leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <time className="text-[10px] text-stone/50 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </time>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </CircuitBackground>
    </>
  );
}
