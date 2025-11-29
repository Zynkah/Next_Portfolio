"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: "80vh" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
