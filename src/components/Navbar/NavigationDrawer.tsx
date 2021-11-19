import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { navbarLink } from './Navbar.interface';

const NavigationDrawer = ({
  isOpen,
  setIsOpen,
  links,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  links: navbarLink[];
}) => {
  const showModelClass = isOpen ? 'translate-x-0' : '-translate-x-full';
  return (
    <>
      <div
        className={`bg-black bg-opacity-75 transform top-0 left-0 fixed h-full w-full z-20 ${showModelClass}`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`transform top-0 left-0 w-64 md:w-128 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${showModelClass}`}
      >
        <div className="flex flex-col m-8 space-y-10">
          <Link
            to="/"
            className="text-5xl text-red-400 font-bold text-center"
            onClick={() => setIsOpen(false)}
          >
            CEIP
          </Link>
          <div className="space-y-4 flex flex-col">
            {links.map(({ name, url }: navbarLink, index: number) => (
              <Link
                to={url}
                key={index}
                className="text-center text-xl md:text-2xl font-medium"
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            ))}
          </div>
          <Link
            to="#"
            onClick={() => alert('Em construção')}
            className="text-xl md:text-2xl text-blue-400"
          >
            Sair
          </Link>
        </div>
      </aside>
    </>
  );
};

export default NavigationDrawer;
