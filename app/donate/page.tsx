import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate - Qalby Muslim",
  description: "Support Qalby Muslim with your generous donations and make a difference today!",
};

export default function DonatePage() {
  return (
    <main className="container-max py-24">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-emerald">Donate Now</h1>
        <p className="mt-4 text-emerald/80 text-lg">
          Support Qalby Muslim and make a difference today!
        </p>
        <div className="mt-8">
          <a
            href="https://donate.stripe.com/7sY28r3Mhd1U8fD3SxeEo00"
            target="_blank"
            className="inline-block px-8 py-4 bg-emerald text-white text-lg font-semibold rounded-lg hover:bg-emerald/90 transition-colors"
          >
            Donate Now
          </a>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="font-heading text-3xl text-emerald mb-8 text-center">FAQ</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">What is Qalby?</h3>
            <p className="text-emerald/80">Qalby supports the Muslim community.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">How to donate?</h3>
            <p className="text-emerald/80">Visit our donation page to contribute.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">Why should I donate?</h3>
            <p className="text-emerald/80">Your donation helps us improve services.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">Is my donation secure?</h3>
            <p className="text-emerald/80">Yes, we ensure secure transactions.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">Who benefits from donations?</h3>
            <p className="text-emerald/80">The entire Muslim community benefits.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-emerald/20 rounded-lg p-6">
            <h3 className="font-heading text-lg text-emerald mb-2">Can I donate monthly?</h3>
            <p className="text-emerald/80">Yes, monthly donations are welcome.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-3xl text-emerald mb-8 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-emerald/80 mb-8">
            Support Qalby Muslim with your generous donations.
          </p>
          <div className="mb-6">
            <h3 className="font-semibold text-emerald mb-2">Email</h3>
            <p className="text-emerald/80">qalbymuslim1@gmail.com</p>
          </div>
          <p className="text-center text-emerald/80 mb-8">
            For custom donations or inquiries, please contact us via email.
          </p>
        </div>
      </section>
    </main>
  );
}