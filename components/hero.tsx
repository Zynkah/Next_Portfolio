"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <AnimatePresence>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible,
          }}
          className="text-center text-6xl sm:text-8xl lg:text-9xl font-bold"
        >
          Web Developer
        </motion.h1>
        <ul className="text-center space-y-6 mt-6">
          <motion.li
            variants={itemVariants}
            className="text-3xl text-muted-foreground"
          >
            Content Creator
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="text-xl text-muted-foreground"
          >
            Game Enthusiast
          </motion.li>
        </ul>
      </motion.article>
    </AnimatePresence>
  );
}
