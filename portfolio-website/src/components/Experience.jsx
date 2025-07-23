import { motion } from "framer-motion";

const experiences = [
  {
    title: "Arcademia Game Jam",
    company: "North West University (Potchefstroom)",
    date: "MAY 2025",
    description:
      "● Won 1st place at the 2025 Arcademia Game Jam with a network-themed twin-stick shooter game built in under 48 hours.\n ● Collaborated with a team, built using GameMaker Studio with Game Maker Language."
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#222] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="relative pl-8 sm:pl-24">
          {/* Timeline items and line */}
          <div className="relative space-y-16">
            {/* Vertical line: ends before the last dot */}
            <div
              className="absolute left-[120px] top-0 w-[2px] bg-indigo-600"
              style={{
                height: `calc(100% - 2.5rem)`, // Adjust 2.5rem to match the spacing to the last dot
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Date column */}
                <div className="w-32 text-right pr-4 text-indigo-400 font-medium pt-2">
                  {exp.date}
                </div>

                {/* Dot on the timeline */}
                <div className="relative w-8 flex justify-center">
                  <div className="w-4 h-4 bg-indigo-500 border-4 border-[#0a0a0a] rounded-full mt-2 z-10" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-indigo-300 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400 italic mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {exp.description}
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
