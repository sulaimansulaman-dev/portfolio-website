// components/ChannelProjects.jsx
const projects = [
  {
    title: "CRT Portfolio",
    description: "A retro CRT-style portfolio with channel-flipping navigation.",
  },
  {
    title: "Game Jam Project",
    description: "Built a game for Arcademia Game Jam using Unity.",
  },
  {
    title: "Realtime Chat App",
    description: "React + Firebase chat app with friend/group chat.",
  },
];

export default function ChannelProjects() {
  return (
    <div className="w-full h-full bg-[#111] text-gray-200 font-mono p-6">
      <div className="text-cyan-400 text-xl mb-4">📺 Channel 2: PROJECTS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div key={i} className="border border-cyan-400 p-4 hover:bg-cyan-800/20 transition-all">
            <div className="text-cyan-300 text-lg">{project.title}</div>
            <div className="text-gray-300 text-sm">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
