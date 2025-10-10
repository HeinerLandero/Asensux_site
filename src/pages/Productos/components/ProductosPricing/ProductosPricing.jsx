import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Gratis",
    price: "Gratis por 1 mes",
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
    price: "$12.000/mes",
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
    price: "$20.000/mes",
    description: "Para empresas en crecimiento",
    features: [
      "1 Usuario maestro",
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
    description: "Soluciones a medida",
    features: [
      "Todas las funcionalidades del Business",
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
    <section className="bg-gradient-to-r from-richBlack to-black bg-richBlack text-antiFlashWhite py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Planes y <span className="text-caribbeanGreen">Precios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-gradient-to-br from-darkGreen/80 to-darkGreen/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-caribbeanGreen/20 transition-all duration-500 hover:-translate-y-2 border ${
                plan.popular ? 'border-caribbeanGreen ring-2 ring-caribbeanGreen/50' : 'border-darkGreen/50 hover:border-caribbeanGreen/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-caribbeanGreen mb-2">{plan.price}</div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-caribbeanGreen mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full mt-auto ${
                  plan.popular
                    ? 'bg-caribbeanGreen hover:bg-caribbeanGreen/80 text-black'
                    : 'bg-transparent border border-caribbeanGreen text-caribbeanGreen hover:bg-caribbeanGreen hover:text-black'
                } font-semibold py-3 rounded-xl transition`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}