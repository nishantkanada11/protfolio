import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import { useEffect } from "react";

import Container from "../common/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {

  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 60,
    damping: 18,
  });

  const springY = useSpring(mouseY, {
    stiffness: 60,
    damping: 18,
  });

  const rotateX = useTransform(
    springY,
    [-300, 300],
    prefersReducedMotion ? [0, 0] : [10, -10]
  );

  const rotateY = useTransform(
    springX,
    [-300, 300],
    prefersReducedMotion ? [0, 0] : [-10, 10]
  );

  useEffect(() => {

    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };

  }, [mouseX, mouseY, prefersReducedMotion]);

  return (

    <section

      id="home"

      aria-label="Hero Section"

      className="
        relative
        -mt-28
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-32
      "

    >

      <HeroBackground />

      <Container>

        <div

          className="
            grid
            min-h-screen
            items-center
            gap-20
            lg:grid-cols-2
          "

        >

          <HeroContent />

          <motion.div

            initial={{
              opacity: 0,
              x: prefersReducedMotion ? 0 : 80,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: .9,
            }}

            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}

            className="
              relative
              flex
              justify-center
              lg:-translate-y-35
            "

          >

            <HeroIllustration />

          </motion.div>

        </div>

      </Container>

      {/* Scroll Indicator */}

      <motion.div

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 1.2,
        }}

        aria-hidden="true"

        className="
          absolute
          bottom-8
          left-1/2
          z-30
          -translate-x-1/2
        "

      >

        <motion.div

          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 12, 0],
                }
          }

          transition={{
            repeat: Infinity,
            duration: 2,
          }}

          className="
            flex
            h-14
            w-8
            justify-center
            rounded-full
            border-2
            border-violet-300
            bg-white/30
            p-1
            backdrop-blur-xl
            dark:bg-zinc-900/30
          "

        >

          <motion.div

            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, 20, 0],
                  }
            }

            transition={{
              repeat: Infinity,
              duration: 2,
            }}

            className="
              h-3
              w-3
              rounded-full
              bg-violet-600
            "

          />

        </motion.div>

      </motion.div>

    </section>

  );

};

export default Hero;