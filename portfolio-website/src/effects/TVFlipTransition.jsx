// TVFlipTransition.jsx
import { motion } from "framer-motion";

export default function TVFlipTransition({ show }) {
  return (
    show && (
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black z-[10000]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full bg-[url('/static.gif')] bg-cover opacity-30" />
      </motion.div>
    )
  );
}
// This component can be used to create a TV flip transition effect
// when navigating between different sections of the portfolio website.