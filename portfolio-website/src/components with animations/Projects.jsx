import { motion } from "framer-motion";

const ProjectData = [
  {
    title: " Messaging App  — React, Tailwind, Firebase, Electron ",
    date: "APR 2025 ",
    description:
      "●  Built a real-time messaging app using React, Tailwind, Firebase, and Electron with support for private and group chats. \n https://github.com/sulaimansulaman-dev/Messaging-App",
  },
  {
    title: "Vehicle Rental Management System  — C# Winforms & SQL Server ",
    date: "SEP 2024",
    description:
      "●  Built a desktop app for managing vehicles, customers, payments and rental orders. \n ●  Developed in Visual Studio using C# WinForms, used full CRUD, validation, and reporting, connected to SQL Server via ADO.NET.\n https://github.com/sulaimansulaman-dev/roadrunner-rental-system",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#222] text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="relative border-l-2 border-indigo-600 pl-8 space-y-14">
          {ProjectData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 italic mb-2">
                {exp.date}
              </p>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
