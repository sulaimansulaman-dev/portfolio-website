// components/ChannelExperience.jsx
const experiences = [
  {
    title: "Arcademia Game Jam",
    company: "NWU (Potchefstroom)",
    date: "March 2024",
    desc: "Developed a pixel horror game prototype in a 48-hour jam.",
  },
  {
    title: "Freelance Developer",
    company: "Remote",
    date: "2023 - Present",
    desc: "Built custom websites and interactive UIs for clients.",
  },
];

export default function ChannelExperience() {
  return (
    <div className="w-full h-full bg-black text-purple-300 font-mono p-6">
      <div className="text-purple-400 text-xl mb-4">📺 Channel 3: EXPERIENCE</div>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-4 border-l-4 border-purple-600 pl-4">
          <div className="text-purple-200 text-lg">{exp.title}</div>
          <div className="text-purple-400 text-sm italic">{exp.company} — {exp.date}</div>
          <div className="text-sm">{exp.desc}</div>
        </div>
      ))}
    </div>
  );
}
