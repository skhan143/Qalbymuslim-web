import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Qalby Muslim",
  description: "Explore QalbyMuslim's essential tools for prayer times, qibla direction, reminders, zakat, and donations.",
};

export default function FeaturesPage() {
  return (
    <main className="container-max py-24">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-emerald">Key Features</h1>
        <p className="mt-4 text-emerald/80 text-lg">
          Explore QalbyMuslim's essential tools for prayer times, qibla direction, reminders, zakat, and donations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
          <h3 className="font-heading text-xl text-emerald mb-4">Prayer Times</h3>
          <p className="text-emerald/80">
            Accurate daily prayer schedules based on your location to keep you timely and connected.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
          <h3 className="font-heading text-xl text-emerald mb-4">Qibla Compass</h3>
          <p className="text-emerald/80">
            Find the precise qibla direction easily with an intuitive compass integrated into the app.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
          <h3 className="font-heading text-xl text-emerald mb-4">Daily Reminders</h3>
          <p className="text-emerald/80">
            Receive customizable notifications for prayers, Surah Mulk, and other important daily acts of worship.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="font-heading text-3xl text-emerald mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">How accurate are prayer times?</h3>
            <p className="text-emerald/80">
              Prayer times are calculated using reliable methods based on your location and updated regularly for accuracy.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">How to use Qibla compass?</h3>
            <p className="text-emerald/80">
              Simply open the compass feature and point your device towards the qibla direction.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">Can I customize notifications?</h3>
            <p className="text-emerald/80">
              You can customize daily reminders and notifications easily within the app settings to suit your schedule.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">Is my data secure?</h3>
            <p className="text-emerald/80">
              Your privacy is important; all data is stored securely and never shared without your consent.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">How to calculate zakat?</h3>
            <p className="text-emerald/80">
              The zakat calculator uses current nisab values and your input to help you accurately determine your zakat obligations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl text-emerald mb-8 text-center">About QalbyMuslim</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald/80 text-lg mb-6">
            QalbyMuslim is a comprehensive mobile app designed to support your spiritual journey with accurate prayer times, Qibla direction, Quran reading, daily reminders, zakat calculation, and easy donation options.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl text-emerald mb-4">Our Mission</h3>
              <p className="text-emerald/80">
                We aim to provide a reliable, user-friendly app that helps Muslims stay connected to their faith through timely notifications, intuitive tools, and meaningful reminders for daily worship and charity.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl text-emerald mb-4">Why Choose Us</h3>
              <p className="text-emerald/80">
                Trusted by thousands with highly rated features designed for clarity and quick orientation anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}