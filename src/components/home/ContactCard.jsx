import { motion } from "framer-motion";

const ContactCard = ({
  icon: Icon,
  title,
  value,
  href,
  delay = 0,
}) => {
  return (
    <motion.a
      href={href}
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.6,
      }}
      whileHover={{
        x: 8,
      }}
      className="
        group
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-zinc-200
        bg-white/80
        p-6
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-300
        hover:shadow-[0_20px_60px_rgba(124,58,237,.18)]
        dark:border-zinc-800
        dark:bg-zinc-900/80
      "
    >
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
          dark:bg-violet-900/30
        "
      >
        <Icon size={28} />
      </div>

      <div>

        <p
          className="
            text-sm
            text-zinc-500
          "
        >
          {title}
        </p>

        <h3
          className="
            mt-1
            text-lg
            font-bold
            dark:text-white
          "
        >
          {value}
        </h3>

      </div>

    </motion.a>
  );
};

export default ContactCard;