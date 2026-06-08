import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../../components/SEO/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Página no encontrada | Asensux" description="Lo sentimos, la página que buscas no existe o ha sido movida." canonical="" />
      <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-navyDark to-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-[120px] md:text-[180px] font-bold text-electricBlue/20 leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-antiFlashWhite mb-4 -mt-8">
          Página no encontrada
        </h2>
        <p className="text-stone mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-electricBlue hover:bg-electricBlue/80 text-navyDark font-semibold px-6 py-3 rounded-xl transition-all"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-electricBlue/50 text-antiFlashWhite px-6 py-3 rounded-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </button>
        </div>
      </motion.div>
    </div>
    </>
  );
}