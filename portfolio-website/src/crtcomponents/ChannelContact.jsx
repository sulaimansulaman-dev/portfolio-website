// components/ChannelContact.jsx
export default function ChannelContact() {
  return (
    <div className="w-full h-full bg-black text-red-300 font-mono p-6 flex flex-col items-center justify-center text-center">
      <div className="text-red-500 text-xl mb-4">📺 Channel 4: CONTACT</div>
      <div className="text-sm mb-4">Signal weak... attempting to connect.</div>
      <form
        className="flex flex-col gap-2 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          alert("📡 Message sent into the void!");
        }}
      >
        <input className="bg-black border border-red-500 p-2 text-red-300" placeholder="Your Name" required />
        <input className="bg-black border border-red-500 p-2 text-red-300" placeholder="Your Email" type="email" required />
        <textarea className="bg-black border border-red-500 p-2 text-red-300" rows="4" placeholder="Your Message" required />
        <button className="bg-red-600 hover:bg-red-800 text-white p-2">Send Transmission</button>
      </form>
    </div>
  );
}
