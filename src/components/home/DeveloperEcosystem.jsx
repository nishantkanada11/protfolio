import { motion } from "framer-motion";

import TechBanner from "./TechBanner";
import useTechRotation from "./useTechRotation";

const positions = [
  "left-1/2 top-0 -translate-x-1/2",

  "left-6 top-28",

  "right-6 top-28",

  "left-1/2 top-56 -translate-x-1/2",
];

const DeveloperEcosystem = () => {

  const techs = useTechRotation();

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

      className="
        relative
        flex
        h-[700px]
        items-center
        justify-center
      "
    >

      {/* Purple Glow */}

      <div
        className="
          absolute
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
      />

      {/* SVG Lines */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          pointer-events-none
        "
      >

        <line
          x1="50%"
          y1="70"
          x2="50%"
          y2="250"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="8 8"
        />

        <line
          x1="90"
          y1="180"
          x2="320"
          y2="260"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="8 8"
        />

        <line
          x1="550"
          y1="180"
          x2="320"
          y2="260"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="8 8"
        />

      </svg>

      {/* Tech Cards */}

      {techs.map((tech, index) => (

        <TechBanner

          key={tech.id}

          tech={tech}

          position={positions[index]}

          delay={index * 0.15}

        />

      ))}

      {/* Developer Card */}

      <motion.div

        animate={{
          y: [0, -10, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 4,
        }}

        className="
          relative
          z-20
          mt-52
        "
      >

        <div
          className="
            relative
            flex
            h-[340px]
            w-[340px]
            items-center
            justify-center
            rounded-[40px]
            border
            border-white/30
            bg-white/80
            shadow-[0_25px_80px_rgba(0,0,0,.15)]
            backdrop-blur-xl
            dark:border-zinc-700
            dark:bg-zinc-900/80
          "
        >
                      {/* Developer Illustration */}

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/049/799/023/small/developer-man-with-glasses-and-beard-works-on-a-laptop-3d-rendered-icon-isolated-png.png"
            alt="Developer"
            className="
              h-[260px]
              w-auto
              object-contain
              select-none
              pointer-events-none
            "
            draggable="false"
          />

          {/* Available Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              absolute
              -bottom-7
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-3
              rounded-full
              border
              border-white/40
              bg-white/90
              px-6
              py-3
              shadow-xl
              backdrop-blur-xl
              dark:border-zinc-700
              dark:bg-zinc-900/90
            "
          >

            <span className="relative flex h-3 w-3">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-500
                  opacity-70
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-3
                  w-3
                  rounded-full
                  bg-green-500
                "
              />

            </span>

            <span
              className="
                whitespace-nowrap
                font-semibold
              "
            >
              Available For Freelance
            </span>

          </motion.div>

        </div>

      </motion.div>

    </motion.div>

  );

};

export default DeveloperEcosystem;