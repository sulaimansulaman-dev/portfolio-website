// components/ChannelSkills.jsx
const skills = [
  "Python", "Java", "C#", "C++", "SQL", "Basic Machine Learning",
  "React", "Firebase", "Tailwind", "Electron", "GameMaker",
  "Problem-Solving", "Adaptability", "Collaboration"
];

export default function ChannelSkills() {
  return (
    <div className="w-full h-full bg-black text-green-300 font-mono p-6">
      <div className="text-green-400 text-xl mb-4"> Channel 5: SKILLS</div>
      <div className="text-sm flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-green-900 text-green-200 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
