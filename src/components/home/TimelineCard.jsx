import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const TimelineCard = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -120 : 120,
        y: 60,
        rotate: isLeft ? -4 : 4,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`
        relative
        mb-28
        flex
        w-full
        ${
          isLeft
            ? "lg:justify-start"
            : "lg:justify-end"
        }
      `}
    >

      <motion.div

        whileHover={{
          y: -12,
          scale: 1.02,
        }}

        transition={{
          duration: .3,
        }}

        className="
          group
          relative
          w-full
          overflow-hidden
          rounded-[34px]
          border
          border-zinc-200
          bg-white/80
          p-8
          shadow-xl
          backdrop-blur-xl
          dark:border-zinc-800
          dark:bg-zinc-900/80
          lg:w-[44%]
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-violet-500/20
              blur-[90px]
            "
          />

        </div>

        {/* Year */}

        <div
          className="
            inline-flex
            rounded-full
            bg-violet-100
            px-5
            py-2
            text-sm
            font-bold
            text-violet-700
            dark:bg-violet-900/30
            dark:text-violet-300
          "
        >

          {item.year}

        </div>

        {/* Header */}

        <div className="mt-7 flex items-center gap-5">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-violet-500
              to-indigo-600
              text-white
              shadow-lg
            "
          >

            <FiBriefcase size={30} />

          </div>

          <div>

            <h3
              className="
                text-3xl
                font-black
                tracking-tight
                dark:text-white
              "
            >
              {item.company}
            </h3>

            <p
              className="
                mt-1
                font-semibold
                text-violet-600
              "
            >
              {item.role}
            </p>

          </div>

        </div>

        {/* Description */}

        <p
          className="
            mt-8
            leading-8
            text-zinc-500
            dark:text-zinc-400
          "
        >
          {item.description}
        </p>

        {/* Technologies */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-3
          "
        >
                      {item.technologies.map((tech) => (

            <motion.span

              key={tech}

              whileHover={{
                scale: 1.08,
              }}

              className="
                rounded-full
                border
                border-violet-200
                bg-violet-100
                px-4
                py-2
                text-xs
                font-semibold
                text-violet-700
                transition-all
                duration-300
                hover:bg-violet-600
                hover:text-white
                dark:border-violet-800
                dark:bg-violet-900/30
                dark:text-violet-300
              "
            >

              {tech}

            </motion.span>

          ))}

        </div>

        {/* Decorative Arrow */}

        <motion.div

          initial={{
            opacity: 0,
            x: isLeft ? -20 : 20,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            delay: 0.4,
          }}

          className={`
            absolute
            top-1/2
            hidden
            h-[2px]
            w-14
            bg-gradient-to-r
            from-violet-500
            to-transparent
            lg:block
            ${
              isLeft
                ? "-right-14"
                : "-left-14 rotate-180"
            }
          `}
        />

      </motion.div>

    </motion.div>

  );
};

export default TimelineCard;