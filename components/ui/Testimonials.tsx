"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/motion/SplitText";

const testimonials = [
  {
    quote: "Qalbymuslim keeps me on track with prayers and daily reminders, truly life-changing.",
    author: "Amina S.",
    rating: 5,
  },
  {
    quote: "This app is easy to use! It perfectly served its purpose and proved to be a very helpful tool for my needs. Highly recommended.",
    author: "Mohammed Sohaib",
    rating: 5,
  },
  {
    quote: "This app has a beautiful UI and its free!",
    author: "Sufian Ali",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="container-max py-24 bg-emerald/5">
      <div className="text-center mb-16">
        <SplitText
          as="h2"
          className="font-heading text-4xl md:text-5xl text-emerald"
          text="What Our Community Says"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-sm border border-emerald/20 rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-emerald/90 italic mb-4">"{testimonial.quote}"</p>
            <p className="text-emerald font-semibold">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}