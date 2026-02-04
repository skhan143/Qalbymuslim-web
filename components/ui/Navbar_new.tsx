"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const height = useTransform(scrollY, [0, 120], [72, 56]);
  const blur = useTransform(scrollY, [0, 120], [0, 16]);
  const blurPx = useTransform(blur, (b) => `blur(${b}px)`);
  const opacity = useTransform(scrollY, [0, 120], [0.7, 0.85]);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Screenshots", href: "/screenshots" },
    { label: "Services", href: "/services" },
    { label: "Donate", href: "/donate" },
  ];

  return (
    <motion.header
      style={{ height }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.nav 
        style={{ backdropFilter: blurPx, opacity }} 
        className="container-max flex items-center justify-between rounded-2xl mt-2 md:mt-3 py-2 px-4 md:px-6 border border-emerald/10 bg-white/5 shadow-lg"
      >
        <Link href="/" className="font-heading text-lg md:text-2xl text-emerald font-bold flex-shrink-0">
          <span className="text-gradient-gold">Qalby</span>Muslim
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-emerald/80 hover:text-emerald transition-colors duration-300 text-sm lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 bg-emerald"></span>
          <span className="w-5 h-0.5 bg-emerald"></span>
          <span className="w-5 h-0.5 bg-emerald"></span>
        </button>
      </motion.nav>

      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-xl border border-emerald/20 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-emerald/90 hover:text-emerald hover:bg-emerald/5 transition-colors border-b border-emerald/10 last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
