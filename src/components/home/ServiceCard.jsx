import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  technologies,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:border-violet-300
        hover:shadow-[0_20px_60px_rgba(124,58,237,.18)]
        dark:border-zinc-800
        dark:bg-zinc-900
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-violet-100
          text-violet-600
          transition-all
          duration-300
          group-hover:rotate-12
          group-hover:scale-110
        "
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold dark:text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-zinc-500">
        {description}
      </p>

      {/* Tech Stack */}

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-violet-100
              px-3
              py-1
              text-xs
              font-medium
              text-violet-700
              dark:bg-violet-900/30
              dark:text-violet-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Arrow */}

      <div className="mt-8 flex justify-end">
        <motion.div
          whileHover={{
            x: 6,
            y: -6,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-violet-600
            text-white
          "
        >
          <FiArrowUpRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;