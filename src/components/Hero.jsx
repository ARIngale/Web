import React from "react"
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const newsItems = [
  "WCE ACM Student Chapter wins Best Chapter Award",
  "Upcoming Hackathon: Register now!",
  "New AI workshop series starting next month",
  "WCE ACM members present at international conference"
]

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="z-10 text-center w-full max-w-2xl mx-auto space-y-8 sm:space-y-12">
                <motion.div 
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden rounded-full p-[2px]"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-black rounded-full">
                        <div className="flex items-center py-2 px-3 sm:px-4">
                            <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mr-2 sm:mr-4 whitespace-nowrap">News:</span>
                            <div className="overflow-hidden whitespace-nowrap w-full">
                                <motion.div
                                    className="inline-block"
                                    animate={{
                                        x: [0, -2000],
                                        transition: {
                                            x: {
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                duration: 40,
                                                ease: "linear",
                                            },
                                        },
                                    }}
                                >
                                    {newsItems.map((item, index) => (
                                        <span key={index} className="text-white mr-8 sm:mr-16 text-sm sm:text-base md:text-lg">• {item}</span>
                                    ))}
                                    {newsItems.map((item, index) => (
                                        <span key={index + newsItems.length} className="text-white mr-8 sm:mr-16 text-sm sm:text-base md:text-lg">• {item}</span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-l from-white to-gray-500 text-transparent bg-clip-text"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    WCE ACM
                </motion.h1>
                <motion.div 
                    className="text-base sm:text-lg md:text-xl text-white font-poppins px-4 sm:px-0"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </motion.div>
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link to="/events" className="bg-[#0A93C4] text-black text-base sm:text-lg md:text-xl font-semibold rounded-md w-full sm:w-[140px] md:w-[160px] h-[50px] sm:h-[59px] flex items-center justify-center">
                        Event
                    </Link>
                    <button className="bg-transparent border border-[#00DBE9] text-white text-base sm:text-lg md:text-xl font-semibold rounded-md w-full sm:w-[140px] md:w-[160px] h-[50px] sm:h-[59px]">
                        About us
                    </button>
                </motion.div>
                <motion.div 
                    className="flex justify-center gap-4 sm:gap-7"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <SocialButton Icon={Instagram} url="https://www.instagram.com/wce_acm/" />
                    <SocialButton Icon={Linkedin}  url="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" />
                    <SocialButton Icon={Facebook}  url="https://www.facebook.com/wceacm/" />
                    <SocialButton Icon={Twitter}  url="https://x.com/wce_acm" />
                </motion.div>
            </div>
        </div>
    )
}

function SocialButton({ Icon, url }) {
    return (
        <motion.a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </motion.a>
    )
}
