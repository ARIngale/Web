import React from "react"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const newsItems = [
    "WCE ACM Student Chapter wins Best Chapter Award",
    "Upcoming Hackathon: Register now!",
    "New AI workshop series starting next month",
    "WCE ACM members present at international conference"
]

export default function Hero() {
    return (
        <div className="min-h-screen w-[80%] mx-auto flex justify-center items-center gap-6">
            <div className="flex flex-col w-2/3 items-center gap-1 mt-5">
                <motion.div
                    className="w-3/4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full p-[2px] mb-3"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="rounded-full">
                        <div className="flex items-center py-1 px-3 gap-2">
                            <span className="text-base italic font-semibold text-white whitespace-nowrap">
                                NEWS
                            </span>
                            <div className="overflow-hidden whitespace-nowrap w-full">
                                <motion.div
                                    className="flex"
                                    animate={{
                                        x: ["0%", "-100%"],
                                        transition: {
                                            x: {
                                                repeat: Infinity,
                                                duration: 20,
                                                ease: "linear",
                                            },
                                        },
                                    }}
                                >
                                    {/* Duplicate NewsItems to create a seamless scroll */}
                                    {[...newsItems, ...newsItems].map((item, index) => (
                                        <span
                                            key={index}
                                            className="text-white text-sm mr-4 sm:mr-6"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.h1
                    className="whitespace-nowrap overflow-hidden text-[7rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4d4d4d] via-[#ffffff] to-[#919191]"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    WCE ACM
                </motion.h1>
                <motion.h2
                    className="w-max text-[3.5rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#8f8f8f] to-[#ffffff] flex gap-[1rem] justify-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span>STUDENT</span>
                    <span>CHAPTER</span>
                </motion.h2>
                <motion.div
                    className="w-[90%] py-4 text-[16px] text-center text-white font-light leading-tight"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </motion.div>
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link to="/events">
                        <button type="button" class="text-white bg-gradient-to-r from-primaryBlue via-cyan-500 to-lightBlue hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-lg px-7 py-2 text-center">Events</button>
                    </Link>

                    <Link to="/about">
                        <button type="button" class="text-white bg-gradient-to-r from-primaryBlue via-cyan-500 to-lightBlue hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-lg px-7 py-2 text-center">About</button>
                    </Link>
                </motion.div>
                <motion.div
                    className="flex justify-center mt-6 gap-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="mailto:wceacmsc@gmail.com" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <IoMail size={21} className="text-black" />
                    </a>
                    <a href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={21} className="text-black" />
                    </a>
                    <a href="https://www.instagram.com/wce_acm/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={21} className="text-black" />
                    </a>

                    <a href="https://www.facebook.com/wceacm/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={21} className="text-black" />
                    </a>
                    <a href="https://www.youtube.com/@wceacm" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={21} className="text-black" />
                    </a>
                    <a href="https://x.com/wce_acm" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={21} className="text-black" />
                    </a>
                </motion.div>
            </div>
            {/* <div className="flex items-center justify-center flex-grow">
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img className="w-[85%]" src="/logo.png" alt="logo" />
                </motion.div>
            </div> */}
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

