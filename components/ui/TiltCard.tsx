"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TiltCard({ title, subtitle }: { title: string; subtitle: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx);
    y.set(my);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 900 }}
      className="group relative rounded-2xl p-8 bg-white/70 border border-white/50 shadow-glass"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <h4 className="font-heading text-2xl text-emerald mb-2">{title}</h4>
      <p className="text-emerald/80">{subtitle}</p>
    </motion.div>
  );
}
