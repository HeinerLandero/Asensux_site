import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function AboutCard({ title, icon, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-darkGreen to-richBlack p-6 rounded-2xl border border-[#ffffff] shadow-xl transition-all duration-300 hover:border-caribbeanGreen hover:shadow-neonGreen"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="text-4xl bg-[#00392c] text-caribbeanGreen rounded-full p-4 shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-antiFlashWhite text-center mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone text-center">{text}</p>
    </motion.div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number, // nuevo
};