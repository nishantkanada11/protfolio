import { motion } from "framer-motion";

const Badge = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-violet-200
      bg-violet-100
      px-4
      py-2
      text-sm
      font-semibold
      text-violet-700
      "
    >
      {children}
    </motion.div>
  );
};

export default Badge;