"use client";
import { useEffect, useState } from "react";

type HijriResponse = {
  code: number;
  data?: { hijri?: { day: string; month: { en: string }; year: string } };
};

export default function HijriDate({ className = "" }: { className?: string }) {
  const [text, setText] = useState<string>("Loading...");

  useEffect(() => {
    const isoDate = new Date().toISOString().split("T")[0];
    fetch(`https://api.aladhan.com/v1/gToH?date=${isoDate}`)
      .then((r) => r.json())
      .then((data: HijriResponse) => {
        const h = data?.data?.hijri;
        if (data.code === 200 && h) {
          setText(`${h.day} ${h.month.en} ${h.year}`);
        } else {
          setText("Unavailable");
        }
      })
      .catch(() => setText("Unavailable"));
  }, []);

  return <span className={className}>{text}</span>;
}
