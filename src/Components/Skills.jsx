import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa"; 
import { FiFigma } from "react-icons/fi"; 
import { TbBrandNextjs } from "react-icons/tb";


const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> }, 
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Git", icon: <FaGit className="text-orange-500" /> }, 
      { name: "GitHub", icon: <DiGithubBadge className="text-black" /> },
      { name: "Figma", icon: <FiFigma className="text-purple-500" /> }, 
      { name: "Next.js", icon: <TbBrandNextjs className="text-black dark:text-white" /> }

    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mt-44 text-3xl font-bold mb-4 text-center">Minhas Habilidades</h2>
        <p className="text-center mb-8">
          Minhas tecnologias mais usadas.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-[#00D8E0] p-6 rounded-lg bg-[#032526] shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
