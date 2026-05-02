import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";

const plans = [
  {
    name: "Gratis",
    price: "Gratis",
    pricePeriod: "por 1 mes",
    description: "Prueba todas las funcionalidades básicas",
    features: [
      "Generación de inventario",
      "Módulo de facturación",
      "1 Usuario maestro",
      "1 Colaborador"
    ],
    buttonText: "Comenzar prueba",
    popular: false
  },
  {
    name: "Basic",
    price: "$12.000",
    pricePeriod: "/mes",
    description: "Perfecto para pequeños negocios",
    features: [
      "Todas las funcionalidades",
      "1 Usuario maestro",
      "3 Colaboradores"
    ],
    buttonText: "Seleccionar Basic",
    popular: false
  },
  {
    name: "Business",
    price: "$20.000",
    pricePeriod: "/mes",
    description: "Para empresas en crecimiento",
    features: [
      "Módulo de cotización",
      "Todas las funcionalidades",
      "9 Colaboradores",
      "Creación de reportes",
      "Notificaciones en tiempo real",
      "Soporte prioritario"
    ],
    buttonText: "Seleccionar Business",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    pricePeriod: "",
    description: "Soluciones a medida",
    features: [
      "Todo lo de Business",
      "Usuarios ilimitados",
      "Integraciones personalizadas",
      "Soporte 24/7",
      "Consultoría dedicada"
    ],
    buttonText: "Contactar asesor",
    popular: false
  }
];

export default function ProductosPricing() {
  return (
    <section className="bg-gradient-to-r from-richBlack to-black text-antiFlashWhite py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4">
          Planes y <span className="text-caribbeanGreen">Precios</span>
        </h2>
        <p className="text-stone text-center mb-16 max-w-lg mx-auto">
          Empieza gratis. Escala cuando lo necesites. Sin compromisos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col bg-darkGreen/40 p-8 rounded-2xl transition-all duration-300 border ${
                plan.popular
                  ? 'border-caribbeanGreen bg-caribbeanGreen/5'
                  : 'border-white/5 hover:border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-caribbeanGreen bg-caribbeanGreen/10 px-3 py-1 rounded">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-caribbeanGreen">{plan.price}</span>
                  {plan.pricePeriod && <span className="text-stone text-sm">{plan.pricePeriod}</span>}
                </div>
                <p className="text-stone text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-caribbeanGreen mt-0.5 flex-shrink-0" />
                    <span className="text-antiFlashWhite/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contacto"
                className={`${ctaBase} w-full text-center`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}