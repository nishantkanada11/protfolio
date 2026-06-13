import { motion, useReducedMotion } from "framer-motion";

import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";

const floatingTech = [
  {
    icon: FaReact,
    color: "#61DAFB",
    className: "-top-4 left-1/2 -translate-x-1/2",
  },
  {
    icon: FaLaravel,
    color: "#FF2D20",
    className: "left-0 top-28",
  },
  {
    icon: FaWordpress,
    color: "#21759B",
    className: "right-0 top-28",
  },
  {
    icon: FaPhp,
    color: "#777BB4",
    className: "bottom-16 left-4",
  },
  {
    icon: FaNodeJs,
    color: "#3C873A",
    className: "bottom-16 right-4",
  },
];

const HeroIllustration = () => {

  const shouldReduceMotion = useReducedMotion();

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: .9,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: .8,
      }}

      className="
        relative
        flex
        items-center
        justify-center
      "

    >

      {/* Purple Glow */}

      <div

        aria-hidden="true"

        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "

      />

      {/* Outer Ring */}

      <motion.div

        aria-hidden="true"

        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: 360,
              }
        }

        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}

        className="
          absolute
          h-[470px]
          w-[470px]
          rounded-full
          border
          border-dashed
          border-violet-400/50
        "

      />

      {/* Floating Tech */}

      {floatingTech.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div

            key={index}

            aria-hidden="true"

            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                  }
            }

            transition={{
              repeat: Infinity,
              duration: 4 + index,
            }}

            className={`absolute z-30 ${item.className}`}

          >

            <div

              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-zinc-200
                bg-white
                shadow-xl
                dark:border-zinc-700
                dark:bg-zinc-900
              "

            >

              <Icon

                size={28}

                style={{
                  color: item.color,
                }}

                aria-hidden="true"

              />

            </div>

          </motion.div>

        );

      })}

      {/* Main Circle */}

      <motion.div

        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -12, 0],
              }
        }

        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}

        className="
          relative
          z-20
          flex
          h-[420px]
          w-[420px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-violet-300/50
          bg-gradient-to-br
          from-violet-100/80
          via-white/90
          to-fuchsia-100/80
          shadow-[0_30px_80px_rgba(124,58,237,.25)]
          backdrop-blur-2xl
          dark:from-violet-900/20
          dark:via-zinc-900/90
          dark:to-fuchsia-900/20
        "
      >

        <div

          aria-hidden="true"

          className="
            absolute
            inset-8
            rounded-full
            bg-gradient-to-br
            from-violet-500/15
            via-fuchsia-500/10
            to-indigo-500/15
          "

        />
                {/* Inner Rings */}

        <motion.div

          aria-hidden="true"

          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotate: -360,
                }
          }

          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}

          className="
            absolute
            h-[320px]
            w-[320px]
            rounded-full
            border
            border-dashed
            border-violet-300/30
          "
        />

        <motion.div

          aria-hidden="true"

          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotate: 360,
                }
          }

          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}

          className="
            absolute
            h-[240px]
            w-[240px]
            rounded-full
            border
            border-violet-400/20
          "
        />

        {/* Developer SVG */}

        <motion.div

          className="relative z-20"

          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -8, 0],
                }
          }

          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}

        >

          <svg

            viewBox="0 0 200 200"

            role="img"

            aria-label="Developer Illustration"

            focusable="false"

            className="h-52 w-52"

            fill="none"

            xmlns="http://www.w3.org/2000/svg"

          >

            {/* Monitor */}

            <rect
              x="25"
              y="40"
              width="150"
              height="100"
              rx="10"
              fill="#1e1b4b"
            />

            <rect
              x="33"
              y="48"
              width="134"
              height="82"
              rx="6"
              fill="#0f172a"
            />

            <rect
              x="33"
              y="48"
              width="134"
              height="82"
              rx="6"
              fill="url(#sg)"
              opacity="0.9"
            />

            {/* Code */}

            <rect x="45" y="62" width="35" height="5" rx="2.5" fill="#7c3aed" />
            <rect x="45" y="74" width="55" height="5" rx="2.5" fill="#a78bfa" opacity="0.8" />
            <rect x="53" y="86" width="45" height="5" rx="2.5" fill="#6ee7b7" opacity="0.9" />
            <rect x="53" y="98" width="30" height="5" rx="2.5" fill="#fbbf24" opacity="0.8" />
            <rect x="45" y="110" width="40" height="5" rx="2.5" fill="#a78bfa" opacity="0.7" />
            <rect x="45" y="122" width="25" height="5" rx="2.5" fill="#7c3aed" />

            {/* Cursor */}

            <motion.rect

              aria-hidden="true"

              x="74"

              y="122"

              width="3"

              height="12"

              rx="1.5"

              fill="#a78bfa"

              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: [1, 0, 1],
                    }
              }

              transition={{
                repeat: Infinity,
                duration: 1,
              }}

            />

            {/* Stand */}

            <rect
              x="88"
              y="140"
              width="24"
              height="16"
              rx="3"
              fill="#312e81"
            />

            <rect
              x="72"
              y="154"
              width="56"
              height="7"
              rx="3.5"
              fill="#312e81"
            />

            {/* Keyboard */}

            <rect
              x="40"
              y="164"
              width="120"
              height="24"
              rx="5"
              fill="#1e1b4b"
            />
                      {[0,1,2,3,4,5,6,7,8,9].map((i) => (
              <rect
                key={`k1-${i}`}
                x={46 + i * 11}
                y="169"
                width="8"
                height="6"
                rx="1.5"
                fill="#312e81"
              />
            ))}

            {[0,1,2,3,4,5,6,7,8].map((i) => (
              <rect
                key={`k2-${i}`}
                x={51 + i * 11}
                y="179"
                width="8"
                height="6"
                rx="1.5"
                fill="#312e81"
              />
            ))}

            {/* Floating Badge */}

            <motion.g

              aria-hidden="true"

              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -7, 0],
                    }
              }

              transition={{
                repeat: Infinity,
                duration: 3,
              }}

            >

              <rect
                x="147"
                y="48"
                width="26"
                height="26"
                rx="5"
                fill="#7c3aed"
              />

              <text
                x="153"
                y="66"
                fontSize="13"
                fill="white"
                fontWeight="bold"
              >

                {}

              </text>

            </motion.g>

            <motion.g

              aria-hidden="true"

              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 7, 0],
                    }
              }

              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}

            >

              <rect
                x="24"
                y="82"
                width="26"
                height="26"
                rx="5"
                fill="#0ea5e9"
              />

              <text
                x="28"
                y="100"
                fontSize="13"
                fill="white"
                fontWeight="bold"
              >

                {"</>"}

              </text>

            </motion.g>

            <defs>

              <linearGradient
                id="sg"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#7c3aed"
                  stopOpacity="0.2"
                />

                <stop
                  offset="100%"
                  stopColor="#0ea5e9"
                  stopOpacity="0.1"
                />

              </linearGradient>

            </defs>

          </svg>

        </motion.div>

      </motion.div>

      {/* Status Badge */}

      <motion.div

        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -6, 0],
              }
        }

        transition={{
          repeat: Infinity,
          duration: 3,
        }}

        className="
          absolute
          -bottom-4
          z-30
          rounded-full
          border
          border-zinc-200
          bg-white/90
          px-6
          py-3
          shadow-xl
          backdrop-blur-xl
          dark:border-zinc-700
          dark:bg-zinc-900/90
        "

      >

        <div className="flex items-center gap-3">

          <span className="relative flex h-3 w-3">

            <span
              aria-hidden="true"
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"
            />

            <span
              aria-hidden="true"
              className="relative h-3 w-3 rounded-full bg-green-500"
            />

          </span>

          <p className="font-semibold dark:text-white">

            Open To Work

          </p>

        </div>

      </motion.div>

    </motion.div>

  );

};

export default HeroIllustration;