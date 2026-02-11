import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar({ isDark, setIsDark, showDarkToggle = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="px-4 sm:px-8 md:px-12 py-4 md:pt-6 relative z-50">
        <div className="hidden md:flex items-center justify-between w-full">
          {!isDark && <Link to="/"><img src="/TimTim-logo.svg" alt="Logo" className="h-12 md:h-16" /></Link>}
          {isDark && <div className="h-12 md:h-16" />} {/* Spacer to maintain layout */}
          
          {!isDark && (
            <div className="flex text-[14px] gap-8 items-center absolute left-1/2 transform -translate-x-1/2 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Link to="/about" className="hover:text-gray-600 transition-colors">About me</Link>
              <Link to="/projects" className="hover:text-gray-600 transition-colors">Projects</Link>
              <Link to="/designs" className="hover:text-gray-600 transition-colors">Designs</Link>
              <Link to="/creatives" className="hover:text-gray-600 transition-colors">Creatives</Link>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            {!isDark && (
              <button className="bg-black text-white text-[12px] px-8 py-1 rounded-full hover:bg-gray-800 transition-colors">
                <a href="https://github.com/FatimaTanvir" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
            )}

            {/* Dark Mode Toggle - Only show if showDarkToggle is true */}
            {showDarkToggle && (
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isDark ? 'bg-black' : 'bg-gray-300'
                }`}
                animate={{
                  boxShadow: isDark
                    ? [
                        '0 0 12px rgba(255, 255, 255, 0.3), 0 0 24px rgba(255, 255, 255, 0.15)',
                        '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.25)',
                        '0 0 28px rgba(255, 255, 255, 0.6), 0 0 56px rgba(255, 255, 255, 0.3)',
                        '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.25)',
                        '0 0 12px rgba(255, 255, 255, 0.3), 0 0 24px rgba(255, 255, 255, 0.15)',
                      ]
                    : '0 0 0px rgba(0, 0, 0, 0)'
                }}
                transition={{
                  duration: isDark ? 4 : 0.5,
                  repeat: isDark ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute top-1 w-7 h-5 bg-white rounded-full"
                  animate={{
                    left: isDark ? '28px' : '4px',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex justify-between items-center">
          {!isDark && <Link to="/"><img src="/TimTim-logo.svg" alt="Fatima Logo" className="h-12" /></Link>}
          {isDark && <div className="h-12" />} {/* Spacer to maintain layout */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle - Mobile - Only show if showDarkToggle is true */}
            {showDarkToggle && (
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  isDark ? 'bg-black' : 'bg-gray-300'
                }`}
                animate={{
                  boxShadow: isDark 
                    ? [
                        '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
                        '0 0 25px rgba(255, 255, 255, 0.8), 0 0 50px rgba(255, 255, 255, 0.6)',
                        '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'
                      ]
                    : '0 0 0px rgba(0, 0, 0, 0)'
                }}
                transition={{ 
                  duration: isDark ? 2 : 0.3,
                  repeat: isDark ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute top-1 w-4 h-3 bg-white rounded-full"
                  animate={{
                    left: isDark ? '24px' : '4px',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              </motion.button>
            )}

            {!isDark && (
              <button 
                className="text-2xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Stacked */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg px-4 py-6 flex flex-col gap-4 items-center text-center relative z-50"
        >
          <Link to="/about" className="hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>About me</Link>
          <Link to="/projects" className="hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/designs" className="hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Designs</Link>
          <Link to="/creatives" className="hover:text-gray-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Creatives</Link>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-full max-w-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <a href="https://github.com/FatimaTanvir" target="_blank" rel="noopener noreferrer">GitHub</a>
          </button>
        </motion.div>
      )}
    </>
  );
}