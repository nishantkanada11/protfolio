import { motion } from "framer-motion";

import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaServer,
  FaRocket,
  FaTools,
} from "react-icons/fa";

import Container from "../common/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: FaReact,
    title: "React Development",
    description:
      "Modern, responsive and high-performance React applications.",
    technologies: [
      "React",
      "Vite",
      "Tailwind",
    ],
  },
  {
    icon: FaLaravel,
    title: "Laravel Development",
    description:
      "Secure backend systems, REST APIs and scalable Laravel applications.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
    ],
  },
  {
    icon: FaWordpress,
    title: "WordPress Development",
    description:
      "Business websites, custom themes, plugins and CMS solutions.",
    technologies: [
      "WordPress",
      "Elementor",
      "ACF",
    ],
  },
  {
    icon: FaServer,
    title: "Full Stack Development",
    description:
      "Complete frontend and backend development using modern technologies.",
    technologies: [
      "React",
      "Laravel",
      "MySQL",
    ],
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Improve speed, Core Web Vitals, SEO and overall website performance.",
    technologies: [
      "SEO",
      "Caching",
      "Cloudflare",
    ],
  },
  {
    icon: FaTools,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, bug fixing and feature enhancements.",
    technologies: [
      "Support",
      "Updates",
      "Security",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32">

      <Container>

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
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-600">

            MY SERVICES

          </span>

          <h2 className="mt-6 text-5xl font-black dark:text-white">

            What I Can Build
            <span className="text-violet-600">
              {" "}For You
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-500">

            From modern frontend development to scalable backend systems,
            I create digital products focused on performance,
            user experience and business growth.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                      {services.map((service, index) => (

            <ServiceCard

              key={service.title}

              icon={service.icon}

              title={service.title}

              description={service.description}

              technologies={service.technologies}

              delay={index * 0.12}

            />

          ))}

        </div>

      </Container>

    </section>

  );
};

export default ServicesSection;