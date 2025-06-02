import React from 'react';
import { EnvelopeIcon, QuestionMarkCircleIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#', icon: EnvelopeIcon },
  { name: 'FAQ', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Terms', href: '#', icon: DocumentTextIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-6">
        {/* Logo/Name */}
        <div className="text-2xl font-bold tracking-wide mb-4 md:mb-0">PropertyPulse</div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-6 justify-center">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="flex items-center gap-1 hover:text-white transition"
            >
              {link.icon && <link.icon className="h-5 w-5" />}
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} PropertyPulse. All rights reserved. &nbsp;|
        <a href="#" className="hover:text-white underline ml-1">Privacy Policy</a> &nbsp;|
        <a href="#" className="hover:text-white underline ml-1">Terms of Service</a> &nbsp;|
        <a href="#" className="hover:text-white underline ml-1">Cookie Policy</a>
      </div>
    </footer>
  );
};

export default FooterSection;
