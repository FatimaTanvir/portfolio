import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="px-4 sm:px-8 md:px-12 py-4 md:pt-6">
        <div className="hidden md:flex items-center justify-between w-full">
  <Link to="/"><img src="/TimTim-logo.svg" alt="Logo" className="h-12 md:h-16" /></Link>
  
  <div className="flex text-[14px] gap-8 items-center absolute left-1/2 transform -translate-x-1/2 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
    <Link to="/about" className="hover:text-gray-600 transition-colors">About me</Link>
    <Link to="/projects" className="hover:text-gray-600 transition-colors">Projects</Link>
    <Link to="/leadership" className="hover:text-gray-600 transition-colors">Designs</Link>
    <Link to="/creatives" className="hover:text-gray-600 transition-colors">Creatives</Link>
  </div>
  
  <button className="bg-black text-white text-[12px] px-8 py-1 rounded-full hover:bg-gray-800 transition-colors">
    <a href="https://github.com/FatimaTanvir" target="_blank" rel="noopener noreferrer">GitHub</a>
  </button>
</div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/"><img src="/TimTim-logo.svg" alt="Fatima Logo" className="h-12" /></Link>
          <button 
            className="text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Stacked */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col gap-4 items-center text-center"
        >
          <Link to="/about" className="hover:text-gray-600 transition-colors">About me</Link>
          <Link to="/projects" className="hover:text-gray-600 transition-colors">Projects</Link>
          <Link to="/leadership" className="hover:text-gray-600 transition-colors">Leadership</Link>
          <Link to="/creatives" className="hover:text-gray-600 transition-colors">Creatives</Link>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-full max-w-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <a href="https://github.com/FatimaTanvir">GitHub</a>
          </button>
        </motion.div>
      )}
    </>
  );
}