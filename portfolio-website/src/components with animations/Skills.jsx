// src/components/TechStack.jsx
import {
  FaPython,
  FaJava,
  FaReact,
  FaDatabase,
  FaBrain,
  FaFire,
  FaPuzzlePiece,
  FaCogs,
  FaUserFriends,
  FaBolt,
} from "react-icons/fa";
import { SiTailwindcss, SiElectron } from "react-icons/si";

const technologies = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C#", icon: <span className="text-blue-400 text-4xl">#️⃣</span> },
  { name: "C++", icon: <span className="text-blue-300 text-4xl">➕➕</span> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-400" /> },
  { name: "Basic Machine Learning", icon: <FaBrain className="text-pink-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Firebase", icon: <FaFire className="text-yellow-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Electron", icon: <SiElectron className="text-blue-200" /> },
  { name: "GameMaker", icon: <span className="text-green-400 text-4xl">🎮</span> },
  { name: "Problem-Solving", icon: <FaPuzzlePiece className="text-purple-400" /> },
  { name: "Adaptability", icon: <FaCogs className="text-orange-400" /> },
  { name: "Collaboration", icon: <FaUserFriends className="text-teal-400" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#111] text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#1c1c1c] rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <p className="text-lg font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
