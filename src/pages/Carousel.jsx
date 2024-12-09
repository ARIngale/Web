import React, { useState } from "react";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";

import events from "../constants/index";
// console.log(events);

function Carousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === events.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? events.length - 1 : current - 1);
  }
  return (
    <div className="carousel-container">
      <div className="slider flex justify-center p-5 items-center h-screen">
        <div
          className="left-arrow absolute left-4 md:left-32 hover:bg-gray-400/50 hover:text-white px-1 py-5 rounded-lg cursor-pointer"
          onClick={prevSlide}
        >
          <RiArrowLeftWideLine color="#000" size={80} />
        </div>
        {events.map(
          (item, index) =>
            current === index && (
              <div
                key={index}
                className={
                  index === current
                    ? "slide flex justify-start w-full md:w-[90%] h-full p-5 md:p-10 rounded-3xl"
                    : "hidden"
                }
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="content text-white rounded-lg flex flex-col justify-between p-5 md:p-10">
                  <h1 className="text-[10vw] pl-5 md:text-[13vw] font-bold mb-4 tracking-tight leading-[10vw]">
                    {item.name}
                  </h1>
                  <div className="details p-5 md:p-10 w-full md:w-1/2 flex flex-col gap-5 md:gap-10 mt-5 md:mt-10">
                    <p className="text-4xl md:text-6xl font-bold">
                      {item.date}
                    </p>
                    <p className="text-4xl md:text-6xl font-bold">
                      {item.location}
                    </p>
                    <p className="text-sm md:text-2xl font-semibold">
                      {item.description}
                    </p>
                  </div>
                  <div className="buttons flex flex-col md:flex-row gap-4 px-5 md:px-10 mt-5 md:mt-10">
                    <button className="bg-blue-500 text-white text-xl md:text-3xl font-thin px-5 md:px-7 py-3 md:py-5 rounded-lg hover:bg-blue-700">
                      Participate
                    </button>
                    <button className="bg-green-500 text-white text-xl md:text-3xl font-thin px-5 md:px-7 py-3 md:py-5 rounded-lg hover:bg-green-700">
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            )
        )}

        <div
          className="right-arrow absolute right-4 md:right-32 hover:bg-gray-400/50 hover:text-white px-1 py-5 rounded-lg cursor-pointer"
          onClick={nextSlide}
        >
          <RiArrowRightWideLine color="#000" size={80} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
