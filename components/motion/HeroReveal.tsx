"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroDevice from "@/components/ui/HeroDevice";
import Mobile3DPhone from "@/components/ui/Mobile3DPhone";
import DownloadBadges from "@/components/ui/DownloadBadges";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
    },
  },
};

export default function HeroReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end center"] });

  // Smooth parallax effects
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.7]);

  return (
    <section ref={ref} className="relative pt-28 md:pt-32 bg-gradient-to-b from-emerald-soft via-white/50 to-transparent">
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container-max w-full">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title with Parallax */}
            <motion.div
              style={{ y: parallaxY, scale: parallaxScale, opacity: parallaxOpacity }}
              className="will-change-transform"
            >
              <motion.h1
                variants={titleVariants}
                className="font-heading text-6xl md:text-7xl lg:text-8xl text-emerald leading-tight font-bold tracking-tight"
              >
                <motion.span
                  variants={titleVariants}
                  className="block"
                >
                  The Heart
                </motion.span>
                <motion.span
                  variants={titleVariants}
                  className="block bg-gradient-to-r from-emerald via-gold to-emerald bg-clip-text text-transparent"
                >
                  of Peace
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="mt-8 font-heading text-2xl md:text-3xl lg:text-4xl text-emerald/85 font-semibold"
            >
              Your Faith, Simplified
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-emerald/70 max-w-2xl text-base md:text-lg leading-relaxed"
            >
              Transform your phone into the perfect Islamic companion. QalbyMuslim brings you accurate prayer times, daily Quranic inspiration, and spiritual guidance in a beautifully designed app.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <MagneticButton label="Download Qalby Muslim" href="#download" />
            </motion.div>

            {/* Device - Different for mobile and desktop */}
            {/* Desktop Version */}
            <motion.div
              variants={itemVariants}
              className="mt-16 hidden md:flex justify-center md:justify-start"
            >
              <HeroDevice className="mt-0" />
            </motion.div>

            {/* Mobile Version - 3D Animation */}
            <div className="mt-12 md:hidden">
              <Mobile3DPhone />
            </div>

            {/* Download Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center md:justify-start pb-12"
            >
              <DownloadBadges />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
