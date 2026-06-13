import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiCheckCircle } from "react-icons/fi";

import Button from "../common/Button";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20"
    >
      {/* Availability */}
                 
      {/* Heading */}
      <motion.h1
      id="hero-heading"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-zinc-900 dark:text-white lg:text-7xl"
      >
        Crafting
        <br />
        <span className="text-violet-600">Premium Digital</span>
        <br />
        Experiences
      </motion.h1>

      {/* Description */}
      <motion.p
      aria-label="Hero Description"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-8 max-w-xl text-lg leading-8 text-zinc-500 dark:text-zinc-400"
      >
        I design and develop high-performance websites using React, Laravel,
        WordPress and modern web technologies that help businesses grow online.
      </motion.p>

      {/* Buttons */}
      <nav

aria-label="Hero Actions"

className="mt-10 flex flex-wrap gap-5"

>
        <Button
  aria-label="Contact Me"
  icon={<FiArrowRight aria-hidden="true" />}
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact
        </Button>

        <Button
  aria-label="Download Resume"
  variant="outline"
  icon={<FiDownload aria-hidden="true" />}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Nishant_Resume.pdf";
            link.click();
          }}
        >
          Download CV
        </Button>
      </nav>

      {/* Trust Stats */}
      <div className="mt-14 flex flex-wrap gap-8" role="list">
        {[
          { value: "15+", label: "Projects", delay: 0.7 },
          { value: "7+", label: "Happy Clients", delay: 0.8 },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stat.delay }}
            className="flex items-center gap-3"
            role="listitem"
          >
            <FiCheckCircle
className="text-violet-600"
size={20}
aria-hidden="true"
/>
            <div>
              <h3 className="text-3xl font-black dark:text-white">{stat.value}</h3>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        role="list"
        className="mt-12 flex flex-wrap gap-3"
      >
        {["React", "Laravel", "WordPress", "PHP", "Tailwind", "MySQL"].map((tech) => (
          <span
            key={tech} role="listitem"
            className="rounded-full border border-violet-200 bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:text-white dark:border-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
          >
            {tech}
          </span>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default HeroContent;