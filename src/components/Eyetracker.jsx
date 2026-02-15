import { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const EyeTracker = ({ isDark }) => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    if (!isDark) return;

    const handleMouseMove = (e) => {
      const eyes = [leftEyeRef.current, rightEyeRef.current];
      
      eyes.forEach((eye) => {
        if (!eye) return;
        
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        
        // Angle from eye center to cursor
        const deltaX = e.clientX - eyeX;
        const deltaY = e.clientY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);
        
        // Constrain pupil movement within radius
        const movementRadius = 8;
        const x = Math.cos(angle) * movementRadius;
        const y = Math.sin(angle) * movementRadius;
        
        const pupil = eye.querySelector(".pupil");
        if (pupil) {
          pupil.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDark]);

  return (
    <>
      {/* Dark Overlay */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-40"
            style={{ pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>

      {/* Eyes */}
      <AnimatePresence>
        {isDark && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            <div className="flex gap-6">
              {/* Left Eye */}
              <div
                ref={leftEyeRef}
                className="relative bg-white rounded-full flex items-center justify-center"
                style={{ width: '35px', height: '50px' }}
              >
                <div 
                  className="pupil bg-black rounded-full transition-transform duration-100 ease-out relative"
                  style={{ width: '30px', height: '30px' }}
                >
                  {/* White highlight dot */}
                  <div 
                    className="absolute bg-white rounded-full" 
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      bottom: '8px', 
                      right: '8px' 
                    }} 
                  />
                </div>
              </div>

              {/* Right Eye */}
              <div
                ref={rightEyeRef}
                className="relative bg-white rounded-full flex items-center justify-center"
                style={{ width: '35px', height: '50px' }}
              >
                <div 
                  className="pupil bg-black rounded-full transition-transform duration-100 ease-out relative"
                  style={{ width: '30px', height: '30px' }}
                >
                  <div 
                    className="absolute bg-white rounded-full" 
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      bottom: '8px', 
                      right: '8px' 
                    }} 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EyeTracker;