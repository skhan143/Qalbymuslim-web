"use client";
import { motion } from "framer-motion";
import type React from "react";

export default function SplitText({ text, as = "p", className = "" }: { text: string; as?: keyof React.JSX.IntrinsicElements; className?: string }) {
  const words = text.split(" ");
  const variants = {
    hidden: { opacity: 0, y: 12 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.5 } }),
  };

  const map = {
    p: motion.p,
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    span: motion.span,
    div: motion.div,
  } as const;
  const Comp = (map as any)[as] ?? motion.p;

  return (
    <Comp className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20%" }}>
      {words.map((w, i) => (
        <motion.span key={i} custom={i} variants={variants} className="inline-block mr-1">
          {w}
        </motion.span>
      ))}
    </Comp>
  );
}
