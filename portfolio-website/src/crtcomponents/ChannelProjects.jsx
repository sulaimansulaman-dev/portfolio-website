// components/ChannelProjects.jsx
const projects = [
  {
    title: "Messaging App  — React, Tailwind, Firebase, Electron",
    description: `●  Built a real-time messaging app using React, Tailwind, Firebase, and Electron with support for private and group chats.\nhttps://github.com/sulaimansulaman-dev/Messaging-App`,
  },
  {
    title: "Vehicle Rental Management System  — C# Winforms & SQL Server",
    description: `●  Built a desktop app for managing vehicles, customers, payments and rental orders.\n●  Developed in Visual Studio using C# WinForms, used full CRUD, validation, and reporting, connected to SQL Server via ADO.NET.\nhttps://github.com/sulaimansulaman-dev/roadrunner-rental-system`,
  },
];

export default function ChannelProjects() {
  return (
    <div className="w-full h-full bg-grey text-gray-200 font-mono p-6">
      <div className="text-green-400 text-xl mb-4"> Channel 3: PROJECTS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, i) => (
          <div key={i} className="border border-green-400 p-4 hover:bg-green-800/20 transition-all">
            <div className="text-green-300 text-lg mb-2">{project.title}</div>
            <div className="text-gray-300 text-sm space-y-1">
              {project.description.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
