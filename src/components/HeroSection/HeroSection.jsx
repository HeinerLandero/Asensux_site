import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 z-0">
            <div className="overlay-hero inset-0 pointer-events-none "></div>

            <div className="max-w-4xl mx-auto z-10">
                <motion.h1
                    className="display text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Software que{" "}
                    <span className="text-electricBlue">
                        funciona
                    </span>
                    . Negocios que{" "}
                    <span className="text-electricBlue">
                        crecen
                    </span>
                    .
                </motion.h1>
                <motion.p
                    className="text-base md:text-xl text-antiFlashWhite/80 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Desarrollo web, apps móviles e IA para empresas que quieren resultados reales, no promesas.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Link to="/servicios" className={ctaBase}>
                        Descubre cómo lo hacemos
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
