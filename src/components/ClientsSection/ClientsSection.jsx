import logoCliente from "@/assets/logos/logo-cliente-asensux-wb.png";

const clients = [
    { name: "NovaTech", logo: logoCliente },
    { name: "Startify", logo: logoCliente },
    { name: "Uplift", logo: logoCliente },
    { name: "OmniCore", logo: logoCliente },
    { name: "DataNest", logo: logoCliente },
];

export default function ClientsSection() {
    return (
        <section className="   from-navyDark to-navy text-antiFlashWhite justify-center items-center py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Empresas que <span className="text-electricBlue">confían</span> en nosotros
                </h2>
                <p className="text-stone mb-12">
                    Más de 20 empresas han confiado en Asensux para potenciar sus productos digitales.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                    {clients.map((client, index) => (
                        <div key={index} className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                            <img
                                src={client.logo}
                                alt={`Logo de ${client.name}`}
                                className="max-h-full object-contain"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
