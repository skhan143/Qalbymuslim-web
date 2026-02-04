"use client";
import { useEffect, useState } from "react";

function formatTime(d: Date) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export default function Clock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    // Set immediately on mount to avoid SSR/client mismatch
    setNow(formatTime(new Date()));
    const id = setInterval(() => setNow(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={className} suppressHydrationWarning>
      {now || "--:--:--"}
    </span>
  );
}
