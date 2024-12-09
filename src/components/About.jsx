import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img className='w-full h-auto rounded-2xl shadow-2xl' src="/wce_acm_team.jpg" alt="WCE ACM Team" />
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className='font-extrabold text-5xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
            WHO ARE WE?
          </h2>
          <p className='text-lg sm:text-xl leading-relaxed'>
            WCE ACM Student Chapter is an esteemed auxiliary of ACM, dedicated to
            advancing Computer Science since 2016. As a distinguished technical chapter, we
            foster co-curricular activities that promote overall development, shaping
            students into responsible adults with strong core values. This is an institute
            club driven by the CSE department.
          </p>
          <motion.button 
            className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About

