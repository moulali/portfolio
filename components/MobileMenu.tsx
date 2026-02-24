'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none group"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 rounded-full my-1.5 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
            onClick={closeMenu}
          />

          {/* Menu */}
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 z-50 shadow-lg animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col p-4 gap-2">
              <button
                onClick={closeMenu}
                className="text-left px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-sky-50 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200 font-medium text-lg hover:text-sky-600 dark:hover:text-sky-400"
              >
                Work
              </button>
              <button
                onClick={closeMenu}
                className="text-left px-4 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-sky-50 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200 font-medium text-lg hover:text-sky-600 dark:hover:text-sky-400"
              >
                Contact
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
