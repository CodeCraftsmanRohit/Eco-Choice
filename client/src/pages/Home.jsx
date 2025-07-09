import React from 'react'
import Hero from '../components/Hero'
import Deals from '../components/Deals'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      <Features />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            What's Today !!
          </h2>
          <Deals />
        </div>
      </motion.section>


      <Testimonials />

      <Newsletter />
    </div>
  )
}

export default Home