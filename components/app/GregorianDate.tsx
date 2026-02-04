"use client";
import { useMemo } from "react";

export default function GregorianDate({ className = "" }: { className?: string }) {
  const text = useMemo(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  }, []);
  return <span className={className}>{text}</span>;
}
