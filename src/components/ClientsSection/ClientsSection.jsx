// src/sections/ClientsSection.tsx
const clients = [
    { name: "NovaTech", logo: "src/assets/images/kambio-logo-white.png" },
    { name: "Startify", logo: "src/assets/images/kambio-logo-white.png" },
    { name: "Uplift", logo: "src/assets/images/kambio-logo-white.png" },
    { name: "OmniCore", logo: "src/assets/images/kambio-logo-white.png" },
    { name: "DataNest", logo: "src/assets/images/kambio-logo-white.png" },
];

export default function ClientsSection() {
    return (
        <section className="bg-gradient-to-r from-richBlack to-black bg-richBlack py-20 px-6 text-antiFlashWhite">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Empresas que <span className="text-caribbeanGreen">confían</span> en nosotros
                </h2>
                <p className="text-stone mb-12">
                    Más de 20 empresas han confiado en kambio para potenciar sus productos digitales.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                    {clients.map((client, index) => (
                        <div key={index} className="w-32 h-16 flex items-center justify-center  hover:grayscale-0 transition duration-300">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
