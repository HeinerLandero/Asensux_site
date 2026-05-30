import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ServiceCard({ title, icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-gradient-to-b from-navy/50 to-navyDark p-8 rounded-2xl border border-white/10 hover:border-electricBlue/30 transition-colors"
    >
      <div className="mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-electricBlue/10 text-electricBlue group-hover:bg-electricBlue/20 transition-colors">
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
