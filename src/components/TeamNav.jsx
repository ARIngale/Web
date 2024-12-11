import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TeamNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="bg-gray-900 p-2 rounded-lg shadow-lg">
      <div className="flex space-x-2">
        <NavLink to="/board/main" isActive={isActive('/board/main')}>
          Main Board
        </NavLink>
        <NavLink to="/board/executive" isActive={isActive('/board/executive')}>
          Executive Board
        </NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`
      relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
      ${isActive 
        ? 'text-white bg-gradient-to-r from-gray-800  to-gray-700' 
        : 'text-gray-300 hover:text-white hover:bg-gray-700'}
    `}
  >
    {children}
 
  </Link>
);

export default TeamNav;

