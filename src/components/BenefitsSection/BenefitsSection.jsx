import { Zap, Target, Wrench } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Entrega Rápida",
        description: "Nuestro enfoque ágil permite lanzar productos hasta 3 veces más rápido que el promedio del mercado.",
    },
    {
        icon: Target,
        title: "Enfoque en Resultados",
        description: "Creamos soluciones que impactan directamente en tus métricas clave: conversiones, retención y escalabilidad.",
    },
    {
        icon: Wrench,
        title: "Tecnología Moderna",
        description: "Usamos herramientas de última generación para ofrecer productos seguros, mantenibles y listos para crecer.",
    },
];

export default function BenefitsSection() {
    return (
        <section className="bg-gradient-to-r from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Heading + description */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            ¿Por qué elegir{" "}
                            <span className="text-caribbeanGreen">Asensux</span>?
                        </h2>
                        <p className="text-stone/70 text-lg leading-relaxed max-w-lg">
                            No solo escribimos código. Entendemos tu negocio, diseñamos la solución correcta y la entregamos a tiempo. Cada proyecto es una oportunidad para demostrar que la tecnología bien hecha genera resultados reales.
                        </p>
                    </div>

                    {/* Right: Benefits list */}
                    <div className="space-y-6">
                        {benefits.map((b, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-5 p-6 rounded-2xl border border-white/5 hover:border-caribbeanGreen/20 bg-darkGreen/20 hover:bg-darkGreen/40 transition-all duration-500"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-caribbeanGreen/10 flex items-center justify-center group-hover:bg-caribbeanGreen/20 transition-all">
                                    <b.icon className="w-6 h-6 text-caribbeanGreen" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-antiFlashWhite mb-1">{b.title}</h3>
                                    <p className="text-stone/70 text-sm leading-relaxed">{b.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
