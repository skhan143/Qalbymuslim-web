"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

export default function MagneticButton({ label, href }: { label: string; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.2);
    y.set(my * 0.2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={href}>
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ x: springX, y: springY }}
        className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald text-sand shadow-glass border border-gold/50"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-heading tracking-wide">{label}</span>
        <span className="absolute inset-0 rounded-full border border-white/30 pointer-events-none" />
      </motion.div>
    </Link>
  );
}
