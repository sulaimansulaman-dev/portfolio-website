// Hero.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold leading-tight"
      >
        Hey, I'm <span className="text-indigo-500">Sulaiman</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl"
      >
        A passionate full-stack developer crafting clean and scalable web apps.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#about"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold transition"
        >
          About Me
        </a>
                <a
          href="#experience"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold transition"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold transition"
        >
          Projects
        </a>
                <a
          href="#tech-stack"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold transition"
        >
          Tech Stack
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold transition"
        >
          Contact
        </a>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex space-x-6 text-3xl"
      >
        <a
          href="https://github.com/sulaimansulaman-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-indigo-400 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}
