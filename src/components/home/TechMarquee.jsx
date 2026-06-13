import { motion } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-sky-500",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-500",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-500",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "text-indigo-500",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-sky-700",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-500",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-black dark:text-white",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
];

const marqueeItems = [...technologies, ...technologies];

const TechMarquee = () => {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Section Heading */}

      <div className="mb-14 text-center">

        <h2 className="text-4xl font-black text-zinc-900 dark:text-white">

          Technologies I Work With

        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-500">

          Building fast, scalable and modern web applications
          using the latest technologies.

        </p>

      </div>

      {/* Left Fade */}

      <div className="absolute left-0 top-0 z-20 h-full w-36 bg-gradient-to-r from-white to-transparent dark:from-black" />

      {/* Right Fade */}

      <div className="absolute right-0 top-0 z-20 h-full w-36 bg-gradient-to-l from-white to-transparent dark:from-black" />

      {/* Marquee */}

      <motion.div

        animate={{
          x: ["0%", "-50%"],
        }}

        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 22,
        }}

        className="flex w-max gap-8"
      >

        {marqueeItems.map((tech, index) => {

          const Icon = tech.icon;

          return (

            <div

              key={index}

              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-zinc-200
                bg-white/80
                px-6
                py-4
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-zinc-700
                dark:bg-zinc-900/80
              "
            >

              <Icon
                className={`${tech.color} text-3xl`}
              />

              <span className="font-semibold whitespace-nowrap">

                {tech.name}

              </span>

            </div>

          );

        })}

      </motion.div>

    </section>
  );
};

export default TechMarquee;