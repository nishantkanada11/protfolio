import { motion } from "framer-motion";

import {
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

import Container from "../common/Container";
import Button from "../common/Button";

const Footer = () => {

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  const openWhatsApp = () => {

    window.open(

      "https://wa.me/919429269495?text=Hi%20Nishant,%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project.",

      "_blank",

      "noopener,noreferrer"

    );

  };

  return (

    <footer

      className="
        relative
        overflow-hidden
        border-t
        border-zinc-200
        bg-zinc-50
        py-24
        dark:border-zinc-800
        dark:bg-zinc-950
      "

    >

      {/* Glow */}

      <div

        aria-hidden="true"

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

        <div

          className="
            grid
            gap-16
            lg:grid-cols-4
          "

        >

          {/* Column 1 */}

          <div>

            <h2

              className="
                text-4xl
                font-black
                dark:text-white
              "

            >

              NISHANT

              <span className="text-violet-600">

                .

              </span>

            </h2>

            <p

              className="
                mt-6
                leading-8
                text-zinc-500
              "

            >

              Building premium web experiences
              using React, Laravel,
              WordPress and modern
              frontend technologies.

            </p>

            <div className="mt-8">

              <Button

                aria-label="Hire Me On WhatsApp"

                onClick={openWhatsApp}

              >

                Hire Me

              </Button>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold dark:text-white">

              Quick Links

            </h3>

            <ul className="mt-6 space-y-4">

              <li>

                <a

                  href="#about"

                  aria-label="Go to About Section"

                  className="text-zinc-500 transition hover:text-violet-600"

                >

                  About

                </a>

              </li>

              <li>

                <a

                  href="#services"

                  aria-label="Go to Services Section"

                  className="text-zinc-500 transition hover:text-violet-600"

                >

                  Services

                </a>

              </li>

              <li>

                <a

                  href="#projects"

                  aria-label="Go to Projects Section"

                  className="text-zinc-500 transition hover:text-violet-600"

                >

                  Projects

                </a>

              </li>

              <li>

                <a

                  href="#experience"

                  aria-label="Go to Experience Section"

                  className="text-zinc-500 transition hover:text-violet-600"

                >

                  Experience

                </a>

              </li>

              <li>

                <a

                  href="#contact"

                  aria-label="Go to Contact Section"

                  className="text-zinc-500 transition hover:text-violet-600"

                >

                  Contact

                </a>

              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold dark:text-white">

              Services

            </h3>

            <ul className="mt-6 space-y-4 text-zinc-500">

              <li>React Development</li>

              <li>Laravel Development</li>

              <li>WordPress Development</li>

              <li>Full Stack Development</li>

              <li>Website Optimization</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold dark:text-white">

              Connect

            </h3>

            <div className="mt-6 flex gap-4">

              <a

                href="https://www.linkedin.com/in/nishant-kanada-0b7aa4311"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="Visit LinkedIn Profile"

                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-100
                  text-violet-600
                  transition
                  hover:scale-110
                  hover:bg-violet-600
                  hover:text-white
                "

              >

                <FiLinkedin aria-hidden="true" />

              </a>

              <a

                href="mailto:nishantkanada9@gmail.com"

                aria-label="Send Email"

                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-violet-100
                  text-violet-600
                  transition
                  hover:scale-110
                  hover:bg-violet-600
                  hover:text-white
                "

              >

                <FiMail aria-hidden="true" />

              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div

          className="
            mt-20
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-zinc-200
            pt-8
            dark:border-zinc-800
            md:flex-row
          "

        >

          <p className="text-zinc-500">

            © {new Date().getFullYear()} Nishant Kanada.
            All rights reserved.

          </p>

          <motion.button

            aria-label="Scroll To Top"

            whileHover={{
              y: -4,
            }}

            whileTap={{
              scale: .95,
            }}

            onClick={scrollTop}

            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-violet-600
              text-white
              shadow-lg
            "

          >

            <FiArrowUp aria-hidden="true" />

          </motion.button>

        </div>

      </Container>

    </footer>

  );

};

export default Footer;