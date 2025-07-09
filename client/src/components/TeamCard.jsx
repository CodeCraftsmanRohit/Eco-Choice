import React from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ name, role, bio, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-green-600 font-medium mb-2">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  )
}

export default TeamCard