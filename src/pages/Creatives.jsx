import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Creatives() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8">
      
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-serif mb-4">
            I like to <span className="text-blue-500">get creative</span>, and <span className="text-green-500">make things</span>.
          </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center">
          Pottery has been my recent favorite artistic hobby! 
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-3 border-t border-gray-200 text-center text-gray-500"
        >
          <p className="italic">More entries coming soon...</p>
        </motion.div>
    </div>
    </div>
  )
}
