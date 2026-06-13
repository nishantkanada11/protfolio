import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";

const techData = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    color: "text-sky-500",
  },
  {
    id: 2,
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-500",
  },
  {
    id: 3,
    name: "WordPress",
    icon: FaWordpress,
    color: "text-blue-600",
  },
  {
    id: 4,
    name: "PHP",
    icon: FaPhp,
    color: "text-indigo-500",
  },
  {
    id: 5,
    name: "Python",
    icon: FaPython,
    color: "text-yellow-500",
  },
  {
    id: 6,
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
  },
  {
    id: 7,
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    id: 8,
    name: "MySQL",
    icon: SiMysql,
    color: "text-sky-700",
  },
  {
    id: 9,
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    id: 10,
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-500",
  },
  {
    id: 11,
    name: "Vercel",
    icon: SiVercel,
    color: "text-black dark:text-white",
  },
  {
    id: 12,
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
];

export default techData;