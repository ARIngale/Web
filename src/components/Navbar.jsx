import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Events', href: '/events' },
    { name: 'Board', href: '/board/main' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact us', href: '/contact-us' },
  ]

  return (
    <nav className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-[#343434] text-white shadow-lg transition-all duration-500 ease-in-out ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="relative px-5 md:px-10">
      
        <div className="flex items-center justify-center space-x-3 md:space-x-10">
          {!isScrolled && (
            <>
              <NavItems items={navItems.slice(0, 2)} currentPath={location.pathname} />
              <Logo />
              <NavItems items={navItems.slice(2)} currentPath={location.pathname} />
            </>
          )}
          {isScrolled && <Logo />}
        </div>
      
      </div>
    </nav>
  )
}

function NavItems({ items, currentPath }) {
  return (
    <ul className="flex space-x-3 md:space-x-10">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href} 
            className={`text-white hover:text-gray-300 text-[15px] md:text-[21px] text-nowrap ${
              item.name === 'Board' 
                ? (currentPath.startsWith('/board') ? 'font-bold' : '')
                : (currentPath === item.href ? 'font-bold' : '')
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Logo() {
  return (
    <Link to="/" className="w-[60px] h-[40px] md:w-[100px] md:h-[60px] flex items-center justify-center bg-transparent">
      <img src="/logo.png" alt="logo" className="max-w-full max-h-full object-contain" />
    </Link>
  )
}

