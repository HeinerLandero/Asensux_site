import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
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
    <section className="bg-gradient-to-r from-richBlack to-darkGreen text-antiFlashWhite py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            ¿Tienes una idea o proyecto en mente? Nos encantaría escucharte. Escríbenos y te responderemos lo antes posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-caribbeanGreen/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-caribbeanGreen" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-stone">contacto@asensux.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-caribbeanGreen/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-caribbeanGreen" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                <p className="text-stone">+57 300 000 0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-caribbeanGreen/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-caribbeanGreen" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                <p className="text-stone">Colombia</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg bg-darkGreen/50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent transition outline-none placeholder:text-stone"
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
                  className="w-full px-4 py-3 rounded-lg bg-darkGreen/50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent transition outline-none placeholder:text-stone"
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
                  className="w-full px-4 py-3 rounded-lg bg-darkGreen/50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent transition outline-none placeholder:text-stone"
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
                  className="w-full px-4 py-3 rounded-lg bg-darkGreen/50 text-antiFlashWhite border border-white/10 focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent transition outline-none placeholder:text-stone resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-caribbeanGreen hover:bg-caribbeanGreen/80 text-richBlack font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
