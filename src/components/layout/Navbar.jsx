import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import useScrollDirection from "../../hooks/useScrollDirection";

const navLinks = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Services",
    id: "services",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const {
    showNavbar,
    isScrolled,
  } = useScrollDirection();

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

    setMenuOpen(false);

  };

  const openWhatsApp = () => {

    window.open(

      "https://wa.me/919429269495?text=Hi%20Nishant,%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project.",

      "_blank",

      "noopener,noreferrer"

    );

  };

  return (

    <>

      <motion.header

        initial={{
          y: -100,
        }}

        animate={{
          y: showNavbar
            ? 0
            : -120,
        }}

        transition={{
          duration: .35,
        }}

        className="
          fixed
          left-0
          top-0
          z-50
          w-full
        "

      >

        <Container>

          <div

            className={`

              mt-5

              flex

              items-center

              justify-between

              rounded-full

              border

              px-7

              py-4

              transition-all

              duration-500

              ${
                isScrolled
                  ? "border-zinc-200 bg-white/80 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80"
                  : "border-transparent bg-transparent"
              }

            `}

          >

            {/* Logo */}

            <button

              onClick={() => scrollToSection("home")}

              aria-label="Go To Home"

              className="
                text-3xl
                font-black
                tracking-tight
                transition-colors
                duration-300
                text-black
                dark:text-white
              "

            >

              NISHANT

              <span className="text-violet-600">

                .

              </span>

            </button>

            {/* Desktop Navigation */}

            <nav

              aria-label="Primary Navigation"

              className="
                hidden
                items-center
                gap-10
                lg:flex
              "

            >
                            {navLinks.map((item) => (

                <button

                  key={item.id}

                  onClick={() => scrollToSection(item.id)}

                  aria-label={`Go to ${item.name}`}

                  className="
                    group
                    relative
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:text-violet-600
                    dark:text-white
                  "

                >

                  {item.name}

                  <span

                    aria-hidden="true"

                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      bg-violet-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "

                  />

                </button>

              ))}

            </nav>

            {/* Right Side */}

            <div

              className="
                hidden
                items-center
                gap-4
                lg:flex
              "

            >

              <ThemeToggle />

              <Button

                aria-label="Hire Me On WhatsApp"

                icon={
                  <FaWhatsapp
                    aria-hidden="true"
                  />
                }

                onClick={openWhatsApp}

              >

                Let's Talk

              </Button>

            </div>

            {/* Mobile Button */}

            <button

              aria-label="Open Navigation Menu"

              onClick={() => setMenuOpen(true)}

              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                text-black
                dark:text-white
                lg:hidden
              "

            >

              <HiOutlineBars3

                size={30}

                aria-hidden="true"

              />

            </button>

          </div>

        </Container>

      </motion.header>

      <MobileMenu

        isOpen={menuOpen}

        onClose={() => setMenuOpen(false)}

        navLinks={navLinks}

        scrollToSection={scrollToSection}

      />

    </>

  );

};

export default Navbar;