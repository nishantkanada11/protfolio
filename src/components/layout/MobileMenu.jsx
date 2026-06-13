import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({
  isOpen,
  onClose,
  navLinks,
  scrollToSection,
}) => {

  const openWhatsApp = () => {

    window.open(

      "https://wa.me/919429269495?text=Hi%20Nishant,%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project.",

      "_blank",

      "noopener,noreferrer"

    );

  };

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          initial={{
            x: "100%",
          }}

          animate={{
            x: 0,
          }}

          exit={{
            x: "100%",
          }}

          transition={{
            duration: .45,
            ease: "easeInOut",
          }}

          className="
            fixed
            inset-0
            z-[1000]
            bg-white/95
            backdrop-blur-2xl
            dark:bg-zinc-950/95
            lg:hidden
          "

        >

          <Container className="flex h-full flex-col">

            {/* Header */}

            <div

              className="
                flex
                h-24
                items-center
                justify-between
              "

            >

              <button

                onClick={() => {

                  scrollToSection("home");

                  onClose();

                }}

                aria-label="Go To Home"

                className="
                  text-3xl
                  font-black
                  tracking-tight
                "

              >

                NISHANT

                <span className="text-violet-600">

                  .

                </span>

              </button>

              <button

                onClick={onClose}

                aria-label="Close Menu"

                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-zinc-200
                  dark:border-zinc-700
                "

              >

                <HiOutlineXMark

                  size={30}

                  aria-hidden="true"

                />

              </button>

            </div>

            {/* Menu */}

            <div

              className="
                flex
                flex-1
                flex-col
                justify-center
                gap-8
              "

            >
                            {navLinks.map((item, index) => (

                <motion.div

                  key={item.id}

                  initial={{
                    opacity: 0,
                    x: 40,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: index * 0.08,
                  }}

                >

                  <button

                    onClick={() => {

                      scrollToSection(item.id);

                      onClose();

                    }}

                    aria-label={`Go to ${item.name}`}

                    className="
                      text-5xl
                      font-black
                      transition
                      hover:text-violet-600
                    "

                  >

                    {item.name}

                  </button>

                </motion.div>

              ))}

            </div>

            {/* Bottom */}

            <div

              className="
                mb-10
                flex
                items-center
                justify-between
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

                Hire Me

              </Button>

            </div>

          </Container>

        </motion.div>

      )}

    </AnimatePresence>

  );

};

export default MobileMenu;