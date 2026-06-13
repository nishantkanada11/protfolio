import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiFolder,
  FiCode,
} from "react-icons/fi";

const AboutImage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex items-center justify-center"
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          h-[480px]
          w-[480px]
          rounded-full
          bg-violet-500/20
          blur-3xl
        "
      />

      {/* Purple Ring */}

      <div
        className="
          relative
          flex
          h-[450px]
          w-[450px]
          items-center
          justify-center
          rounded-full
          border-[18px]
          border-violet-500
          shadow-[0_0_80px_rgba(124,58,237,.30)]
        "
      >

        {/* Image Placeholder */}

        <div
          className="
            flex
            h-[320px]
            w-[320px]
            items-center
            justify-center
            rounded-full
            bg-white
            text-[90px]
            shadow-2xl
            dark:bg-zinc-900
          "
        >
          👨‍💻
        </div>

      </div>

      {/* Experience Card */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          left-0
          top-10
          rounded-3xl
          bg-white
          p-5
          shadow-2xl
          dark:bg-zinc-900
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              rounded-2xl
              bg-violet-100
              p-3
              text-violet-600
            "
          >
            <FiBriefcase size={24} />
          </div>

          <div>

            <h3 className="text-3xl font-black text-violet-600">
              2+
            </h3>

            <p className="text-sm text-zinc-500">
              Years Experience
            </p>

          </div>

        </div>

      </motion.div>

      {/* Projects Card */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          right-0
          bottom-10
          rounded-3xl
          bg-white
          p-5
          shadow-2xl
          dark:bg-zinc-900
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              rounded-2xl
              bg-violet-100
              p-3
              text-violet-600
            "
          >
            <FiFolder size={24} />
          </div>

          <div>

            <h3 className="text-3xl font-black text-violet-600">
              50+
            </h3>

            <p className="text-sm text-zinc-500">
              Projects
            </p>

          </div>

        </div>

      </motion.div>

      {/* Coding Card */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          absolute
          right-8
          top-20
          rounded-3xl
          bg-white
          p-4
          shadow-xl
          dark:bg-zinc-900
        "
      >

        <div
          className="
            rounded-xl
            bg-violet-100
            p-3
            text-violet-600
          "
        >
          <FiCode size={26} />
        </div>

      </motion.div>

    </motion.div>
  );
};

export default AboutImage;