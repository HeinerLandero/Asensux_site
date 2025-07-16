import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    razon: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    // Aquí iría la lógica para enviar los datos a un backend o servicio externo
  };

  return (
    <section className="py-20 px-6 text-antiFlashWhite">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para <span className="text-caribbeanGreen">empezar?</span>
        </h2>
        <p className="mb-10 text-stone-300 max-w-xl mx-auto">
          Completa el formulario y agenda una reunión con nosotros para recibir una cotización personalizada.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block mb-2 font-medium">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-md bg-white text-black border border-stone-300 focus:ring-2 focus:ring-caribbeanGreen transition outline-none"
              />
            </div>

            <div>
              <label htmlFor="empresa" className="block mb-2 font-medium">Empresa</label>
              <input
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder="Nombre de la empresa"
                className="w-full px-4 py-3 rounded-md bg-white text-black border border-stone-300 focus:ring-2 focus:ring-caribbeanGreen transition outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="correo" className="block mb-2 font-medium">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
              placeholder="tu@correo.com"
              className="w-full px-4 py-3 rounded-md bg-white text-black border border-stone-300 focus:ring-2 focus:ring-caribbeanGreen transition outline-none"
            />
          </div>

          <div>
            <label htmlFor="razon" className="block mb-2 font-medium">Motivo del contacto</label>
            <select
              name="razon"
              value={form.razon}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white text-black border border-stone-300 focus:ring-2 focus:ring-caribbeanGreen transition outline-none"
            >
              <option value="">Selecciona una opción</option>
              <option value="cotizacion">Solicitar una cotización</option>
              <option value="reunion">Agendar una reunión</option>
              <option value="consulta">Consulta general</option>
              <option value="soporte">Soporte técnico</option>
            </select>
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-2 font-medium">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Cuéntanos en qué podemos ayudarte..."
              className="w-full px-4 py-3 rounded-md bg-white text-black border border-stone-300 focus:ring-2 focus:ring-caribbeanGreen transition outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-caribbeanGreen text-richBlack font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-[#0c0039] hover:scale-105 shadow-md"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
