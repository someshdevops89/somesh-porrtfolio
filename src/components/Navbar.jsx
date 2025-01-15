import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Send } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Somesh Soni
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#features" 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Skills
              </a>
              <a 
                href="#reviews" 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              className="block text-gray-300 hover:bg-gray-800 hover:text-blue-400 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block text-gray-300 hover:bg-gray-800 hover:text-blue-400 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#features" 
              className="block text-gray-300 hover:bg-gray-800 hover:text-blue-400 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#reviews" 
              className="block text-gray-300 hover:bg-gray-800 hover:text-blue-400 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block text-gray-300 hover:bg-gray-800 hover:text-blue-400 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;