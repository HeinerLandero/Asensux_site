import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { ease, once } from "../../../../lib/animations";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
  };

  return (
    <section className="   from-navyDark to-navy text-antiFlashWhite py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
          initial="hidden"
          whileInView="visible"
          viewport={once}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-electricBlue">empezar?</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Completa el formulario y agenda una reunión con nosotros para recibir una cotización personalizada.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease } } }}
          initial="hidden"
          whileInView="visible"
          viewport={once}
        >
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div>
              <label htmlFor="nombre" className="block mb-2 font-medium">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-lg  /50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-electricBlue focus:border-transparent transition outline-none placeholder:text-stone"
              />
            </div>

            <div>
              <label htmlFor="correo" className="block mb-2 font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 rounded-lg  /50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-electricBlue focus:border-transparent transition outline-none placeholder:text-stone"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block mb-2 font-medium">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                required
                placeholder="¿En qué podemos ayudarte?"
                className="w-full px-4 py-3 rounded-lg  /50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-electricBlue focus:border-transparent transition outline-none placeholder:text-stone"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full px-4 py-3 rounded-lg  /50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-electricBlue focus:border-transparent transition outline-none placeholder:text-stone resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-electricBlue hover:bg-electricBlue/80 text-navyDark font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              Enviar mensaje
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
