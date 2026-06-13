import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";

import TimelineCard from "./TimelineCard";
import TimelineLine from "./TimelineLine";
import experienceData from "./experienceData";

const stats = [
  {
    number: "1+",
    title: "Years Experience",
  },
  {
    number: "15+",
    title: "Projects",
  },
  {
    number: "7+",
    title: "Happy Clients",
  },
  {
    number: "99.99%",
    title: "Commitment",
  },
];

const ExperienceSection = () => {

  return (

    <section id="experience"
      className="
        relative
        overflow-hidden
        py-32
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[140px]
        "
      />

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

          className="
            mx-auto
            mb-24
            max-w-3xl
            text-center
          "
        >

          <span
            className="
              rounded-full
              bg-violet-100
              px-5
              py-2
              text-sm
              font-semibold
              text-violet-600
            "
          >

            MY JOURNEY

          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              dark:text-white
            "
          >

            Experience
            <span className="text-violet-600">

              {" "}Timeline

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

            My professional journey from
            internships to building premium
            digital experiences for businesses.

          </p>

        </motion.div>

        {/* Timeline */}

        <div
          className="
            relative
            mx-auto
            max-w-6xl
          "
        >

          <TimelineLine />

          {experienceData.map((item, index) => (

            <TimelineCard

              key={item.id}

              item={item}

              index={index}

            />

          ))}

        </div>

        {/* Stats */}

        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((stat, index) => (

            <motion.div

              key={stat.title}

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
                delay: index * 0.15,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                rounded-3xl
                border
                border-zinc-200
                bg-white/80
                p-8
                text-center
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet-300
                hover:shadow-[0_20px_60px_rgba(124,58,237,.18)]
                dark:border-zinc-800
                dark:bg-zinc-900/80
              "
            >

              <h3
                className="
                  text-5xl
                  font-black
                  text-violet-600
                "
              >

                {stat.number}

              </h3>

              <p
                className="
                  mt-3
                  text-zinc-500
                "
              >

                {stat.title}

              </p>

            </motion.div>

          ))}

        </div>

        {/* CTA */}

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
            delay: 0.3,
          }}

          className="
            mt-24
            rounded-[36px]
            bg-gradient-to-r
            from-violet-600
            via-violet-700
            to-indigo-700
            p-12
            text-center
            text-white
          "
        >

          <h3
            className="
              text-4xl
              font-black
            "
          >

            Let's Build Something Amazing Together

          </h3>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-violet-100
            "
          >

            Whether you need a modern website,
            a full stack web application or a
            WordPress solution, I'm ready to
            turn your ideas into reality.

          </p>

          <div
            className="
              mt-10
              flex
              justify-center
            "
          >

            <Button id="contact">

              Start Your Project

            </Button>

          </div>

        </motion.div>

      </Container>

    </section>

  );

};

export default ExperienceSection;