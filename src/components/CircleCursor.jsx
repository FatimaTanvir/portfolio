import { useState, useEffect } from 'react';

function getBgColor(x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;
  let node = el;
  while (node && node !== document.documentElement) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      const parts = bg.match(/[\d.]+/g);
      // skip fully transparent
      if (parts && (parts.length < 4 || parseFloat(parts[3]) > 0)) return bg;
    }
    node = node.parentElement;
  }
  return 'rgb(255,255,255)';
}

function isDark(color) {
  const m = color.match(/[\d.]+/g);
  if (!m || m.length < 3) return false;
  const [r, g, b] = [+m[0], +m[1], +m[2]];
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

export default function CircleCursor({
  dotSize = 6,
  ringSize = 32,
  ringBorderWidth = 2,
  hoverScale = 1.5,
  clickScale = 0.75,
  animationDuration = 100,
  opacity = 1,
  hideOnMobile = true,
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile && hideOnMobile) return;

    document.body.style.cursor = 'none';
    const styleEl = document.createElement('style');
    styleEl.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(styleEl);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      const bg = getBgColor(e.clientX, e.clientY);
      if (bg) setOnDark(isDark(bg));
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseOver = (e) => { if (e.target.closest('a, button, [role="button"]')) setLinkHovered(true); };
    const onMouseOut = (e) => { if (e.target.closest('a, button, [role="button"]')) setLinkHovered(false); };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.style.cursor = 'auto';
      styleEl.remove();
    };
  }, [hideOnMobile]);

  if (typeof window !== 'undefined') {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile && hideOnMobile) return null;
  }

  const color = onDark ? 'white' : 'black';
  const currentScale = linkHovered ? hoverScale : clicked ? clickScale : 1;
  const speed = `${animationDuration}ms`;

  return (
    <>
      <div
        style={{
          position: 'fixed', left: 0, top: 0,
          width: `${dotSize}px`, height: `${dotSize}px`,
          backgroundColor: color,
          borderRadius: '50%',
          transform: `translate(${position.x - dotSize / 2}px, ${position.y - dotSize / 2}px)`,
          pointerEvents: 'none', zIndex: 10000,
          opacity: hidden ? 0 : opacity,
          transition: `opacity ${speed} ease, background-color 120ms ease`,
        }}
      />
      <div
        style={{
          position: 'fixed', left: 0, top: 0,
          width: `${ringSize}px`, height: `${ringSize}px`,
          border: `${ringBorderWidth}px solid ${color}`,
          borderRadius: '50%',
          transform: `translate(${position.x - ringSize / 2}px, ${position.y - ringSize / 2}px) scale(${currentScale})`,
          pointerEvents: 'none', zIndex: 9999,
          opacity: hidden ? 0 : opacity,
          transition: `all ${speed} ease, border-color 120ms ease`,
          backgroundColor: 'transparent',
        }}
      />
    </>
  );
}
