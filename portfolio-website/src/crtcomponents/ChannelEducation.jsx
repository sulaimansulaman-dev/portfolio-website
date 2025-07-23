// components/ChannelEducation.jsx
const education = [
  {
    title: "Bachelor of Science in Information Technology",
    company: "NWU (Potchefstroom)",
    date: "FEB 2023 - NOV 2025 (Expected)",
    desc: "GPA: 65.40% \n● Coursework: Programming, Databases, Data Structures and Algorithms, Artificial Intelligence, Systems Analysis and Design, Operating Systems, Information Security, Computer Networks, and Mathematics.",
  },
  {
    title: "National Senior Certificate",
    company: "Hoerskool Standerton",
    date: "NOV 2022",
    desc: "● Focus Subjects: Mathematics, Physical Sciences, Information Technology, and Engineering Graphics and Design. \n ● Participated in Coding Events and was an active member of the Robotics Club.",
  },
];

export default function ChannelEducation() {
  return (
    <div className="w-full h-full bg-grey text-green-300 font-mono p-6">
      <div className="text-green-400 text-xl mb-4"> Channel 4: EDUCATION</div>
      {education.map((edu, i) => (
        <div key={i} className="mb-4 border-l-4 border-green-600 pl-4">
          <div className="text-green-200 text-lg">{edu.title}</div>
          <div className="text-green-400 text-sm italic">
            {edu.company} — {edu.date}
          </div>
          <div className="text-sm">
            {edu.desc.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
