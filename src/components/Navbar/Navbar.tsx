import React, { useState } from 'react';
import NavigationDrawer from './NavigationDrawer';
import { NavbarLink } from './Navbar.interface';

const Navbar = ({ links }: { links: NavbarLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex fixed w-full h-16 items-center px-6 bg-white border-b border-gray-200">
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
