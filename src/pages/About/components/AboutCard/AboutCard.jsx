import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ease, once } from "../../../../lib/animations";

export default function AboutCard({ title, icon, text, index }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15, ease } } }}
      initial="hidden"
      whileInView="visible"
      viewport={once}
      className="group relative p-6 rounded-2xl border border-white/5  /30 hover: /50 hover:border-electricBlue/20 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-electricBlue/10 text-electricBlue flex items-center justify-center text-lg group-hover:bg-electricBlue/20 group-hover:scale-105 transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-antiFlashWhite mb-2">
            {title}
          </h3>
          <p className="text-sm text-stone leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number,
};
