import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'

// Earthy palette — each project gets a unique animated border color pair
const colorMap = {
  clay:       { from: '#C2785C', to: '#D4A574', hoverText: 'group-hover:text-[#A0603E]' },
  moss:       { from: '#6B7F4E', to: '#8FA36E', hoverText: 'group-hover:text-[#556B3E]' },
  terracotta: { from: '#C75B39', to: '#D98B6A', hoverText: 'group-hover:text-[#A84A2E]' },
  sage:       { from: '#8EA68C', to: '#A8BFA6', hoverText: 'group-hover:text-[#6E8A6C]' },
  sand:       { from: '#C4A96A', to: '#D4C08A', hoverText: 'group-hover:text-[#9E874E]' },
  walnut:     { from: '#7B5B3A', to: '#9E7A52', hoverText: 'group-hover:text-[#5E4228]' },
  olive:      { from: '#808A3B', to: '#A3AE5E', hoverText: 'group-hover:text-[#636D2A]' },
  maroon:     { from: '#6B2D3E', to: '#8E4558', hoverText: 'group-hover:text-[#5A2234]' },
}

export default function ProjectCard({ slug, title, subtitle, description, thumbnail, thumbnailType = 'image', tools = [], repo, link, index = 0, badge, color = 'clay' }) {
  const repoUrl = repo || (link && link.repo);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorMap[color] || colorMap.clay;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: '800px' }}
      className="group"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22, mass: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-xl p-[2px]"
      >
        {/* Animated border — conic gradient that spins on hover */}
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-500"
          style={{
            background: `conic-gradient(from var(--border-angle, 0deg), ${colors.from}, ${colors.to}, transparent, ${colors.from})`,
            opacity: isHovered ? 1 : 0,
            animation: isHovered ? 'spin-border 3s linear infinite' : 'none',
          }}
        />

        {/* Static border (visible when not hovered) */}
        <div
          className="absolute inset-0 rounded-xl border border-[#E8E0D4] transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        />

        {/* Card content — sits on top of the spinning border */}
        <div className="relative rounded-[10px] overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-400 z-10">

          {/* Thumbnail */}
          <div className="aspect-video bg-[#F5F0E8] overflow-hidden flex items-center justify-center relative">
            {thumbnailType === 'icon' ? (
              <img
                src={thumbnail}
                alt={title}
                loading="lazy"
                className="w-16 h-16 object-contain opacity-50"
              />
            ) : (
              <img
                src={thumbnail}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
              />
            )}

            {/* Diagonal ribbon banner */}
            {badge && (
              <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none">
                <div
                  className="absolute top-[14px] right-[-22px] w-[140px] text-center rounded-full py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm"
                  style={{ backgroundColor: colors.from }}
                >
                  {badge}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className={`text-lg sm:text-xl font-serif text-[#3D3229] transition-colors duration-300 ${colors.hoverText}`}>
                {title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4a4238] line-clamp-2 mb-3">{subtitle}</p>

            {/* Description preview */}
            {description && (
              <p className="text-xs text-[#797065] line-clamp-2 mb-4 leading-relaxed">{description}</p>
            )}

            {/* Tool icons */}
            {tools.length > 0 && (
              <div className="flex items-center gap-3 mb-5">
                {tools.slice(0, 5).map((tool, i) => (
                  <img
                    key={i}
                    src={tool.icon}
                    alt={tool.name}
                    title={tool.name}
                    className="w-[18px] h-[18px] opacity-50 group-hover:opacity-85 group-hover:grayscale-20 transition-all duration-400"
                  />
                ))}
                {tools.length > 5 && (
                  <span className="text-[11px] text-[#797065]">+{tools.length - 5}</span>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#EDE7DD]">
              <Link
                to={`/projects/${slug}`}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[#5C4F3D] ${colors.hoverText} transition-colors`}
              >
                View Details
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {repoUrl && (
                <>
                  <span className="text-[#DDD5C9]">|</span>
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#6f685d] hover:text-[#5C4F3D] transition-colors font-medium"
                  >
                    <Github size={14} />
                    Repo
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
