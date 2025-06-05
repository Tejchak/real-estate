"use client";

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const navLinks = [
  { name: 'Rental', href: '#' },
  { name: 'Listing', href: '#' },
  { name: 'Location', href: '#' },
  { name: 'Explore', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="relative flex items-center justify-between w-full px-8 h-16">
        {/* Left side - Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-bold text-blue-600 tracking-wide select-none">
            PropertyPulse
          </a>
        </div>

        {/* Center - Nav Links (hidden on mobile) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
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

        {/* Right side - Auth Buttons and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Auth Buttons (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-4 py-2 rounded font-semibold text-gray-700 hover:text-blue-600 transition"
              onClick={() => router.push('/signin')}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger menu button (mobile only) */}
          <div className="md:hidden">
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
            <button
              className="w-11/12 px-4 py-2 rounded font-semibold text-gray-700 hover:text-blue-600 transition"
              onClick={() => {
                setMenuOpen(false);
                router.push('/signin');
              }}
            >
              Sign In
            </button>
            <button
              className="w-11/12 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              onClick={() => {
                setMenuOpen(false);
                router.push('/signup');
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;