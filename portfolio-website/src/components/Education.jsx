import { motion } from "framer-motion";

const education = [
  {
    title: "BSc Information Technology",
    institution: "North West University (Potchefstroom)",
    date: "FEB 2023 - NOV 2025 (Expected)",
    description:
      " GPA: 65.40% \n  ●  Coursework: Programming, Databases, Data Structures and Algorithms, Artificial Intelligence, Systems Analysis and Design, Operating Systems, Information Security, Computer Networks, and Mathematics."
  },
    {
    title: " National Senior Certificate ",
    institution: " Hoerskool Standerton",
    date: "NOV 2022 ",
    description:
      "●  Focus Subjects: Mathematics, Physical Sciences, Information Technology, and Engineering Graphics and Design. \n ●  Participated in Coding Events and was an active member of the Robotics Club."
  },
  // Add more education entries as needed
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#222] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="relative pl-8 sm:pl-24">
          <div className="relative space-y-16">
            <div
              className="absolute left-[120px] top-0 bottom-0 w-[2px] bg-indigo-600"
              style={{ height: "100%" }}
            />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Date column */}
                <div className="w-32 text-right pr-4 text-indigo-400 font-medium pt-2">
                  {edu.date}
                </div>

                {/* Dot on the timeline */}
                <div className="relative w-8 flex justify-center">
                  <div className="w-4 h-4 bg-indigo-500 border-4 border-[#0a0a0a] rounded-full mt-2 z-10" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-indigo-300 mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-gray-400 italic mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
