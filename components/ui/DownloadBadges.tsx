"use client";
import Link from "next/link";

export default function DownloadBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      <Link
        href="https://apps.apple.com/us/app/qalbymuslim/id6753021182"
        target="_blank"
        className="group inline-flex items-center gap-3 rounded-xl border border-white/50 bg-white/80 px-4 py-3 text-emerald shadow-glass hover:bg-white"
      >
        <span className="text-2xl"></span>
        <span>
          <span className="block text-xs opacity-70">Download on the</span>
          <span className="block font-semibold">App Store</span>
        </span>
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.qalbymuslim.app&hl=en-US"
        target="_blank"
        className="group inline-flex items-center gap-3 rounded-xl border border-white/50 bg-white/80 px-4 py-3 text-emerald shadow-glass hover:bg-white"
      >
        <span className="text-xl">▶</span>
        <span>
          <span className="block text-xs opacity-70">GET IT ON</span>
          <span className="block font-semibold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}
