import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-black text-white text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold mb-4"
      >
        Hello, <span className="text-indigo-500">I'm Sulaiman</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6"
      >
        Final-year BSc IT Student & Aspiring Software Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10"
      >
        Select a menu option below to explore my portfolio.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col gap-4 w-full sm:w-auto items-center"
      >
        <a
          href="#about"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold text-lg w-64 transition-all"
        >
          About Me
        </a>

        <a
          href="#experience"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold text-lg w-64 transition-all"
        >
          Experience
        </a>
                <a
          href="#projects"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold text-lg w-64 transition-all"
        >
          Projects
        </a>
        <a
          href="#education"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold text-lg w-64 transition-all"
        >
          Education
        </a>
                <a
          href="#skills"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold text-lg w-64 transition-all"
        >
          Skills
        </a>
                <a
          href="#contact"
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold text-lg w-64 transition-all"
        >
          Contact
        </a>
      </motion.div>

      <div className="flex justify-center space-x-6 text-3xl mt-12">
        <a
          href="https://github.com/sulaimansulaman-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sulaiman-sulaman-013a46319/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:sulaimansulaman@gmail.com"
          className="hover:text-indigo-400 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
