import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const TimelineLine = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.3,
  });

  const dotY = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  return (

    <div
      ref={ref}
      className="
        absolute
        left-1/2
        top-0
        hidden
        h-full
        w-20
        -translate-x-1/2
        lg:block
      "
    >

      {/* Base Line */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[3px]
          -translate-x-1/2
          rounded-full
          bg-zinc-200
          dark:bg-zinc-800
        "
      />

      {/* Purple Progress */}

      <motion.div

        style={{
          scaleY: progress,
          transformOrigin: "top",
        }}

        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[4px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-violet-400
          via-violet-500
          to-violet-700
        "
      />

      {/* Moving Dot */}

      <motion.div

        style={{
          top: dotY,
        }}

        className="
          absolute
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
                {/* Soft Glow */}

        <div
          className="
            absolute
            -inset-6
            rounded-full
            bg-violet-500/20
            blur-xl
          "
        />

        {/* Pulse Ring */}

        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-10
            w-10
            rounded-full
            border-2
            border-violet-400
          "
        />

        {/* Main Dot */}

        <div
          className="
            relative
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-violet-600
            shadow-[0_0_25px_rgba(124,58,237,.65)]
          "
        >
          <div
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-white
            "
          />
        </div>

      </motion.div>

    </div>

  );
};

export default TimelineLine;