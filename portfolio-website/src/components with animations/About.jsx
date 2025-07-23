import { motion } from "framer-motion";

export default function About() {
  return (
    
    <section
      id="about"
      className="min-h-screen bg-[#222] text-white flex items-center px-6 sm:px-12 py-20"
    >
 




      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text */}
        <div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-indigo-500">About</span> Me
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            I'm a final-year BSc IT student passionate about learning new
            things, solving problems, and fixing tech. I enjoy collaborating
            with others, working hard, and always meeting deadlines.{" "}
          </p>
          <p className="text-gray-400 text-lg">
            In my free time, you'll find me watching tech videos, playing video
            games, or taking things apart and putting them back together.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
