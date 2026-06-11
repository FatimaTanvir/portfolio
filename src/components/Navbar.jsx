import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar({ darkBg = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = `transition-colors ${darkBg ? 'text-white hover:text-white/60' : 'hover:text-gray-600'}`;

  return (
    <>
      <nav className="px-4 sm:px-8 md:px-12 py-4 md:pt-10 relative z-50" aria-label="Main navigation">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between w-full max-w-[1600px] mx-auto">
          <Link to="/">
            <img src="/TimTim-logo.svg" alt="Logo" className={`h-12 md:h-16 ${darkBg ? 'invert' : ''}`} />
          </Link>

          <div className="flex text-[14px] gap-8 items-center absolute left-1/2 transform -translate-x-1/2 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Link to="/about" className={linkClass}>About me</Link>
            <Link to="/projects" className={linkClass}>Projects</Link>
            <Link to="/designs" className={linkClass}>Designs</Link>
            <Link to="/creatives" className={linkClass}>Creatives</Link>
          </div>

          <a
            href="https://github.com/FatimaTanvir"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[12px] px-8 py-1 rounded-full transition-colors ${darkBg ? 'bg-white text-black hover:bg-white/80' : 'bg-black text-white hover:bg-gray-800'}`}
          >
            GitHub
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/">
            <img src="/TimTim-logo.svg" alt="Fatima Logo" className={`h-12 ${darkBg ? 'invert' : ''}`} />
          </Link>
          <button
            className={`text-2xl ${darkBg ? 'text-white' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden shadow-lg px-4 py-6 flex flex-col gap-4 items-center text-center relative z-50 ${darkBg ? 'bg-black text-white' : 'bg-white'}`}
          >
            <Link to="/about" className={linkClass} onClick={() => setMobileMenuOpen(false)}>About me</Link>
            <Link to="/projects" className={linkClass} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link to="/designs" className={linkClass} onClick={() => setMobileMenuOpen(false)}>Designs</Link>
            <Link to="/creatives" className={linkClass} onClick={() => setMobileMenuOpen(false)}>Creatives</Link>
            <a
              href="https://github.com/FatimaTanvir"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full w-full max-w-xs text-center transition-colors ${darkBg ? 'bg-white text-black hover:bg-white/80' : 'bg-black text-white hover:bg-gray-800'}`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
