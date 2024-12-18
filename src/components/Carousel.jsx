import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { ReactTyped } from "react-typed";
import { upcoming } from "../constants/index";
import { motion } from 'framer-motion'

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
      <motion.h1 
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-200 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Events
      </motion.h1>
      <div 
        ref={carouselRef}
        className="carousel-container relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-2xl"
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
                  <ReactTyped
                    strings={[item.name]}
                    typeSpeed={30}
                    backSpeed={50}
                    loop
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300"
                  />
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
                  <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:translate-y-[-2px]">
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
    </div>
  );
}

export default Carousel;

