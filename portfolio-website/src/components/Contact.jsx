// src/components/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#222] text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-indigo-500">Contact</span> Me
        </h2>

        <p className="text-gray-400 text-lg mb-6">
          I’m always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>

        <div className="flex justify-center space-x-6 text-3xl">
          <a
            href="https://github.com/sulaimansulaman-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sulaiman-sulaman-013a46319/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sulaimansulaman@gmail.com"
            className="hover:text-indigo-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
