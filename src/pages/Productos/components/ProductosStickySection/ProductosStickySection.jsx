export default function ProductosStickySection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('src/assets/images/mockup-desktop-inventory.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        clipPath: 'polygon(100% 1%, 101% 70%, -8% -8% 95%, -33% 44%)'
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