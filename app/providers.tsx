"use client";
import { MotionConfig } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig transition={{ type: "spring", stiffness: 220, damping: 25 }}>
      {children}
    </MotionConfig>
  );
}
