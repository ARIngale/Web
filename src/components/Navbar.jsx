import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();

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
		{ name: 'Home', href: '/' },
		{ name: 'Blogs', href: '/blogs' },
		{ name: 'Contact', href: '/contact-us' },
	];

	return (
		<nav
			style={{
				width: isScrolled ? '8%' : '30%',
				transition: 'width 0.2s ease-in-out',
			}}
			className={`fixed h-14 left-1/2 transform -translate-x-1/2 px-4 py-2 top-7 z-50 rounded-full backdrop-blur-md bg-gray-500/50 text-white shadow-lg transition-all duration-200 ease-in-out flex items-center`}
		>
			<div
				className={`relative left-1/2 transform -translate-x-1/2 top-0 flex gap-3 items-center flex-grow justify-center transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 delay-200'
					}`}
			>
				{navItems.map((item) => (
					<NavItem key={item.name} item={item} currentPath={location.pathname} />
				))}
			</div>

			{/* Center Logo */}
			<div className="absolute left-1/2 transform -translate-x-1/2">
				<Link
					to="/"
					className="flex-shrink-0 w-[60px] h-[40px] flex items-center justify-center bg-transparent"
				>
					<img src="/logo.png" alt="logo" />
				</Link>
			</div>
		</nav>
	);
}

function NavItem({ item, currentPath }) {
	return (
		<Link
			to={item.href}
			className={`text-[14px] md:text-[16px] w-[4.5rem] flex items-center justify-center text-nowrap ${item.name === 'Board'
				? currentPath.startsWith('/board') && 'font-bold'
				: currentPath === item.href && 'font-bold'
				} ${item.name === 'Home' ? 'text-transparent' : 'text-white hover:text-gray-300'
				}`}
		>
			{item.name}
		</Link>
	);
}
