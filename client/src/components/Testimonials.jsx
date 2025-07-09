import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Eco-Mart helped me reduce my household waste by 40% in just 3 months!",
    author: "Sarah K.",
    role: "Eco-conscious shopper"
  },
  {
    quote: "The product scoring system makes sustainable choices effortless.",
    author: "Michael T.",
    role: "Environmental scientist"
  },
  {
    quote: "Finally a shopping platform that aligns with my values.",
    author: "Priya M.",
    role: "Zero waste advocate"
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-700">What Our Community Says</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <blockquote className="text-gray-600 italic mb-4">"{testimonial.quote}"</blockquote>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials