"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import frame from "../../assets/iphone-14-frame.png";

export default function Mobile3DPhone({
  videoSrc = "/assets/hero-video.mp4",
  posterSrc = "/assets/hero-poster.svg",
}: {
  videoSrc?: string;
  posterSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isMounted) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Intersection observer for autoplay
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const p = video.play();
            if (p && typeof (p as any).catch === "function") {
              (p as any).catch(() => {});
            }
          } else {
            try {
              video.pause();
            } catch {}
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(video);

    return () => {
      obs.disconnect();
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [isMounted]);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.85, rotateX: 45, rotateZ: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateZ: 0,
      transition: {
        duration: 1.1,
        delay: 0.1,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0.8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full flex flex-col items-center justify-center py-12"
    >
      <div className="relative w-full max-w-sm mx-auto perspective">
        {/* Glow background effect */}
        <motion.div
          variants={glowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute -inset-8 rounded-full bg-gradient-to-r from-emerald/30 via-gold/20 to-transparent blur-3xl"
        />

        {/* 3D Phone Container */}
        <motion.div
          variants={phoneVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative mx-auto"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1200px",
            width: "min(320px, 85vw)",
            aspectRatio: "9 / 19.5",
          }}
        >
          {/* Video Screen */}
          <div
            className="absolute inset-0"
            style={{
              top: "2%",
              bottom: "2%",
              left: "5%",
              right: "5%",
            }}
          >
            <motion.video
              ref={videoRef}
              className="h-full w-full rounded-[26px] object-cover shadow-2xl ring-1 ring-emerald/20"
              muted
              playsInline
              autoPlay
              loop
              preload="auto"
              src={videoSrc}
              poster={posterSrc}
            />
          </div>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <motion.button
              className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[32px] z-20"
              onClick={() => {
                const v = videoRef.current;
                if (v) {
                  const p = v.play();
                  if (p && typeof (p as any).catch === "function") {
                    (p as any).catch(() => {});
                  }
                }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <motion.div
                className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-emerald ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </motion.button>
          )}

          {/* Flare Overlay */}
          <motion.div
            className="absolute inset-0 rounded-[32px]"
            style={{
              background: "radial-gradient(130px 65px at 50% 20%, rgba(212,175,55,0.2), transparent)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.0, 0.7, 0.0],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />

          {/* iPhone Frame */}
          <Image
            src={frame}
            alt="iPhone 14 frame"
            fill
            priority
            className="absolute inset-0 h-full w-full select-none pointer-events-none"
            style={{ zIndex: 30 }}
          />
        </motion.div>

        {/* Floating particles effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald/40 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${-10 - i * 5}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
