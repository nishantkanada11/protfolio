import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

const ProjectCard = ({
  project,
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
        duration: 0.7,
      }}
      whileHover={{
        y: -12,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:border-violet-300
        hover:shadow-[0_25px_80px_rgba(124,58,237,.18)]
        dark:border-zinc-800
        dark:bg-zinc-900
      "
    >

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            h-72
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            flex
            items-end
            justify-between
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
            p-6
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >

          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-zinc-900
            "
          >

            <FiArrowUpRight size={20} />

          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-zinc-900
            "
          >

            <FiGithub size={20} />

          </a>

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <span className="text-sm font-semibold text-violet-600">

          {project.category}

        </span>

        <h3 className="mt-3 text-2xl font-bold dark:text-white">

          {project.title}

        </h3>

        <p className="mt-4 leading-7 text-zinc-500">

          {project.description}

        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (

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

      </div>

    </motion.div>
  );
};

export default ProjectCard;