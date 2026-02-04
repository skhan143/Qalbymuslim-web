"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import frame from "../../assets/iphone-14-frame.png";

type Insets = { top?: string; bottom?: string; left?: string; right?: string };

export default function HeroDevice({
  videoSrc = "/assets/hero-video.mp4",
  posterSrc = "/assets/hero-poster.svg",
  insets = { top: "2%", bottom: "2%", left: "5%", right: "5%" },
  showFlare = true,
  className = "",
}: {
  videoSrc?: string;
  posterSrc?: string;
  insets?: Insets;
  showFlare?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.7]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const video = videoRef.current;
    if (!video) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    
    // Auto-start playback
    const playAttempt = video.play();
    if (playAttempt && typeof (playAttempt as any).catch === "function") {
      (playAttempt as any).catch(() => {});
    }
    
    // Intersection observer for play/pause
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
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [isMounted]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative mx-auto ${className}`}
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ 
        duration: 0.95,
      }}
      style={{
        width: "min(360px, 90vw)",
        aspectRatio: "9 / 19.5",
        rotate,
        rotateX,
        rotateY,
        rotateZ,
        y,
        scale,
        opacity,
      }}
    >
      {/* Screen area */}
      <div
        className="absolute inset-0"
        style={{
          top: insets.top,
          bottom: insets.bottom,
          left: insets.left,
          right: insets.right,
        }}
      >
        <motion.video
          ref={videoRef}
          className="h-full w-full rounded-[28px] object-cover shadow-glass"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          src={videoSrc}
          poster={posterSrc}
        />
      </div>

      {/* Play button overlay */}
      {!isPlaying && isMounted && (
        <motion.button
          className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[36px] z-10"
          onClick={() => {
            const v = videoRef.current;
            if (v) {
              const p = v.play();
              if (p && typeof (p as any).catch === "function") {
                (p as any).catch(() => {});
              }
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 text-emerald ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </motion.div>
        </motion.button>
      )}

      {/* Flare overlay */}
      {showFlare && (
        <motion.div
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            background:
              "radial-gradient(120px 60px at 50% 15%, rgba(212,175,55,0.15), transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.0, 0.5, 0.0] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
        />
      )}

      {/* Frame image */}
      <Image
        src={frame}
        alt="iPhone 14 frame"
        fill
        priority
        className="absolute inset-0 h-full w-full select-none pointer-events-none"
      />
    </motion.div>
  );
}
