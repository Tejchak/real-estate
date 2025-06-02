"use client";

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Rental', href: '#' },
  { name: 'Listing', href: '#' },
  { name: 'Location', href: '#' },
  { name: 'Explore', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full">
          {/* Logo/Brand */}
          <a href="#" className="text-2xl font-bold text-blue-600 tracking-wide mr-8 select-none">PropertyPulse</a>

          {/* Nav Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <button className="px-4 py-2 rounded font-semibold text-gray-700 hover:text-blue-600 transition">Sign In</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Sign Up</button>
          </div>

          {/* Hamburger menu button (mobile only) */}
          <div className="md:hidden ml-auto flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition w-full text-center py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-11/12 px-4 py-2 rounded font-semibold text-gray-700 hover:text-blue-600 transition">Sign In</button>
            <button className="w-11/12 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
