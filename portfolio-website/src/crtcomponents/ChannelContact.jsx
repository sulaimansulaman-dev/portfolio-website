// components/ChannelContact.jsx
export default function ChannelContact() {
  return (
  
    <div className="w-full h-full bg-grey text-green-300 font-mono p-6 flex flex-col ">
      <div className="text-green-400 text-xl mb-4"> Channel 6: CONTACT</div>
      <div className="text-sm mb-4">Signal weak... attempting to connect.</div>
      <form
        className="flex flex-col gap-2 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent!");
        }}
      >
        <input className="bg-black border border-green-500 p-2 text-green-300" placeholder="Your Name" required />
        <input className="bg-black border border-green-500 p-2 text-green-300" placeholder="Your Email" type="email" required />
        <textarea className="bg-black border border-green-500 p-2 text-green-300" rows="4" placeholder="Your Message" required />
        <button className="bg-green-600 hover:bg-green-800 text-white p-2">Send Transmission</button>
      </form>
    </div>
  
  );
}
