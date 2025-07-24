const experiences = [
  {
    title: "Arcademia Game Jam, North West University (Potchefstroom) — Game Developer",
    company: "NWU (Potchefstroom)",
    date: "May 2025",
    desc: `● Won 1st place at the 2025 Arcademia Game Jam with a network themed twin-stick shooter game built in under 48 hours.\n● Collaborated with a team, built using GameMaker Studio with Game Maker Language`,
    github: "https://github.com/sulaimansulaman-dev/ip-conflict-arcademia-game-jam",
  },
];

export default function ChannelExperience() {
  return (
    <div className="w-full h-full bg-grey text-green-300 font-mono p-6">
      <div className="text-green-400 text-xl mb-4">Channel 2: EXPERIENCE</div>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-6 border-l-4 border-green-600 pl-4 flex flex-col gap-2">
          <div className="text-green-200 text-lg">{exp.title}</div>
          <div className="text-green-400 text-sm italic">
            {exp.company} — {exp.date}
          </div>
          <div className="text-sm text-gray-200 space-y-1">
            {exp.desc.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>

          <a
            href={exp.github}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block mt-2 bg-gray-800 hover:bg-green-600 !text-green-300 hover:!text-white text-xs px-3 py-1 rounded shadow-sm transition-all no-underline"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
}
