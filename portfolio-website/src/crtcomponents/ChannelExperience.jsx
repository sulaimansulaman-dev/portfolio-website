// components/ChannelExperience.jsx
const experiences = [
  {
    title: " Arcademia Game Jam, North West University (Potchefstroom)  — Game Developer ",
    company: "NWU (Potchefstroom)",
    date: "May 2025",
    desc: "●  Won 1st place at the 2025 Arcademia Game Jam with a network themed twin-stick shooter game built in under 48 hours. \n ●  Collaborated with a team, built using  GameMaker Studio with Game Maker Language \n https://github.com/sulaimansulaman-dev/ip-conflict-arcademia-game-jam ",
  },

];

export default function ChannelExperience() {
  return (
    <div className="w-full h-full bg-grey text-green-300 font-mono p-6">
      <div className="text-green-400 text-xl mb-4"> Channel 2: EXPERIENCE</div>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-4 border-l-4 border-green-600 pl-4">
          <div className="text-green-200 text-lg">{exp.title}</div>
          <div className="text-green-400 text-sm italic">{exp.company} — {exp.date}</div>
          <div className="text-sm">
  {exp.desc.split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ))}
</div>

        </div>
      ))}
    </div>
  );
}
