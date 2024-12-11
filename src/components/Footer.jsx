import React from 'react'
import { Link } from 'react-router-dom'

function SocialIcon({ href, children }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center bg-gray-800 rounded-full transition-colors duration-300 hover:bg-gray-700'
    >
      {children}
    </a>
  )
}

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4 sm:py-6 border-t-[0.5px] border-gray-800 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="text-center sm:text-left">
                        <Link to="/terms" className="text-sm sm:text-base hover:text-gray-300 mr-4">Terms & Conditions</Link>
                        <Link to="/privacy" className="text-sm sm:text-base hover:text-gray-300">Privacy Policy</Link>
                    </div>
                    <div className="flex space-x-3 sm:space-x-4">
                        <SocialIcon href="https://www.instagram.com/wce_acm/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.facebook.com/wceacm/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://x.com/wce_acm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </SocialIcon>
                    </div>
                    <div className="text-center sm:text-right">
                        <p className="text-sm sm:text-base">&copy; 2023 WCE ACM. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

