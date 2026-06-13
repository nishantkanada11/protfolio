import { motion, AnimatePresence } from "framer-motion";

const TechBanner = ({
  tech,
  position,
  delay = 0,
}) => {
  const Icon = tech.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tech.id}
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          y: -20,
        }}
        transition={{
          duration: 0.45,
          delay,
        }}
        className={`absolute ${position} z-30`}
      >
        <div
          className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/40
            bg-white/80
            px-5
            py-3
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-violet-400
            hover:shadow-[0_15px_45px_rgba(124,58,237,.25)]
            dark:border-zinc-700
            dark:bg-zinc-900/80
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-zinc-100
              dark:bg-zinc-800
            "
          >
            <Icon
              className={`${tech.color} text-2xl`}
            />
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">
              {tech.name}
            </h4>

            <p className="text-xs text-zinc-500">
              Professional
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechBanner;