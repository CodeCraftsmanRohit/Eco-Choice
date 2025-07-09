import React from 'react'
import { motion } from 'framer-motion'
import TeamCard from '../components/TeamCard'

const About = () => {
  const teamMembers = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      bio: "Sustainability expert with 10+ years in eco-commerce",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "John Doe",
      role: "CTO",
      bio: "Tech innovator focused on green solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Product Lead",
      bio: "Passionate about ethical sourcing",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">About Eco-Mart</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're revolutionizing e-commerce by making sustainability measurable and rewarding.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Eco-Mart, we believe every purchase should contribute to a healthier planet.
            Our platform helps you make informed decisions by scoring products based on their
            environmental impact.
          </p>
          <p className="text-gray-600">
            We partner with brands that share our commitment to sustainability and
            provide transparent data about their supply chains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-green-50 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3">Eco-Score System</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="eco-badge eco-badge-a mr-3">A+</span>
              <span>Exceptional sustainability practices</span>
            </li>
            <li className="flex items-start">
              <span className="eco-badge eco-badge-a mr-3">A</span>
              <span>Strong environmental commitment</span>
            </li>
            <li className="flex items-start">
              <span className="eco-badge eco-badge-b mr-3">B</span>
              <span>Good with room for improvement</span>
            </li>
            <li className="flex items-start">
              <span className="eco-badge eco-badge-c mr-3">C</span>
              <span>Basic compliance</span>
            </li>
            <li className="flex items-start">
              <span className="eco-badge eco-badge-d mr-3">D</span>
              <span>Needs significant improvement</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Meet The Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About