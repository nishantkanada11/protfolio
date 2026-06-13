import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-black text-white hover:bg-violet-600 border-black",

  outline:
    "border border-zinc-300 bg-transparent hover:bg-black hover:text-white",

  ghost:
    "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",

  white:
    "bg-white text-black hover:bg-violet-600 hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  type = "button",
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.95,
      }}
      type={type}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}

      {icon}
    </motion.button>
  );
};

export default Button;