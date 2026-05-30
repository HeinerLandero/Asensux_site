export const ease = [0.16, 1, 0.3, 1];
export const easeAlt = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeUpHeavy = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const staggerContainer = (staggerDelay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerDelay } },
});

export const once = { once: true, margin: "-40px" };

export const transition = (delay = 0) => ({
  duration: 0.6,
  delay,
  ease,
});

export const letterReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 80, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay, duration: 0.7, ease },
  },
});
