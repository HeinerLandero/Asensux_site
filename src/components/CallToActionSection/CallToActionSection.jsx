import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="bg-gradient-to-r from-richBlack to-black  from-richBlack to-darkGreen py-20 px-6 text-antiFlashWhite">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    ¿Listo para impulsar tu negocio con{" "}
                    <span className="text-caribbeanGreen">kambio</span>?
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-lg mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Agenda una reunión gratuita con nuestro equipo y descubre cómo podemos ayudarte a lograr tus objetivos tecnológicos.
                </motion.p>

                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Link
                        to="/contacto"
                        className="inline-block bg-caribbeanGreen text-richBlack font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition duration-300 hover:shadow-[0_0_30px_rgba(0,223,129,0.5)]"
                    >
                        Agendar reunión
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
