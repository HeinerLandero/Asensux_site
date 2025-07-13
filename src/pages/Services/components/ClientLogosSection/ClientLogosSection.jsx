// src/pages/Services/components/ClientLogosSection.tsx
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaAmazon,
  FaGithub,
  FaSlack,
} from "react-icons/fa";

const logos = [
  { icon: <FaGoogle className="text-red-500" />, name: "Google" },
  { icon: <FaMicrosoft className="text-blue-600" />, name: "Microsoft" },
  { icon: <FaApple className="text-gray-300" />, name: "Apple" },
  { icon: <FaAmazon className="text-yellow-500" />, name: "Amazon" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <FaSlack className="text-purple-400" />, name: "Slack" },
];

export default function ClientLogosSection() {
  return (
    <section className="bg-gradient-to-r from-richBlack py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-antiFlashWhite mb-10">
          Empresas que <span className="text-caribbeanGreen">confían</span> en nosotros
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center text-5xl hover:scale-110 transition-transform duration-300"
              title={logo.name}
            >
              {logo.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
