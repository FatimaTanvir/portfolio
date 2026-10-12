import { cn } from '../lib/utils'

export function ThreeDMarquee({ images, className }) {
  const cols = 3
  // Fill each column by cycling through images (so any number of source images works)
  const colLength = Math.max(4, Math.ceil(images.length / 2))
  const columns = Array.from({ length: cols }, (_, ci) =>
    Array.from({ length: colLength }, (_, i) => images[(ci * 2 + i) % images.length])
  )

  return (
    <>
      <style>{`
        @keyframes marquee-up {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(0, -50%, 0); }
        }
        @keyframes marquee-down {
          from { transform: translate3d(0, -50%, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .marquee-card { width: 420px; height: 280px; }
        @media (min-width: 1024px) { .marquee-card { width: 520px; height: 346px; } }
        @media (min-width: 1280px) { .marquee-card { width: 600px; height: 400px; } }
        @media (min-width: 1536px) { .marquee-card { width: 680px; height: 453px; } }
      `}</style>

      <div className={cn('overflow-hidden', className)} style={{ perspective: '1000px' }}>
        <div
          style={{
            transform: 'rotateX(20deg) rotateZ(-12deg) scale(0.9)',
            display: 'flex',
            gap: '12px',
            width: 'max-content',
          }}
        >
          {columns.map((col, ci) => {
            const doubled = [...col, ...col]
            const isOdd = ci % 2 !== 0
            return (
              <div
                key={ci}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  animation: `${isOdd ? 'marquee-down' : 'marquee-up'} ${28 + ci * 4}s linear infinite`,
                  willChange: 'transform',
                }}
              >
                {doubled.map((src, i) => (
                  <div
                    key={i}
                    className="marquee-card"
                    style={{
                      flexShrink: 0,
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: '#2e3c1c',
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.style.opacity = '0' }}
                    />
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
