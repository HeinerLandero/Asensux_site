import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ServiceCard({ title, icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00df81" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-to-b from-darkGreen to-richBlack p-6 rounded-2xl border border-[#004e3a] shadow-xl"
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

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
