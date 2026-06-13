import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{
        rotate: 20,
        scale: 1.08,
      }}
      transition={{
        duration: 0.25,
      }}
      aria-label="Toggle Theme"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-zinc-200
        bg-white
        text-zinc-700
        shadow-sm
        transition-all
        duration-300
        hover:border-violet-500
        hover:text-violet-600
        hover:shadow-lg
        dark:border-zinc-700
        dark:bg-zinc-900
        dark:text-white
      "
    >
      {theme === "light" ? (
        <FiMoon size={18} />
      ) : (
        <FiSun size={18} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;