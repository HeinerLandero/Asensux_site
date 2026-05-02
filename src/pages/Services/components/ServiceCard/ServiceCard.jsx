import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ServiceCard({ title, icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-gradient-to-b from-darkGreen/50 to-richBlack p-8 rounded-2xl border border-white/10 hover:border-caribbeanGreen/30 transition-colors"
    >
      <div className="mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-caribbeanGreen/10 text-caribbeanGreen group-hover:bg-caribbeanGreen/20 transition-colors">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-antiFlashWhite mb-3">
        {title}
      </h3>
      <p className="text-sm text-stone/80 leading-relaxed">{text}</p>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
