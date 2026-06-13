import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import Button from "../common/Button";

const skills = [
  "React.js",
  "Laravel",
  "PHP",
  "WordPress",
  "MySQL",
  "Python",
];

const AboutContent = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
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
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          rounded-full
          bg-violet-100
          px-5
          py-2
          text-sm
          font-semibold
          text-violet-600
        "
      >
        ABOUT ME
      </span>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-5xl
          font-black
          leading-tight
          text-zinc-900
          dark:text-white
        "
      >
        Building Digital
        <span className="text-violet-600">
          {" "}Experiences
        </span>

        <br />

        That Make An Impact.
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          text-lg
          leading-8
          text-zinc-600
          dark:text-zinc-300
        "
      >
        I'm Nishant Kanada, a Full Stack Web Developer
        passionate about creating modern, responsive and
        high-performance web applications.

        My experience includes building solutions using
        React, Laravel, PHP, WordPress and MySQL while
        collaborating with development teams on real-world
        client projects.
      </p>

      {/* Skills */}

      <div className="mt-10 grid grid-cols-2 gap-4">

        {skills.map((skill) => (

          <div
            key={skill}
            className="flex items-center gap-3"
          >
            <FiCheckCircle
              className="text-violet-600"
            />

            <span className="font-medium">

              {skill}

            </span>

          </div>

        ))}

      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap gap-4">

        <Button>

          Download Resume

        </Button>

        <Button
          variant="outline"
          icon={<FiArrowRight />}
        >

          Let's Connect

        </Button>

      </div>

    </motion.div>
  );
};

export default AboutContent;