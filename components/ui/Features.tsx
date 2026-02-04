"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/motion/SplitText";

const features = [
  {
    title: "Prayer Times",
    description: "Accurate daily prayer times tailored to your location for timely worship.",
    icon: "🕌",
  },
  {
    title: "Qibla Compass",
    description: "Find the precise direction of Qibla easily with our intuitive compass feature.",
    icon: "🧭",
  },
  {
    title: "Daily Reminders",
    description: "Set daily reminders for prayers, Surah Mulk, and zakat calculations effortlessly.",
    icon: "🔔",
  },
  {
    title: "Quran Reader",
    description: "Read the Holy Quran with audio recitation and translations.",
    icon: "📖",
  },
  {
    title: "Tasbih Counter",
    description: "Digital Tasbih counter for dhikr and remembrance.",
    icon: "📿",
  },
  {
    title: "Zakat Calculator",
    description: "Calculate your Zakat for charitable giving.",
    icon: "🧮",
  },
  {
    title: "Halal Restaurant Finder",
    description: "Find Zabiha Halal restaurants near you.",
    icon: "🍽️",
  },
  {
    title: "Islamic Calendar",
    description: "Islamic calendar with important dates.",
    icon: "📅",
  },
];

export default function Features() {
  return (
    <section className="container-max py-24">
      <div className="text-center mb-16">
        <SplitText
          as="h2"
          className="font-heading text-4xl md:text-5xl text-emerald"
          text="Our Services"
        />
        <p className="mt-4 text-emerald/80 text-lg">
          Explore QalbyMuslim's essential tools for prayer, guidance, and daily spiritual support.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6 hover:bg-white/10 transition-colors"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-heading text-xl text-emerald mb-2">{feature.title}</h3>
            <p className="text-emerald/80">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}