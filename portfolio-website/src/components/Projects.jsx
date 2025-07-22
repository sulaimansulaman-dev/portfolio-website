export default function Projects() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold">Messaging App</h3>
          <p>Built with React, Tailwind, Firebase, Electron. Supports private/group chats.</p>
          <a href="https://github.com/sulaimansulaman-dev/Messaging-App" className="text-blue-600 underline">View Project</a>
        </div>
        <div>
          <h3 className="font-bold">Vehicle Rental Management System</h3>
          <p>Desktop app using C# WinForms, SQL Server, ADO.NET.</p>
          <a href="https://github.com/sulaimansulaman-dev/roadrunner-rental-system" className="text-blue-600 underline">View Project</a>
        </div>
        <div>
          <h3 className="font-bold">IP Conflict (Game Jam Winner)</h3>
          <p>Network-themed twin-stick shooter built in GameMaker Studio.</p>
          <a href="https://github.com/sulaimansulaman-dev/ip-conflict-arcademia-game-jam" className="text-blue-600 underline">View Project</a>
        </div>
      </div>
    </section>
  )
}
