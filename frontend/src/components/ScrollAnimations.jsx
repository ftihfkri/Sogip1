import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Fade in from bottom
export const FadeInUp = ({ children, delay = 0, duration = 0.6 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {children}
    </motion.div>
  );
};

// Fade in from left
export const FadeInLeft = ({ children, delay = 0, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {children}
    </motion.div>
  );
};

// Fade in from right
export const FadeInRight = ({ children, delay = 0, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {children}
    </motion.div>
  );
};

// Scale in
export const ScaleIn = ({ children, delay = 0, duration = 0.6 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax background
export const ParallaxBackground = ({ children, speed = 0.5 }) => {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      style={{
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
};
