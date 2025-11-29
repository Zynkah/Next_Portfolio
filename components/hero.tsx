"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";

export default function Hero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{
          background: "linear-gradient(135deg, #5e00ff 0%, #2f006f 100%)",
          opacity: 0,
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #5e00ff 0%, #2f006f 100%)",
            "linear-gradient(135deg, #00ffb1 0%, #185a9d 100%)",
            "linear-gradient(135deg, #ffaf7b 0%, #e500ff 100%)",
            "linear-gradient(135deg, #5e00ff 0%, #2f006f 100%)",
          ],
          opacity: 1,
        }}
        transition={{
          background: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: { duration: 1 },
        }}
        className="absolute inset-0 w-full h-full z-0 blur-3xl opacity-5"
      />
      <AnimatePresence>
        <Card className="lg:w-full xl:max-w-[1280px] max-w-[900px] z-10 px-16 py-8">
          <motion.article
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            className="relative z-10"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible,
              }}
              className="text-center md:text-5xl lg:text-7xl font-bold"
            >
              Software Engineer
            </motion.h1>
            <ul className="text-center space-y-6 mt-6">
              <motion.li
                variants={itemVariants}
                className="text-3xl text-muted-foreground"
              >
                Frontend & mobile expert
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="text-xl text-muted-foreground"
              >
                Crypto Enthusiast
              </motion.li>
            </ul>
          </motion.article>
        </Card>
      </AnimatePresence>
    </div>
  );
}
