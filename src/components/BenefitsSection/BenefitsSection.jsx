export default function BenefitsSection() {
    const benefits = [
        {
            title: "🚀 Entrega Rápida",
            description: "Nuestro enfoque ágil permite lanzar productos hasta 3 veces más rápido que el promedio del mercado.",
        },
        {
            title: "🎯 Enfoque en Resultados",
            description: "Creamos soluciones que impactan directamente en tus métricas clave: conversiones, retención y escalabilidad.",
        },
        {
            title: "🛠️ Tecnología Moderna",
            description: "Usamos herramientas de última generación para ofrecer productos seguros, mantenibles y listos para crecer.",
        },
    ];

    return (
        <section className="bg-darkGreen  bg-gradient-to-r from-richBlack to-black py-20 px-6 text-antiFlashWhite">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    ¿Por qué elegir <span className="text-caribbeanGreen">Asensux</span>?
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            className="bg-richBlack p-6 rounded-xl border border-[#ffffff] shadow-lg hover:shadow-caribbeanGreen/30 transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-caribbeanGreen mb-4">{b.title}</h3>
                            <p className="text-gray-300">{b.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
