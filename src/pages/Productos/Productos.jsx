import mockupImg from "@/assets/images/mockup-desktop-inventory.png";
import demoGif from "@/assets/images/demo-asensux.gif";
import { Link } from "react-router-dom";
import { ctaBase } from "@/styles/cta";
import ProductosIntro from './components/ProductosIntro/ProductosIntro';
import ProductosStickySection from './components/ProductosStickySection/ProductosStickySection';
import ProductosFeatures from './components/ProductosFeatures/ProductosFeatures';
import ProductosPricing from './components/ProductosPricing/ProductosPricing';

export default function Productos() {
  return (
    <>
      <ProductosIntro />
      <section className="bg-gradient-to-r from-richBlack to-darkGreen text-antiFlashWhite py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Asensux Inventory Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Asensux Inventory
              </h2>
              <h3 className="text-caribbeanGreen text-2xl md:text-4xl">Control total de tu inventario</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                "Optimiza tus ventas, evita pérdidas y gestiona tu inventario de forma inteligente."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  className={ctaBase}
                >
                  Prueba gratis hoy
                </Link>
                <Link
                  to="/productos#demo"
                  className={ctaBase}
                >
                  Ver en acción
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src={mockupImg}
                alt="Asensux Inventory Mockup"
                className="max-w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
          <div className="container my-10 md:my-40">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
              ¿Estás cansado de perder el control de tu inventario? ¿Quieres optimizar tus ventas y reducir pérdidas por falta de stock?
            </h2>
          </div>
          {/* Second Section - Reversed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Left side - Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src={demoGif}
                alt="Asensux Inventory Demo"
                className="max-w-full h-auto rounded-xl shadow-2xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-lg text-gray-300 leading-relaxed">
                Presentamos Asensux Inventory, el sistema de gestión de inventarios más completo y fácil de usar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductosStickySection />

      <ProductosFeatures />

      <ProductosPricing />
    </>
  );
}
