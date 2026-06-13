import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-violet-600"
      style={{
        scaleX,
      }}
    />
  );
};

export default ScrollProgress;