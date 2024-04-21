"use client";

import { achievements } from "@/data/achievements";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { Card } from "./ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function AchivementsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 60,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslation, width]);

  return (
    <Card className="relative max-w-full h-[300px] border-none overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_25px,_black_calc(100%-25px),transparent_100%)]">
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...achievements, ...achievements].map((achievement, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <Card className="relative overflow-hidden h-[300px] w-[300px] text-nowrap border-none ">
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex justify-center items-center"
                  >
                    <div className="absolute bg-black pointer-events-none opacity-30 h-full w-full" />
                    <motion.h1
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      exit={{ y: 10 }}
                      className="bg-white text-md z-10 px-3 py-2 rounded-lg flex items-center ga-[0.5ch] hover"
                    >
                      <span className="text-primary-foreground text-wrap text-center">
                        {achievement.title}
                      </span>
                    </motion.h1>
                  </motion.div>
                )}
              </AnimatePresence>
              <Image
                src={achievement.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                alt="logo placeholder"
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
}
