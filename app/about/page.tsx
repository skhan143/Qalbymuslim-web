import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Qalby Muslim",
  description: "Learn about QalbyMuslim, your trusted companion for prayer times, Qibla direction, Quran reading, and daily Islamic reminders.",
};

export default function AboutPage() {
  return (
    <main className="container-max py-24">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-emerald">About QalbyMuslim</h1>
        <p className="mt-4 text-emerald/80 text-lg">
          QalbyMuslim is your trusted companion for prayer times, Qibla direction, Quran reading, and daily Islamic reminders, designed to support your spiritual journey effortlessly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-emerald mb-2">150+</div>
          <p className="text-emerald/80">Trusted by thousands</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-emerald mb-2">15</div>
          <p className="text-emerald/80">Highly rated</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-emerald mb-2">⭐⭐⭐⭐⭐</div>
          <p className="text-emerald/80">User satisfaction</p>
        </div>
      </div>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-emerald mb-8 text-center">Our Mission</h2>
          <p className="text-emerald/80 text-lg text-center mb-8">
            We aim to provide a reliable, user-friendly app that helps Muslims stay connected to their faith through timely notifications, intuitive tools, and meaningful reminders for daily worship and charity.
          </p>
          <h2 className="font-heading text-3xl text-emerald mb-8 text-center">Why Choose Us</h2>
          <p className="text-emerald/80 text-lg text-center">
            Trusted by thousands with highly rated features designed for clarity and quick orientation anywhere in the world.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl text-emerald mb-8 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-emerald/80 text-center mb-8">
            Reach out for support, feedback, or inquiries about QalbyMuslim's app features and services.
          </p>
          <form className="space-y-6" action="mailto:qalbymuslim1@gmail.com" method="post" encType="text/plain">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-lg text-emerald placeholder-emerald/50 focus:outline-none focus:border-emerald"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-lg text-emerald placeholder-emerald/50 focus:outline-none focus:border-emerald"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-lg text-emerald placeholder-emerald/50 focus:outline-none focus:border-emerald resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald text-white rounded-lg hover:bg-emerald/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}