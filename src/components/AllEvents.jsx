import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion'
import { Calendar, Users, ChevronRight, ChevronLeft, X } from 'lucide-react'
import { pastEvents } from '../constants/index'

const EventCard = ({ event, index }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [event.images.length])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: index * 0.2 + 0.2 } }
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length)
  }

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="flex flex-col md:flex-row items-center mb-12"
    >
      <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
        <motion.div
          style={{ rotateX, rotateY, z: 100 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={imageVariants}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={event.images[currentImageIndex]}
            alt={`${event.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-80 object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-sm text-gray-300 mb-1 flex items-center">
                <Calendar className="mr-2" size={16} />
                {event.date}
              </p>
              <p className="text-sm text-gray-300 flex items-center">
                <Users className="mr-2" size={16} />
                {event.attendees} Attendees
              </p>
            </div>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <motion.div
          style={{ rotateX, rotateY, z: 100 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={cardVariants}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition duration-500 ease-in-out transform hover:scale-105"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-3">{event.title}</h3>
          <p className="text-gray-300 mb-4">{event.description}</p>
          <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">Highlights:</h4>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {event.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
          >
            Learn More
            <ChevronRight size={20} className="ml-2" />
          </button>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{event.title}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <img src={event.images[0]} alt={event.title} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4" />
            <p className="text-gray-300 mb-4">{event.description}</p>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">Highlights:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {event.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400">
              <p className="flex items-center mb-2 md:mb-0">
                <Calendar className="mr-2" size={16} />
                {event.date}
              </p>
              <p className="flex items-center">
                <Users className="mr-2" size={16} />
                {event.attendees} Attendees
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function AllEvents() {
  return (
    <div className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-heading-bg text-transparent bg-clip-text ">
          Our Event Journey
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-blue-500 to-purple-600 hidden md:block"></div>
          {pastEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

