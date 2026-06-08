import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import CircuitBackground from "../../components/CircuitBackground/CircuitBackground";
import { ease, once } from "../../lib/animations";
import { getPostBySlug } from "../../data/blogPosts";
import SEO from "../../components/SEO/SEO";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { SITE } from "../../lib/siteConfig";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <SEO title="Artículo no encontrado — Asensux" description="El artículo que buscas no existe o ha sido eliminado." canonical={`/blog/${slug}`} />
        <CircuitBackground>
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Artículo no encontrado</h1>
            <p className="text-stone mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-electricBlue text-antiFlashWhite font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </div>
        </section>
      </CircuitBackground>
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateISO,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    url: `${SITE.url}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={`${post.title} — Asensux`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      >
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </SEO>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ]} />
      <CircuitBackground>
      <article className="relative py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone/60 hover:text-electricBlue transition-colors duration-300 mb-10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-electricBlue bg-electricBlue/10 px-2.5 py-1 rounded">
                {post.category}
              </span>
              <span className="text-xs text-stone/50 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-xs text-stone/50 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] -tracking-[0.03em] mb-4">
              {post.title}
            </h1>

            <p className="text-stone/70 text-lg mb-4">{post.author}</p>
          </motion.div>

          <motion.div
            className="mt-12 prose prose-invert prose-electricBlue max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display text-2xl md:text-3xl font-bold mt-12 mb-6">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-stone/70 leading-relaxed mb-6 text-base lg:text-lg">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-16 pt-10 border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            viewport={once}
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 bg-electricBlue hover:bg-electricBlueLight text-antiFlashWhite font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al blog
            </Link>
          </motion.div>
        </div>
      </article>
    </CircuitBackground>
    </>
  );
}
