import { motion, useScroll, useTransform } from "framer-motion";

export default function CircuitBackground({ children, className = "" }) {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.03, 0.1, 0.1, 0.03]);

  return (
    <div className={`relative ${className}`}>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,116,217,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,116,217,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          className="absolute top-[10%] left-[5%] w-80 h-80 bg-electricBlue/20 rounded-full blur-3xl"
          style={{ y: y1, opacity }}
        />

        <motion.div
          className="absolute top-[50%] right-[5%] w-[500px] h-[500px] bg-electricBlue/10 rounded-full blur-3xl"
          style={{ y: y2, opacity }}
        />

        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-electricBlue/0 via-electricBlue/20 to-electricBlue/0"
          style={{ opacity }}
        />

        <motion.div
          className="absolute right-[2%] top-[10%] w-px hidden lg:block"
          style={{ opacity }}
        >
          <motion.div
            className="absolute top-[10%] w-1 h-40 bg-electricBlue rounded-full blur-md"
            style={{
              y: y1,
              boxShadow: '0 0 40px 8px rgba(0, 116, 217, 0.5)',
            }}
          />
        </motion.div>

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          style={{ pointerEvents: 'none' }}
        >
          <motion.path
            d="M 0 150 Q 300 200, 600 150 T 1200 150 T 1800 200"
            fill="none"
            stroke="rgba(0,116,217,0.4)"
            strokeWidth="1"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
