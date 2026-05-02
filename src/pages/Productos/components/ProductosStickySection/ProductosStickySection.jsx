import mockupImg from "@/assets/images/mockup-desktop-inventory.png";

export default function ProductosStickySection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${mockupImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Todo lo que necesitas para administrar tu inventario en un solo lugar.
        </h2>
      </div>
    </section>
  );
}