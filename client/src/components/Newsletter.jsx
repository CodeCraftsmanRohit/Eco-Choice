import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your newsletter signup logic here
    alert(`Thanks for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Eco Community</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Get sustainability tips, exclusive deals, and updates on new eco-friendly products
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-900 hover:bg-green-800 px-6 py-3 rounded-r-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter