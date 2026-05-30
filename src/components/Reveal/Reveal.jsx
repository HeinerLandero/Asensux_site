import { motion } from "framer-motion";
import { fadeUp, staggerContainer, once } from "../../lib/animations";

export function Reveal({ children, variant = fadeUp, delay = 0, viewport = once, className }) {
  const v = {
    hidden: variant.hidden,
    visible: {
      ...variant.visible,
      transition: { ...variant.visible.transition, delay: delay + (variant.visible.transition?.delay || 0) },
    },
  };
  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children, staggerDelay = 0.08, viewport = once, className }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
