import React from 'react'

/**
 * ProjectShowcase - Displays a project with demo GIFs and description
 *
 * Props:
 *   title       - Project name
 *   subtitle    - e.g. "Personal Project"
 *   description - Project description text
 *   gifs        - Array of gif srcs: ['/demo1.gif', '/demo2.gif']
 *   gifSide     - "left" or "right" (which side the gifs appear on)
 *   link        - Optional { href, label } for a button
 *   extra       - Optional extra JSX to render below description
 *   gifSize     - "sm", "md", "lg", "xl" (default "sm")
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
}) {
  const gifsContent = (
    <div className="flex flex-col gap-4">
      {gifs.map((src, i) => (
        <div key={i} className="rounded-2xl overflow-hidden">
          <img src={src} alt={`${title} demo ${i + 1}`} className="w-full h-auto" />
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
      {/* Mobile: always info first, then gif */}
      <div className="flex flex-col gap-8 md:hidden">
        <div>{infoContent}</div>
        <div className="max-w-sm mx-auto">{gifsContent}</div>
      </div>

      {/* Desktop: side by side with gifSide control */}
      <div className="hidden md:grid md:grid-cols-[2fr_3fr] gap-16 lg:gap-24 xl:gap-32 items-center">
        {gifSide === 'left' ? (
          <>
            <div className={`${sizeClass} mx-auto`}>{gifsContent}</div>
            <div className="flex items-center justify-center"><div className="max-w-lg">{infoContent}</div></div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center"><div className="max-w-lg">{infoContent}</div></div>
            <div className={`${sizeClass} mx-auto pb-6`}>{gifsContent}</div>
          </>
        )}
      </div>
    </div>
  )
}
