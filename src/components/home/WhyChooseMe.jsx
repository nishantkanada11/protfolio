import { motion } from "framer-motion";
import {
  FiZap,
  FiSmartphone,
  FiSearch,
  FiLayout,
} from "react-icons/fi";

const features = [
  {
    title: "Fast Performance",
    description:
      "Optimized websites that load quickly and provide a smooth user experience.",
    icon: FiZap,
  },
  {
    title: "Premium UI/UX",
    description:
      "Modern, clean and user-focused interfaces designed to impress clients.",
    icon: FiLayout,
  },
  {
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that work beautifully across all screen sizes.",
    icon: FiSmartphone,
  },
  {
    title: "SEO Optimized",
    description:
      "Built with SEO best practices to improve visibility and search rankings.",
    icon: FiSearch,
  },
];

const WhyChooseMe = () => {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-600">

            WHY CLIENTS CHOOSE ME

          </span>

          <h2 className="mt-6 text-5xl font-black text-zinc-900 dark:text-white">

            Delivering More Than
            <span className="text-violet-600"> Just Code.</span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-500">

            Every website is crafted with performance,
            modern design and business growth in mind.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * .15,
                }}

                whileHover={{
                  y: -10,
                }}

                className="
                  group
                  rounded-3xl
                  border
                  border-zinc-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-violet-300
                  hover:shadow-2xl
                  dark:border-zinc-800
                  dark:bg-zinc-900
                "
              >

                <div
                  className="
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-violet-100
                    text-violet-600
                    transition
                    duration-300
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                >

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-5 leading-7 text-zinc-500">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseMe;