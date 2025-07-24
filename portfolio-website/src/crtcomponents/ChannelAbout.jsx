// components/ChannelAbout.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "SYSTEM BOOTING...",
  "LOADING PERSONALITY MODULE: SULAIMAN SULAMAN",
  "STATUS: ONLINE",
  "FLIP THROUGH THE CHANNELS BELOW TO EXPLORE.",
  "",
  "",
  ">> Hi, I'm Sulaiman Sulaman.",
  ">> I'm a final-year BSc IT student passionate about learning new things, solving problems, and fixing tech. ",
  ">> I enjoy collaborating with others, working hard, and always meeting deadlines.",
  ">> In my free time, you'll find me watching tech videos, playing video games, or taking things apart and putting them back together.",
  "",
  
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

    <div className="w-full h-full bg-grey text-green-400 font-mono p-6 text-lg">
            <div className="text-green-400 text-xl mb-4"> Channel 1: ABOUT</div>

      {displayedLines.map((line, index) => (
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }}>
          {line}
        </motion.div>
      ))}
    </div>

  );
}
