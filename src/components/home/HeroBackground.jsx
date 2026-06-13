import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      {/* Grid Background */}

      <div
        className="
        absolute
        inset-0
        -z-20
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-[size:60px_60px]
        opacity-40
        dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
      "
      />

      {/* Top Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="
          absolute
          -left-40
          -top-40
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/30
          blur-[120px]
        "
      />

      {/* Bottom Right Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="
          absolute
          -bottom-40
          -right-40
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-fuchsia-500/20
          blur-[140px]
        "
      />

      {/* Floating Circle */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="
          absolute
          left-[12%]
          top-[20%]
          h-10
          w-10
          rounded-full
          border
          border-violet-500
        "
      />

      {/* Floating Square */}

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
        }}
        className="
          absolute
          right-[15%]
          top-[18%]
          h-8
          w-8
          rotate-45
          border
          border-violet-400
        "
      />
    </>
  );
};

export default HeroBackground;