"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <>
      <AnimatePresence>
              <motion.div
                transition={spring}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{}}>
                  </motion.div>
      </AnimatePresence>
    </>
  );
}
