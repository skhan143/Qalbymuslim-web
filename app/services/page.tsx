import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Qalby Muslim",
  description: "Discover Zabiha Halal Restaurants Near You and explore our featured halal dining options.",
};

export default function ServicesPage() {
  const restaurants = [
    {
      name: "Authentic Cuisine",
      description: "Authentic halal cuisine from around the world.",
      icon: "🍗",
    },
    {
      name: "Family Dining",
      description: "Family-friendly dining with diverse options.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      name: "Spicy Flavors",
      description: "Spicy and flavorful authentic dishes.",
      icon: "🌶️",
    },
    {
      name: "Quick Service",
      description: "Quick service meals for busy schedules.",
      icon: "⚡",
    },
  ];

  const features = [
    { icon: "✓", label: "Certified Halal" },
    { icon: "📍", label: "Near You" },
    { icon: "🌟", label: "Rated & Reviewed" },
    { icon: "💳", label: "Easy Payment" },
    { icon: "📱", label: "Mobile Friendly" },
    { icon: "🚀", label: "Fast Delivery" },
  ];

  return (
    <main className="container-max py-20 md:py-28">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-emerald font-bold">Halal Eats</h1>
        <p className="mt-4 text-emerald/70 text-lg">
          Discover Zabiha Halal Restaurants Near You
        </p>
      </div>

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="font-heading text-3xl md:text-4xl text-emerald mb-12 text-center font-bold">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 hover:border-emerald/40 transition-all duration-500 p-8 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent hover:bg-white/5 shadow-lg hover:shadow-emerald/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="font-semibold text-emerald group-hover:text-emerald/90 transition-colors">
                  {feature.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-emerald mb-12 font-bold">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 p-8 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent">
              <div className="text-5xl font-bold text-emerald mb-2">150+</div>
              <p className="text-emerald/70 text-lg">Trusted Restaurants</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 p-8 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent">
              <div className="text-5xl font-bold text-emerald mb-2">50K+</div>
              <p className="text-emerald/70 text-lg">Happy Customers</p>
            </div>
          </div>
          <a
            href="https://tally.so/r/mKEDQk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 px-8 py-3 bg-emerald text-white rounded-full hover:bg-emerald/90 transition-colors font-semibold"
          >
            Add Your Restaurant
          </a>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="mb-20">
        <h2 className="font-heading text-3xl md:text-4xl text-emerald mb-12 text-center font-bold">Featured Restaurants</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 hover:border-emerald/40 transition-all duration-500 p-8 md:p-10 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent hover:bg-white/5 shadow-lg hover:shadow-emerald/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {restaurant.icon}
                </div>
                <h3 className="font-heading text-2xl text-emerald mb-3 font-bold group-hover:text-emerald/90 transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-emerald/70 leading-relaxed group-hover:text-emerald/80 transition-colors">
                  {restaurant.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-20">
        <h2 className="font-heading text-3xl md:text-4xl text-emerald mb-12 text-center font-bold">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 p-8 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent">
            <p className="text-emerald/70 italic mb-6 leading-relaxed">"The food quality is exceptional, and the service is always friendly and courteous!"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-emerald">Ali Khan</p>
                <p className="text-emerald/60 text-sm">New York</p>
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 p-8 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent">
            <p className="text-emerald/70 italic mb-6 leading-relaxed">"I love the variety of halal options available. The app is easy to use and highly recommended!"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-emerald">Sara Ahmed</p>
                <p className="text-emerald/60 text-sm">Los Angeles</p>
              </div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="font-heading text-3xl md:text-4xl text-emerald mb-12 text-center font-bold">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-emerald/70 mb-8 text-lg">
            Have a restaurant to add? Reach out to us and let's partner together.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 p-6 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent">
              <h3 className="font-semibold text-emerald mb-2">Email</h3>
              <p className="text-emerald/70">info@qalbymuslim.com</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-emerald/20 p-6 bg-gradient-to-br from-white/5 via-emerald/5 to-transparent">
              <h3 className="font-semibold text-emerald mb-2">Response Time</h3>
              <p className="text-emerald/70">Within 24 hours</p>
            </div>
          </div>
          <form className="space-y-4" action="mailto:qalbymuslim1@gmail.com" method="post" encType="text/plain">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="restaurantName"
                placeholder="Restaurant Name"
                className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-xl text-emerald placeholder-emerald/40 focus:outline-none focus:border-emerald focus:bg-white/10 transition-colors"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-xl text-emerald placeholder-emerald/40 focus:outline-none focus:border-emerald focus:bg-white/10 transition-colors"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-xl text-emerald placeholder-emerald/40 focus:outline-none focus:border-emerald focus:bg-white/10 transition-colors"
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your restaurant..."
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-emerald/20 rounded-xl text-emerald placeholder-emerald/40 focus:outline-none focus:border-emerald focus:bg-white/10 transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald text-white rounded-xl hover:bg-emerald/90 transition-colors font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}