import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '🌱',
    title: 'Eco Scoring',
    description: 'Every product rated for environmental impact'
  },
  {
    icon: '♻️',
    title: 'Recycling Guides',
    description: 'Learn how to properly dispose of each item'
  },
  {
    icon: '📊',
    title: 'Impact Tracking',
    description: 'See your personal carbon footprint reduction'
  }
]

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-700">Why Choose Eco-Mart</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We make sustainable shopping easy, transparent, and rewarding
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features