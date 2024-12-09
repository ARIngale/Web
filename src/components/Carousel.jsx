import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import events from "../constants/index";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(timer);
  }, [current]);

  function nextSlide() {
    setCurrent(current === events.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? events.length - 1 : current - 1);
  }

  return (
    <div className="carousel-container relative h-[calc(100vh-4rem)] w-full overflow-x-hidden">
      {events.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-16 lg:px-24">
            <div className="w-full max-w-7xl aspect-video relative overflow-hidden rounded-lg shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 tracking-tight leading-tight text-shadow-lg">
                  {item.name}
                </h1>
                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-shadow-md">
                    {item.date} | {item.location}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg max-w-2xl text-shadow-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Register Now
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <button
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 sm:p-2 transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 sm:p-2 transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight size={24} className="text-white" />
      </button> */}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
