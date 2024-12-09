import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { event, upcoming } from '../constants/index';

const Events = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentEvent = event[currentEventIndex];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentEvent.images.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [currentEvent]);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % event.length);
    setCurrentImageIndex(0);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + event.length) % event.length);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 mt-24">
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Events Showcase
      </motion.h1>

      {/* Upcoming event */}
      {upcoming.length > 0 && (
        <div className="w-full mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={upcoming[0].id}
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={upcoming[0].image}
                alt={upcoming[0].title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-8">
                <h2 className="text-4xl font-bold mb-4">{upcoming[0].title}</h2>
                <p className="text-xl mb-2">{upcoming[0].date}</p>
                <p className="text-lg mb-6">{upcoming[0].description}</p>
                <motion.button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      
      {/* All event */}
      {event.map((event, index) => (
        <div key={event.id} className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Photo Gallery */}
          <div className="w-full md:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${event.id}-${currentImageIndex}`}
                src={event.images[index === currentEventIndex ? currentImageIndex : 0]}
                alt={`${event.title} - Image`}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            {index === currentEventIndex && (
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button onClick={prevEvent} className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextEvent} className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors">
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg h-full flex flex-col justify-between"
              style={{ borderLeft: `8px solid ${event.color}` }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                <p className="text-xl mb-4">{event.date}</p>
                <p className="text-gray-300 mb-6">{event.description}</p>
              </div>
              <div>
                {event.isUpcoming ? (
                  <motion.button 
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                ) : (
                  <span className="block w-full px-6 py-3 bg-gray-700 text-gray-300 rounded-full text-center text-lg font-semibold">
                    Registration Closed
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Event Timeline */}
      <div className="mt-12 flex justify-center items-center space-x-4">
        {event.map((event, index) => (
          <motion.div
            key={event.id}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentEventIndex ? 'bg-white' : 'bg-gray-600'
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setCurrentEventIndex(index);
              setCurrentImageIndex(0);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;