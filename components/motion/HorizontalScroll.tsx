"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Children, useMemo, useRef } from "react";

export default function HorizontalScroll({ title, children }: { title?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const count = Children.count(children);
  const total = useMemo(() => Math.max(count, 1), [count]);
  
  // Smooth translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -((total - 1) * 100)]); 
  const xvw = useTransform(x, (v) => `${v}vw`);

  // Smooth title animations
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -20]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.7]);

  return (
    <section id="features" ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col bg-gradient-to-b from-white/50 via-white/30 to-transparent">
        {title && (
          <motion.div 
            className="container-max pt-8"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <h3 className="font-heading text-3xl md:text-4xl text-emerald tracking-tight">{title}</h3>
          </motion.div>
        )}
        <div className="relative flex-1 overflow-hidden">
          <motion.div 
            style={{ translateX: xvw }} 
            className="flex h-full will-change-transform"
          >
            {Children.map(children, (child, i) => (
              <div key={i} className="w-screen h-full p-4 md:p-8 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  {child}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
