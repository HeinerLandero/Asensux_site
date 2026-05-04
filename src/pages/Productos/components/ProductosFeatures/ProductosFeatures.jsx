import { Package, AlertTriangle, FileText, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Gestión completa de productos y categorías",
    description: "Organiza y administra tu catálogo de productos de manera eficiente."
  },
  {
    icon: AlertTriangle,
    title: "Control de stock con alertas automáticas",
    description: "Recibe notificaciones cuando el stock esté bajo o se agote."
  },
  {
    icon: FileText,
    title: "Facturación integrada con soporte DIAN",
    description: "Genera facturas electrónicas cumpliendo con las normativas colombianas."
  },
  {
    icon: BarChart3,
    title: "Dashboard con métricas en tiempo real",
    description: "Visualiza el rendimiento de tu inventario con gráficos interactivos."
  },
  {
    icon: Users,
    title: "Soporte multiusuario",
    description: "Permite que varios usuarios accedan y gestionen el sistema simultáneamente."
  }
];

export default function ProductosFeatures() {
  return (
    <section className="bg-gradient-to-r from-richBlack to-darkGreen text-antiFlashWhite py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Características <span className="text-caribbeanGreen">destacadas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-darkGreen/80 to-darkGreen/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-caribbeanGreen/20 transition-all duration-500 hover:-translate-y-2 border border-darkGreen/50 hover:border-caribbeanGreen/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-caribbeanGreen/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-caribbeanGreen/10 rounded-xl mb-6 group-hover:bg-caribbeanGreen/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-caribbeanGreen" />
                  </div>
                    <h3 className="text-xl font-semibold text-antiFlashWhite mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-stone/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}