import React from "react"
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
        <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-x-hidden">
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
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-l from-white to-gray-500 text-transparent bg-clip-text"
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
                    <SocialButton url="https://www.instagram.com/wce_acm/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </SocialButton>
                    <SocialButton url="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </SocialButton>
                    <SocialButton url="https://www.facebook.com/wceacm/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </SocialButton>
                    <SocialButton url="https://x.com/wce_acm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </SocialButton>
                    <SocialButton url="mailto:wceacmsc@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </SocialButton>
                </motion.div>
            </div>
        </div>
    )
}

function SocialButton({ children, url }) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.a>
    )
}

