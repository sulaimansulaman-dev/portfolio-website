// src/components/TechStack.jsx
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFigma } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vite", icon: <SiVite className="text-violet-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="min-h-screen bg-[#111] text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-indigo-500">Tech</span> Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#1c1c1c] rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <p className="text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
