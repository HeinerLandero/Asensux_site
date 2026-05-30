import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ctaBase } from "@/styles/cta";
import { fadeUp, once, ease } from "../../lib/animations";

export default function CallToAction() {
    return (
        <section className="   from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={once}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease }}
                >
                    ¿Listo para impulsar tu negocio con{" "}
                    <span className="text-electricBlue">Asensux</span>?
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-lg mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease }}
                >
                    Agenda una reunión gratuita con nuestro equipo y descubre cómo podemos ayudarte a lograr tus objetivos tecnológicos.
                </motion.p>

                <Link
                    to="/contacto"
                    className={ctaBase}
                >
                    Agendar reunión
                </Link>
            </motion.div>
        </section>
    );
}
