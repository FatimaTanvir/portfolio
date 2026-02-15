import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'

export default function ProjectCard({ slug, title, subtitle, thumbnail, thumbnailType = 'image', tools = [], repo, link, index = 0, inProgress = false }) {
  const repoUrl = repo || (link && link.repo);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // ±8° tilt — subtle but noticeable
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ perspective: '800px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white border border-gray-100 duration-200"
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-gray-50 overflow-hidden flex items-center justify-center">
          {thumbnailType === 'icon' ? (
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-16 h-16 object-contain opacity-60"
            />
          ) : (
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg sm:text-xl font-serif">{title}</h3>
            {inProgress && (
              <span className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 whitespace-nowrap">
                In Progress
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 mb-3">{subtitle}</p>

          {/* Tool icons */}
          {tools.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              {tools.slice(0, 5).map((tool, i) => (
                <img
                  key={i}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  className="w-4 h-4 opacity-40 grayscale"
                />
              ))}
              {tools.length > 5 && (
                <span className="text-xs text-gray-300">+{tools.length - 5}</span>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <Link
              to={`/projects/${slug}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 hover:text-black transition-colors font-medium"
            >
              View Details
              <ArrowRight size={14} />
            </Link>

            {repoUrl && (
              <>
                <span className="text-gray-200">|</span>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 hover:text-black transition-colors font-medium"
                >
                  <Github size={14} />
                  GitHub Repo
                </a>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
