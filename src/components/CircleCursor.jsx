import { useState, useEffect } from 'react';

export default function CircleCursor({
  dotSize = 6,
  dotColor,
  ringSize = 32,
  ringColor,
  ringBorderWidth = 2,
  hoverScale = 1.5,
  clickScale = 0.75,
  animationDuration = 200,
  blendMode = "normal",
  opacity = 1,
  hideOnMobile = true,
  isDark = false  // Add isDark prop
}) {
  // Set colors based on dark mode
  const actualDotColor = dotColor || (isDark ? "#FFFFFF" : "#000000");
  const actualRingColor = ringColor || (isDark ? "#FFFFFF" : "#000000");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Only show on desktop devices if hideOnMobile is enabled
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile && hideOnMobile) return;

    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Apply to all elements
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(styleElement);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Use event delegation for link hover detection (avoids memory leak)
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setLinkHovered(true);
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setLinkHovered(false);
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.body.style.cursor = "auto";
      styleElement.remove();
    };
  }, [hideOnMobile]);

  // Hide on mobile if enabled
  if (typeof window !== "undefined") {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile && hideOnMobile) return null;
  }

  const currentScale = linkHovered ? hoverScale : clicked ? clickScale : 1;
  const transitionSpeed = `${animationDuration}ms`;

  return (
    <>
      {/* Dot */}
      <div
        className="circle-cursor-dot"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: actualDotColor,
          borderRadius: "50%",
          transform: `translate(${position.x - dotSize / 2}px, ${position.y - dotSize / 2}px)`,
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: blendMode,
          opacity: hidden ? 0 : opacity,
          transition: `opacity ${transitionSpeed} ease, background-color 300ms ease`
        }}
      />
      {/* Ring */}
      <div
        className="circle-cursor-ring"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          border: `${ringBorderWidth}px solid ${actualRingColor}`,
          borderRadius: "50%",
          transform: `translate(${position.x - ringSize / 2}px, ${position.y - ringSize / 2}px) scale(${currentScale})`,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: blendMode,
          opacity: hidden ? 0 : opacity,
          transition: `all ${transitionSpeed} ease, border-color 300ms ease`,
          backgroundColor: "transparent"
        }}
      />
    </>
  );
}