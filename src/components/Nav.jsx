import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import React, { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button type="button" onClick={handleClick} aria-label="Toggle Menu">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
        </div>

        {/* Mobile Menu (Conditional) */}
        <ul
          className={`mobile-menu duration-300 ease-in-out fixed top-0 left-0 right-0 bottom-0 z-12 overflow-auto bg-white shadow-md md:hidden ${
            menuOpen ? "flex flex-col justify-center items-center p-4" : "hidden"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} className="mb-4">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
