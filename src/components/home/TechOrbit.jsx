import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaWordpress, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techs = [
  { name: "React", icon: FaReact, color: "text-sky-500" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "MERN", icon: FaNodeJs, color: "text-green-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "WordPress", icon: FaWordpress, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
];

const radius = 260;

const TechOrbit = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="absolute left-1/2 top-1/2 h-0 w-0 z-50"
    >
      {techs.map((tech, index) => {
        const angle = (index / techs.length) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            style={{
              position: "absolute",
              x: x - 70,
              y: y - 45,
            }}
            className="z-50"
          >
            {/* Counter-rotate so cards stay upright */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 shadow-xl dark:bg-zinc-900 w-[140px] h-[90px]"
            >
              <Icon className={`text-3xl ${tech.color}`} />
              <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200">
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TechOrbit;