import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center p-8 max-w-4xl">
        {/* Animated title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-white mb-6 leading-tight"
        >
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Eco-Mart</span> <span className="block text-3xl mt-2 font-light">Admin Portal</span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto"
        >
          Revolutionize your sustainable inventory with our <span className="font-semibold text-white">AI-powered</span> demand forecasting and supply chain optimization platform.
        </motion.p>

        {/* Animated buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="relative px-10 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform group overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          <button className="px-10 py-4 text-lg font-medium rounded-xl border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </motion.div>

        {/* Feature chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['AI Forecasting', 'Real-time Analytics', 'Carbon Footprint Tracking', 'Smart Reordering', 'Supplier Network'].map((feature, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-white/10 text-indigo-100 text-sm font-medium backdrop-blur-sm border border-white/10">
              {feature}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating dashboard preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white/30 to-transparent backdrop-blur-sm"
      />
    </div>
  );
};

export default Home;