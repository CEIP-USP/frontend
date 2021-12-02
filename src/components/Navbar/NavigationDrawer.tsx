import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import { NavbarLink } from './Navbar.interface';

const NavigationDrawer = ({
  isOpen,
  setIsOpen,
  links,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  links: NavbarLink[];
}) => {
  const auth = useAuth();
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
            {links.map(({ name, url }: NavbarLink, index: number) => (
              <Link
                to={url}
                key={index}
                className="text-center text-xl md:text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            ))}
          </div>
          {auth.isAuthenticated && (
            <button
              className="text-xl md:text-2xl text-left text-blue-400"
              onClick={() => auth.signOut()}
            >
              Sair
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default NavigationDrawer;
