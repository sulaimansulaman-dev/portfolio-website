import { motion } from "framer-motion";

const ProjectData = [
  {
    title: "Frontend Developer Intern",
    company: "Example Company",
    date: "Jan 2023 - Jun 2023",
    description:
      "Developed responsive UI components using React and Tailwind. Collaborated with backend teams for REST API integration.",
  },
  {
    title: "Freelance Web Developer",
    company: "Freelance",
    date: "Jul 2023 - Present",
    description:
      "Built and deployed full-stack web applications for small businesses using React, Node.js, and Firebase.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#222] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="relative border-l-2 border-indigo-600 pl-8 space-y-14">
          {ProjectData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[1.15rem] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-[#0a0a0a] group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 italic mb-2">
                {exp.company} | {exp.date}
              </p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
