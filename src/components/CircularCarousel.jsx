import { useState, useRef, useEffect, useCallback } from 'react';

// Smoothly interpolate a value between min and max based on window width
function lerp(minWidth, maxWidth, minVal, maxVal, width) {
  const clamped = Math.min(Math.max(width, minWidth), maxWidth);
  const t = (clamped - minWidth) / (maxWidth - minWidth);
  return minVal + t * (maxVal - minVal);
}

function getResponsiveValues(width) {
  return {
    radius:      Math.round(lerp(320, 1440, 150, 520, width)),
    itemWidth:  Math.round(lerp(320, 1440, 80, 210, width)),
    itemHeight: Math.round(lerp(320, 1440, 80, 170, width)),
    perspective: Math.round(lerp(320, 1440, 700, 1800, width)),
    tiltAngle:   lerp(320, 1440, -6, -10, width),
  };
}

// Hook that smoothly scales carousel values based on window width
function useResponsiveValues() {
  const [values, setValues] = useState(() => getResponsiveValues(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setValues(getResponsiveValues(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return values;
}

export default function CircularCarousel({
  images = [],
  autoRotateSpeed = 0.1,
}) {
  const { radius, itemWidth, itemHeight, perspective, tiltAngle } = useResponsiveValues();
  // Default images if none provided
  const defaultImages = [
    { src: 'https://i.pinimg.com/736x/98/67/87/986787f6c551fc3af5c584a36726b171.jpg', alt: 'Bread Bowl' },
    { src: 'https://i.pinimg.com/1200x/ff/a2/c7/ffa2c7f80ba18fead98a30837b795fb8.jpg', alt: 'Cup' },
    { src: 'https://i.pinimg.com/736x/3e/a9/3a/3ea93abf102b77997303a5e0e965d00f.jpg', alt: 'Luffy Key Chain Holder' },
    { src: 'https://i.pinimg.com/736x/86/9e/ad/869eadb4e7752a458e9ca663dba6032e.jpg', alt: 'Japanese mini bowl' },
    { src: 'https://i.pinimg.com/1200x/69/97/46/69974696b73d77927aa13932cfc55865.jpg', alt: 'Glasses holder' },
    { src: 'https://i.pinimg.com/736x/e2/d7/5d/e2d75d5b6bb328bdcc0b7e0faa990620.jpg', alt: 'jewelry tray'},
    { src: 'https://i.pinimg.com/736x/1a/bb/5b/1abb5b63d5e596dfa2c4c5c0be19c31d.jpg', alt: 'Spidey Beanie' },
    { src: 'https://i.pinimg.com/736x/38/b5/dd/38b5dd4ebe51592a4cf5783638fb5323.jpg', alt: 'We Bear Bears' },
    { src: 'https://i.pinimg.com/736x/ef/ec/23/efec23ef2a6d772130ffd4f6ba6e9fe1.jpg', alt: 'Mr. & Mrs. Teddy'},

  ];

  const items = images.length > 0 ? images : defaultImages;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const rotationRef = useRef(0);
  const innerRef = useRef(null);
  const rafRef = useRef(null);
  const hoveredRef = useRef(null);
  const autoRotateSpeedRef = useRef(autoRotateSpeed);

  // Keep refs in sync with state/props
  useEffect(() => {
    hoveredRef.current = hoveredIndex;
  }, [hoveredIndex]);
  useEffect(() => {
    autoRotateSpeedRef.current = autoRotateSpeed;
  }, [autoRotateSpeed]);

  // Scoped pointer events: only start drag on the carousel container
  const handlePointerDown = useCallback((e) => {
    dragging.current = true;
    setIsDragging(true);
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    velocity.current = dx * 0.5;
    rotationRef.current += dx * 0.5;
  }, []);

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
    setIsDragging(false);
  }, []);

  // Single RAF loop: handles inertia + auto-rotation via direct DOM manipulation
  useEffect(() => {
    function animate() {
      if (!dragging.current) {
        // Apply inertia
        if (Math.abs(velocity.current) > 0.01) {
          rotationRef.current += velocity.current;
          velocity.current *= 0.94;
        }
        // Auto-rotate when not hovered
        if (hoveredRef.current === null) {
          rotationRef.current += autoRotateSpeedRef.current;
        }
      }
      // Direct DOM update - no React re-render needed
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const angleStep = 360 / items.length;

  return (
    <div
      className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[62vh] flex items-center justify-center overflow-visible relative select-none"
      role="region"
      aria-label="Creative works carousel"
      style={{
        perspective: `${perspective}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        ref={innerRef}
        className="w-full h-full absolute"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {items.map((img, i) => (
          <div
            key={img.alt || i}
            className="absolute left-1/2 top-1/2 rounded-2xl overflow-hidden shadow-2xl bg-white"
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              marginLeft: `-${itemWidth / 2}px`,
              marginTop: `-${itemHeight / 2}px`,
              transform: `rotateY(${angleStep * i}deg) translateZ(${radius}px) rotateX(${tiltAngle}deg)`,
              transformStyle: 'preserve-3d',
            }}
            onPointerEnter={() => setHoveredIndex(i)}
            onPointerLeave={() => setHoveredIndex(null)}
          >
            <img
              src={img.src}
              alt={img.alt || `Item ${i + 1}`}
              draggable={false}
              loading="lazy"
              className="w-full h-full object-cover pointer-events-none"
            />
            {hoveredIndex === i && (
              <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm px-2 py-1.5 text-white text-xs text-center font-medium transition-opacity">
                {img.alt || `Item ${i + 1}`}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 sm:bottom-2 md:bottom-1 left-1/2 -translate-x-1/2 text-center text-xs sm:text-sm text-gray-700 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
        Drag to rotate • Auto-spinning
      </div>
    </div>
  );
}
