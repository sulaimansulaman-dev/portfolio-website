// src/components/Navbar.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center text-white">
        {/* Left nav links */}
        <ul className="flex space-x-6 text-sm sm:text-base font-medium">
          <li>
            <a href="#about" className="hover:text-indigo-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#tech-stack" className="hover:text-indigo-400 transition">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/sulaimansulaman-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-indigo-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </nav>
    </header>
  );
}
