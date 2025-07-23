// components/ChannelAbout.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "SYSTEM BOOTING...",
  "LOADING PERSONALITY MODULE: SULAIMAN SULAMAN",
  "STATUS: ONLINE",
  "",
  ">> Hi, I'm Sulaiman Sulaman.",
  ">> I build interactive and meaningful software.",
  ">> I love creating experiences that feel alive and unique.",
  "",
  ">> Channel 1: ABOUT // Flip to explore.",
];

export default function ChannelAbout() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-black text-green-400 font-mono p-6 text-lg">
      {displayedLines.map((line, index) => (
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }}>
          {line}
        </motion.div>
      ))}
    </div>
  );
}
