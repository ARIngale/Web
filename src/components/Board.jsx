import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamMembers } from '../constants/index';


const BoardMemberCard = ({  name,designation,image, linkedin, instagram }) => {
    return (
      <motion.div 
        className="w-64 h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-gray-700 to-gray-600 relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="h-2/3">
          <img src='/Pasted image.png' alt={name} className="w-full h-full object-cover rounded-t-xl" />
        </div>
        <div className="h-1/3 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-sm text-gray-200 mb-2">{designation}</p>
            {/* <p className="text-xs text-gray-300">{position}</p> */}
          </div>
        </div>
        <motion.div 
          className="absolute inset-0  bg-opacity-75 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
         
          <div className="flex justify-center space-x-4">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  


const Board = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const presidentCard = teamMembers.find(member => member.designation === 'President');
  const otherMembers = teamMembers.filter(member => member.designation !== 'President');

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Board
        </motion.h1>
        <div className="flex flex-col items-center" ref={ref}>
          {presidentCard && (
            <div className="mb-16">
              <BoardMemberCard {...presidentCard} />
            </div>
          )}
          <svg className="absolute h-full w-full" style={{ top: 0, left: 0, pointerEvents: 'none' }}>
            <motion.path
              d="M 50% 20%, L 25% 100%, M 50% 20%, L 75% 100%"
              stroke="#4F46E5"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
              initial="hidden"
              animate={controls}
            />
          </svg>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-96 gap-y-16 justify-items-center">
            {otherMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { delay: 0.1 * index } }
                }}
              >
                <BoardMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;

