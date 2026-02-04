"use client";
import HeroReveal from "@/components/motion/HeroReveal";
import HorizontalScroll from "@/components/motion/HorizontalScroll";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import Clock from "@/components/app/Clock";
import GregorianDate from "@/components/app/GregorianDate";
import HijriDate from "@/components/app/HijriDate";
import PrayerTimes from "@/components/app/PrayerTimes";
import Features from "@/components/ui/Features";
import Testimonials from "@/components/ui/Testimonials";
import DownloadBadges from "@/components/ui/DownloadBadges";

export default function Page() {
  return (
    <main className="relative">
      <HeroReveal />

      <section className="container-max py-20 md:py-24" id="today">
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-emerald/20 p-8 md:p-12 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent shadow-lg hover:shadow-emerald/20 transition-all duration-500">
          <div className="mb-8 text-center">
            <h3 className="font-heading text-3xl md:text-4xl text-emerald">Today</h3>
            <p className="mt-2 text-emerald/80">Current time <Clock className="font-mono" /> · <GregorianDate /> · <HijriDate /></p>
          </div>
          <PrayerTimes />
        </div>
      </section>

      <section className="container-max py-20 md:py-24" id="download">
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-emerald/20 p-8 md:p-12 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent shadow-lg hover:shadow-emerald/20 transition-all duration-500">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-emerald">Download QalbyMuslim</h2>
            <p className="mt-4 text-emerald/80 text-lg">
              Bring the peace of Islam to your phone. Download now and stay connected to your faith.
            </p>
            <div className="mt-8">
              <DownloadBadges />
            </div>
          </div>
        </div>
      </section>

      <HorizontalScroll title="Our Value to You">
        <div className="w-screen h-full flex items-center justify-center">
          <div className="container-max grid md:grid-cols-2 gap-8">
            <TiltCard title="🕐 Accurate Prayer Times" subtitle="Precise calculation based on your exact location. Works globally with automatic timezone adjustments." />
            <TiltCard title="📖 Daily Quranic Inspiration" subtitle="Beautiful daily Ayah from the Holy Quran with peaceful Islamic quotes and spiritual reminders." />
          </div>
        </div>
        <div className="w-screen h-full flex items-center justify-center">
          <div className="container-max grid md:grid-cols-2 gap-8">
            <TiltCard title="🧭 Qibla Compass" subtitle="Find the direction to Mecca from anywhere in the world. Works offline after initial setup." />
            <TiltCard title="✨ Beautiful Islamic Design" subtitle="Elegant golden theme inspired by Islamic art. Dark and light modes for comfort at any time." />
          </div>
        </div>
      </HorizontalScroll>

      <section id="features">
        <Features />
      </section>

      <section className="container-max py-20 md:py-24" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl backdrop-blur-2xl border border-emerald/20 p-8 md:p-12 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent shadow-lg hover:shadow-emerald/20 transition-all duration-500">
            <h3 className="font-heading text-3xl md:text-4xl text-emerald text-center">About QalbyMuslim</h3>
            <div className="mt-6 text-emerald/85 leading-relaxed text-lg text-center">
              <p>
                QalbyMuslim is a spiritual wellness platform designed to help you nurture presence, gratitude, and inner peace. Through daily reminders, reflective practices, and community support, you'll gently realign your heart with what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      
      <div className="h-12 md:h-20"></div>
    </main>
  );
}
