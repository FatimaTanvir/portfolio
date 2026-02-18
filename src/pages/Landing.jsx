import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import EyeTracker from '../components/Eyetracker'
import { useTypewriter } from '../components/Typewriter'
import Footer from '../components/Footer'

// Moved outside LandingPage to avoid recreating on every render
function CharacterCard({ image, alt, route, navigate }) {
  return (
    <motion.div
      className="inline-block cursor-pointer"
      onClick={() => navigate(route)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(route); } }}
      role="button"
      tabIndex={0}
      aria-label={`View ${alt}`}
      whileHover="hover"
      initial="initial"
      style={{ transformOrigin: 'top center' }}
    >
      <motion.div
        variants={{
          initial: { rotate: 0 },
          hover: {
            rotate: [0, -10, 10, -10, 10, -5, 5, 0],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1]
            }
          }
        }}
        style={{ transformOrigin: 'top center' }}
        className="flex flex-col items-center"
      >
        <img
          src={image}
          alt={alt}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

export default function LandingPage() {
  useEffect(() => { document.title = "Fatima Tanvir | Portfolio" }, [])
  const displayedText = useTypewriter("Hi, I'm Fatima.", 100);
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isDark={isDark} setIsDark={setIsDark} showDarkToggle={true} />
      <EyeTracker isDark={isDark} />

      {/* Main Content */}
      <motion.div
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 ${isDark ? 'pointer-events-none' : ''}`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4 md:mb-6 text-center">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-gray-600 mb-2 md:mb-3 text-center font-medium">
          Wanna know more? Choose a character.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center">
          or... just click <Link to="/about" className="underline hover:text-black">here</Link>.
        </p>

        {/* Character Cards */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-8 sm:mb-10 md:mb-12 items-center justify-center w-full">
          <CharacterCard
            image="/TheDesigner.png"
            alt="The Designer"
            route="/designs"
            navigate={navigate}
          />
          <CharacterCard
            image="/TheEngineer.png"
            alt="The Engineer"
            route="/projects"
            navigate={navigate}
          />
          <CharacterCard
            image="/TheArtist.png"
            alt="The Artist"
            route="/creatives"
            navigate={navigate}
          />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
