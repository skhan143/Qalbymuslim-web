import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screenshots - Qalby Muslim",
  description: "Explore key screens of QalbyMuslim app on mobile devices.",
};

export default function ScreenshotsPage() {
  const screenshots = [
    {
      title: "Prayer Times",
      description: "View daily prayer schedules with accurate timings and easy-to-read layout, helping users stay connected to their spiritual routine effortlessly.",
      icon: "⏰",
    },
    {
      title: "Qibla Compass",
      description: "Navigate the Qibla direction precisely using the app's built-in compass, designed for clarity and quick orientation anywhere in the world.",
      icon: "🧭",
    },
    {
      title: "Quran Reader",
      description: "Read the Holy Quran with beautiful illuminated text and intuitive navigation.",
      icon: "📖",
    },
    {
      title: "Zakat Calculator",
      description: "Calculate your Zakat accurately with current nisab values and easy input interface.",
      icon: "💰",
    },
  ];

  return (
    <main className="container-max py-20 md:py-28">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-emerald font-bold">Gallery</h1>
        <p className="mt-4 text-emerald/70 text-lg">
          Explore key screens of QalbyMuslim app on mobile devices
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 hover:border-emerald/40 transition-all duration-500 p-8 md:p-10 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent hover:bg-white/5 shadow-lg hover:shadow-emerald/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {screenshot.icon}
              </div>
              <h3 className="font-heading text-2xl text-emerald mb-3 font-bold group-hover:text-emerald/90 transition-colors">
                {screenshot.title}
              </h3>
              <p className="text-emerald/70 leading-relaxed group-hover:text-emerald/80 transition-colors">
                {screenshot.description}
              </p>
            </div>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald/20 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </main>
  );
}