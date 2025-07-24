// TVFlipTransition.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function TVFlipTransition({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute inset-0 bg-black z-20 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full bg-[url('/static.gif')] bg-cover opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
