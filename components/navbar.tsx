import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-300 p-2 flex items-center">
      <img
        src="/pp-dummy.png"
        alt="Profile"
        className="w-10 h-10 rounded-full mr-2"
      />
      <span className="text-lg font-bold">Profile</span>
    </nav>
  );
};

export default Navbar;