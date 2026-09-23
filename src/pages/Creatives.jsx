import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CircularCarousel from '../components/CircularCarousel'
import Footer from '../components/Footer'

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

export default function Creatives() {
  useEffect(() => { document.title = "Creatives | Fatima Tanvir" }, [])
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Beyond the screen */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-10 pb-12">
        <FadeUp delay={0}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-center mb-8 pt-4" style={{ fontFamily: "'Squada One', sans-serif" }}>
            Beyond the <span className="text-blue-800">screen</span>
          </h1>
        </FadeUp>
        <FadeUp delay={100}>
          <p className="text-sm sm:text-base text-gray-700 text-center mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            I live by <strong>改善</strong> (<strong>Kaizen</strong>): the idea that every day you can be a little better than yesterday. That mindset bleeds into everything I do, on and off the screen.
          </p>
        </FadeUp>
        <FadeUp delay={200}>
          <div className="rounded-3xl overflow-hidden bg-[#B34C2A] max-w-3xl mx-auto max-h-[420px]">
            <img src="/about/hobbies.webp" alt="Hobbies" className="w-full object-cover object-top" />
          </div>
        </FadeUp>
        <FadeUp delay={300}>
          <p className="text-sm sm:text-base text-gray-600 text-center mt-5 sm:whitespace-nowrap mx-auto px-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            "I think the best designers are curious about everything, not just screens."

          </p>
        </FadeUp>
      </div>

      {/* Creative work */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-[1600px] mx-auto pt-4">
        <FadeUp delay={0}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-1 sm:mb-2 text-center px-2 pt-4 pb-2" style={{ fontFamily: "'Squada One', sans-serif" }}>
            I like to <span className="text-blue-800">get creative</span>, and <span className="text-green-700">make things</span>.
          </h2>
        </FadeUp>
        <FadeUp delay={100}>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mb-0 sm:mb-2 text-center px-2">
            Here are a few pieces from crocheting, clay art, and lego builds.
          </p>
        </FadeUp>

        <div className="w-full sm:-mt-6 md:-mt-10">
          <CircularCarousel />
        </div>
      </div>

      {/* Process text */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-12">
        <FadeUp delay={0}>
          <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Making things with my hands is how I decompress. Whether it's building a Lego set piece by piece, shaping something out of clay, or figuring out a crochet pattern, there's something grounding about the process of creating something tangible. It's the same problem-solving muscle, just in a different medium.
          </p>
        </FadeUp>
      </div>

      {/* Lego Builds */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-4 pb-12 max-w-[1600px] mx-auto w-full">
        <FadeUp delay={0}>
          <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-normal text-center mb-8 py-4" style={{ fontFamily: "'Squada One', sans-serif" }}>
            Lego <span className="text-yellow-500">Builds</span>
          </h2>
        </FadeUp>
        <div className="max-w-5xl mx-auto columns-2 sm:columns-3 gap-3 sm:gap-4 xl:gap-6">
          {[
            { src: '/legos/Pink&White.jpg', alt: 'Pink & White Pant Set', delay: 0 },
            { src: '/legos/Porche.jpg', alt: 'Most Expensive RAHH', delay: 100 },
            { src: '/legos/Lamborgini.jpg', alt: 'First ever', delay: 200 },
            { src: '/legos/Wall E.jpg', alt: 'Wall E', delay: 0 },
            { src: '/legos/Sunflowers.png', alt: 'Most recent', delay: 100 },
            { src: '/legos/Tokyo.jpg', alt: 'Tokyo Skyline', delay: 200 },
          ].map((img, i) => (
            <div key={i} className="mb-3 sm:mb-4 break-inside-avoid">
              <FadeUp delay={img.delay}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center pb-16 pt-4">
        <FadeUp delay={0}>
          <Link
            to="/designs"
            onClick={() => window.scrollTo(0, 0)}
            className="px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Curious about my design work? Check it out →
          </Link>
        </FadeUp>
      </div>

      <Footer />
    </div>
  )
}
