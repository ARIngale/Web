import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

function SocialIcon({ href, Icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='w-[50px] h-[50px] flex items-center justify-center bg-gray-800 rounded-full transition-colors duration-300 hover:bg-gray-700'
    >
      <Icon className="w-6 h-6 text-white" />
    </a>
  )
}

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 border-t-[0.5px] border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link to="/terms" className="hover:text-gray-300 mr-4">Terms & Conditions</Link>
                        <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
                    </div>
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <SocialIcon href="https://www.instagram.com/wce_acm/" Icon={Instagram} />
                        <SocialIcon href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" Icon={Linkedin} />
                        <SocialIcon href="https://www.facebook.com/wceacm/" Icon={Facebook} />
                        <SocialIcon href="https://x.com/wce_acm" Icon={Twitter} />
                    </div>
                    <div>
                        <p>&copy; 2023 WCE ACM. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

