import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="g-gradient-to-r from-richBlack to-black  bg-gradient-to-r  from-richBlack to-darkGreen py-20 px-6 text-antiFlashWhite">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    ¿Listo para impulsar tu negocio con <span className="text-caribbeanGreen">Asensux</span>?
                </h2>
                <p className="text-gray-300 text-lg mb-10">
                    Agenda una reunión gratuita con nuestro equipo y descubre cómo podemos ayudarte a lograr tus objetivos tecnológicos.
                </p>
                <Link
                    to="/contacto"
                    className="inline-block bg-caribbeanGreen text-richBlack font-semibold px-8 py-4 rounded-full text-lg shadow-md hover:scale-105 transition-transform duration-300"
                >
                    Agendar reunión
                </Link>
            </div>
        </section>
    );
}
