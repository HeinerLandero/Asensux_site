import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import '../HeroSection/HeroSection.scss'

export default function Hero() {
    return (
        <section className=" relative bg-gradient-to-r from-richBlack to-black to-darkGreen text-antiFlashWhite min-h-[100vh] flex flex-col justify-center items-center text-center px-4 z-0">
            <div className="overlay-hero inset-0 pointer-events-none "></div>

            <div className="max-w-4xl mx-auto z-10">
                {/* <motion.img
                    src={logo}
                    alt="Logo Asensux"
                    className="mx-auto w-32 mb-8 drop-shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                /> */}
                <motion.h1
                    className="text-4xl md:text-7xl  font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Transformamos tu negocio con{" "}
                    <span className="intro-text">
                        soluciones tecnológicas innovadoras
                    </span>
                </motion.h1>
                <motion.p
                    className="text-base md:text-2xl text-antiFlashWhite/90 mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Combinamos software, diseño y estrategia para impulsar tu empresa hacia el futuro digital.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Button
                        size="lg"
                        className="bg-caribbeanGreen hover:bg-caribbeanGreen/80 text-black font-semibold text-base px-8 py-4 rounded-xl shadow-[0_0_20px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_2px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105"
                    >
                        Descubre cómo lo hacemos
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
