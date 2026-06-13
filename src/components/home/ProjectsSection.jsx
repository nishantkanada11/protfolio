import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";

import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

const ProjectsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

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
            FEATURED PROJECTS
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              text-zinc-900
              dark:text-white
            "
          >
            Selected
            <span className="text-violet-600">
              {" "}Work
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-500
            "
          >
            A collection of business websites,
            React applications, Laravel projects
            and WordPress solutions that I've
            built for real clients.
          </p>

        </motion.div>

        {/* Projects */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
          "
        >

          {projectData.map((project, index) => (

            <ProjectCard

              key={project.id}

              project={project}

              delay={index * 0.12}

            />

          ))}

        </div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-20
            flex
            justify-center
          "
        >

          <Button
            icon={<FiArrowRight />}
          >
            View All Projects
          </Button>

        </motion.div>

      </Container>

    </section>
  );
};

export default ProjectsSection;