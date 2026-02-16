import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ProjectShowcase - Displays a project with demo GIFs/images and description
 *
 * Props:
 *   title       - Project name
 *   subtitle    - e.g. "Personal Project"
 *   description - Project description text
 *   gifs        - Array of gif/image srcs: ['/demo1.gif', '/demo2.png']
 *   gifSide     - "left" or "right" (which side the gifs appear on)
 *   link        - Optional { href, label } for a button
 *   extra       - Optional extra JSX to render below description
 *   gifSize     - "sm", "md", "lg", "xl", "2xl" (default "sm")
 *   tools       - Optional array of { name, icon } to show tech used for project
 */
export default function ProjectShowcase({
  title,
  subtitle,
  description,
  gifs = [],
  gifSide = 'left',
  gifSize = 'sm',
  link,
  extra,
  tools = [],
  badge,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultiple = gifs.length > 1

  // Reset gallery index when gifs array changes (e.g. navigating between projects)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setCurrentIndex(0) }, [gifs])

  const goTo = (i) => setCurrentIndex(i)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length)
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % gifs.length)

  const gifsContent = (
    <div className="relative">
      {/* Image display — stable 16:9 container so size never changes between images/projects */}
      <div
        className="rounded-2xl overflow-hidden relative bg-gray-50"
        style={{ aspectRatio: '16 / 9' }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={gifs[currentIndex]}
            alt={`${title} demo ${currentIndex + 1}`}
            className="w-full h-full object-contain absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>

        {/* Prev / Next arrows — always visible */}
        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1.5 shadow-md transition-colors z-10"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1.5 shadow-md transition-colors z-10"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators + counter */}
      {hasMultiple && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {gifs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? 'w-5 h-2 bg-gray-800'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-2">{currentIndex + 1}/{gifs.length}</span>
        </div>
      )}
    </div>
  )

  const toolsContent = tools.length > 0 && (
    <div className="flex flex-wrap gap-3 mt-6 pt-4 pb-2 items-center justify-center">
      {tools.map((tool, i) => (
        <div key={i} className="flex items-center gap-1.5 text-gray-600" title={tool.name}>
          <img src={tool.icon} alt={tool.name} className="w-5 h-5" />
          <span className="text-[10px] text-gray-400">{tool.name}</span>
        </div>
      ))}
    </div>
  )

  const badgePill = badge && (
    <span className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 whitespace-nowrap">
      {badge}
    </span>
  )

  const infoContent = (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-3xl sm:text-4xl font-serif">{title}</h2>
        {badgePill}
      </div>
      {subtitle && <p className="text-xs text-gray-400 mb-3">{subtitle}</p>}
      {description && (
        <p className="text-sm text-gray-700 leading-relaxed mb-3">{description}</p>
      )}
      {extra}
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-gray-300 rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors mt-4"
        >
          {link.label}
        </a>
      )}
    </div>
  )

  const sizeClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }[gifSize] || 'max-w-sm'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 w-full">
      
      {/* Mobile: title, subtitle, gif, then description/extra/link */}
      <div className="flex flex-col gap-4 md:hidden px-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-3xl font-serif">{title}</h2>
            {badgePill}
          </div>
          {subtitle && <p className="text-xs text-gray-400 mb-2">{subtitle}</p>}
        </div>
        <div className={`${sizeClass} mx-auto w-full`}>
          {gifsContent}
          {toolsContent}
        </div>
        <div>
          {description && (
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{description}</p>
          )}
          {extra}
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors mt-2"
            >
              {link.label}
            </a>
          )}
        </div>
      </div>

      {/* Desktop: side by side with gifSide control */}
      <div className={`hidden md:grid ${gifSide === 'left' ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr]'} gap-10 lg:gap-16 xl:gap-20 items-center`}>
        {gifSide === 'left' ? (
          <>
            <div className="w-full">{gifsContent}{toolsContent}</div>
            <div className="flex items-center justify-center"><div className="max-w-lg">{infoContent}</div></div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center"><div className="max-w-lg">{infoContent}</div></div>
            <div className="w-full pb-6">{gifsContent}{toolsContent}</div>
          </>
        )}
      </div>
    </div>
  )
}
