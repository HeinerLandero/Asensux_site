import { Button } from "@/components/ui/button";
import logo from "@/assets/asensux-logo.png";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-richBlack to-black text-antiFlashWhite min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-4xl mx-auto">
                <img
                    src={logo}
                    alt="Logo Asensux"
                    className="mx-auto w-32 mb-8 drop-shadow-lg animate-pulse"
                />
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Transformamos tu negocio con <span className="text-caribbeanGreen">soluciones tecnológicas innovadoras</span>
                </h1>
                <p className="text-xl text-antiFlashWhite/90 mb-8">
                    Combinamos software, diseño y estrategia para impulsar tu empresa hacia el futuro digital.
                </p>
                <Button size="lg"
                    className="bg-caribbeanGreen hover:bg-caribbeanGreen/80 text-black font-semibold text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(0,223,129,0.4)] transition">
                    Descubre cómo lo hacemos
                </Button>
            </div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-cover pointer-events-none" />
        </section>
    );
}