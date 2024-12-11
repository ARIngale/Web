import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { upcoming } from '../constants/index';

const UpcomingEvents = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === upcoming.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === 0 ? upcoming.length - 1 : prev - 1));
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handleMouseMove = (e) => {
    if (carouselRef.current) {
      const { left, top, width, height } = carouselRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      carouselRef.current.style.setProperty('--mouse-x', x);
      carouselRef.current.style.setProperty('--mouse-y', y);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
     
      <div 
        ref={carouselRef}
        className="carousel-container relative w-full bg-transparent max-w-7xl mx-auto overflow-hidden rounded-lg "
        style={{ height: 'calc(100vh - 12rem)' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {upcoming.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-in-out hover:scale-110"
              style={{ 
                backgroundImage: `url(${item.image})`,
                transform: 'perspective(1000px) rotateX(calc(var(--mouse-y, 0.5) * 5deg - 2.5deg)) rotateY(calc(var(--mouse-x, 0.5) * 5deg - 2.5deg))',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300">
                    {item.name}
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex flex-wrap items-center text-white">
                  <span className="flex items-center mr-4 mb-2">
                    <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                    {item.location}
                  </span>
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl text-gray-200 text-shadow-sm hidden sm:block">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-y-[-2px]">
                    Register Now
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                  <button 
                    className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-y-[-2px]"
                    onClick={() => setShowModal(true)}
                  >
                    Learn More
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 transition-all duration-300 z-10 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={prevSlide}
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </button>
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-300 transition-all duration-300 z-10 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={nextSlide}
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {upcoming.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-cyan-300 scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  bg-black bg-opacity-50  flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 text-white p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{upcoming[current].name}</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <img src={upcoming[current].image} alt={upcoming[current].title} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4" />

              <div className="space-y-4">
                <p><strong>Date:</strong> {upcoming[current].date}</p>
                <p><strong>Location:</strong> {upcoming[current].location}</p>
                <p><strong>Description:</strong> {upcoming[current].description}</p>
                {upcoming[current].detailedInfo.schedule && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                    <ul className="list-disc list-inside">
                      {upcoming[current].detailedInfo.schedule.map((item, index) => (
                        <li key={index}>{item.time}: {item.activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {upcoming[current].detailedInfo.speakers && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                    <ul className="list-disc list-inside">
                      {upcoming[current].detailedInfo.speakers.map((speaker, index) => (
                        <li key={index}>{speaker.name} - {speaker.role}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {upcoming[current].detailedInfo.prizes && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prizes</h3>
                    <ul className="list-disc list-inside">
                      {upcoming[current].detailedInfo.prizes.map((prize, index) => (
                        <li key={index}>{prize.place}: {prize.amount}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {upcoming[current].detailedInfo.ticketPrice && (
                  <p><strong>Ticket Price:</strong> {upcoming[current].detailedInfo.ticketPrice}</p>
                )}
                {upcoming[current].detailedInfo.entryFee && (
                  <p><strong>Entry Fee:</strong> {upcoming[current].detailedInfo.entryFee}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UpcomingEvents;

