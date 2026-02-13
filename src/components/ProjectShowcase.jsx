import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerSize, setContainerSize] = useState(null)
  const firstImgRef = useRef(null)
  const hasMultiple = gifs.length > 1

  // Lock the gallery dimensions to the first image's natural aspect ratio (good?)
  useEffect(() => {
    setCurrentIndex(0)
    setContainerSize(null)
  }, [gifs])

  const handleFirstLoad = (e) => {
    if (!containerSize) {
      const { naturalWidth, naturalHeight } = e.currentTarget
      setContainerSize({ aspectRatio: `${naturalWidth} / ${naturalHeight}` })
    }
  }

  const goTo = (i) => setCurrentIndex(i)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + gifs.length) % gifs.length)
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % gifs.length)

  const gifsContent = (
    <div className="relative">
      {/* Image display — locked to first image's aspect ratio */}
      <div
        className="rounded-2xl overflow-hidden relative bg-gray-50"
        style={containerSize ? { aspectRatio: containerSize.aspectRatio } : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            ref={currentIndex === 0 ? firstImgRef : undefined}
            src={gifs[currentIndex]}
            alt={`${title} demo ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            style={containerSize ? { position: 'absolute', inset: 0 } : undefined}
            onLoad={currentIndex === 0 ? handleFirstLoad : undefined}
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1.5 shadow-md transition-colors z-10"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={goNext}
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
          <img src={tool.icon} alt={tool.name} className="w-5 h-5 grayscale opacity-60" />
          <span className="text-[10px] text-gray-400">{tool.name}</span>
        </div>
      ))}
    </div>
  )

  const infoContent = (
    <div>
      <h2 className="text-3xl sm:text-4xl font-serif mb-1">{title}</h2>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
      
      {/* Mobile: title, subtitle, gif, then description/extra/link */}
      <div className="flex flex-col gap-4 md:hidden px-4">
        <div>
          <h2 className="text-3xl font-serif mb-1">{title}</h2>
          {subtitle && <p className="text-xs text-gray-400 mb-2">{subtitle}</p>}
        </div>
        <div className="max-w-sm mx-auto w-full">
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
      <div className={`hidden md:grid ${gifSide === 'left' ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr]'} gap-16 lg:gap-24 xl:gap-32 items-center`}>
        {gifSide === 'left' ? (
          <>
            <div className={`${sizeClass} mx-auto`}>{gifsContent}{toolsContent}</div>
            <div className="flex items-center justify-center"><div className="max-w-lg">{infoContent}</div></div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center"><div className="max-w-lg">{infoContent}</div></div>
            <div className={`${sizeClass} mx-auto pb-6`}>{gifsContent}{toolsContent}</div>
          </>
        )}
      </div>
    </div>
  )
}
