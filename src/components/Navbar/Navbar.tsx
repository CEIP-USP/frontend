import React, { useState } from 'react';
import NavigationDrawer from './NavigationDrawer';
import { navbarLink } from './Navbar.interface';

const Navbar = ({ links }: { links: navbarLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex fixed w-full h-16 items-center px-6 bg-white border-b border-gray-200 z-10">
        <button
          className="font-bold text-2xl text-gray-700"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

      <NavigationDrawer isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
    </>
  );
};

export default Navbar;
