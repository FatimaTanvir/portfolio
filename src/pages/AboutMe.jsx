import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
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
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function MagneticButton({ href, target, rel, className, children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.35
    const y = (e.clientY - r.top - r.height / 2) * 0.35
    el.style.transition = 'transform 0.1s ease'
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const onLeave = () => {
    ref.current.style.transition = 'transform 0.4s ease'
    ref.current.style.transform = 'translate(0, 0)'
  }
  return (
    <a ref={ref} href={href} target={target} rel={rel}
      className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  )
}

export default function AboutMe() {
  useEffect(() => { document.title = 'About | Fatima Tanvir' }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      {/* Mobile */}
      <main className="flex md:hidden flex-col flex-1 px-6 pt-2 gap-8 overflow-y-auto">
        <img src="/about/fatima-grad.webp" alt="Fatima Tanvir" className="w-full max-w-xs mx-auto object-cover rounded-[2rem] shadow-2xl" />
        <h2 className="text-3xl font-normal text-black" style={{ fontFamily: "'Squada One', sans-serif" }}>Get to know me.</h2>
        <div className="flex flex-col gap-5 text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <p className="text-sm leading-relaxed">Having grown up between Johannesburg, Lahore, and Houston, I bring a global lens to every problem I take on. That diverse background has shaped how I connect with people across different contexts, cultures, and perspectives; which turns out to be a superpower when your passion is to understand users.</p>
          <p className="text-sm leading-relaxed">I started on the engineering side with an undergraduate background in Computer Science and Mathematics: building systems, co-authoring research on robotics and sleep science, solving hard technical problems. But I kept hitting the same wall, the hardest part was never the code. It was making it make sense for the person using it. The Google UX Professional Certification is what really clicked for me; it gave me the tools to actually study users, map how they think, and let real findings drive what I build.</p>
          <p className="text-sm leading-relaxed">What I love most about being a UX Design Engineer is collaborating with others to create products that actually make a difference. I enjoy blending creativity and coding as it helps me bridge the gap between design and engineering, and speak both languages when working across teams.</p>
          <p className="text-sm leading-relaxed">When I'm not online, you'll find me training for my next race (if I'm not injured), boxing, or making Hojicha for a friend. Feel free to explore my portfolio and learn more about my journey so far.</p>
        </div>
        <div className="flex gap-3 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <a href="https://drive.google.com/file/d/12Q6qwtyPIwyoS9ieF3p5yD3oTjOWUeJO/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">Resume</a>
          <a href="https://www.linkedin.com/in/fatimaatanvir/" target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-black text-black text-sm font-medium hover:bg-gray-50 transition-colors">LinkedIn</a>
        </div>
        <div className="flex flex-col items-center pb-4">
          <img src="/gifs/plants.gif" alt="plants" className="w-40 object-contain" />
        </div>
      </main>

      {/* Desktop */}
      <main className="hidden md:flex flex-1 items-start gap-16 lg:gap-24 px-8 lg:px-16 xl:px-24 pt-16 pb-0 max-w-screen-xl mx-auto w-full">

        {/* Left: bio */}
        <div className="flex flex-col gap-6 flex-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <FadeUp delay={0}>
            <h2 className="text-4xl lg:text-5xl font-normal text-black" style={{ fontFamily: "'Squada One', sans-serif" }}>
              Get to know me.
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-[0.95rem] lg:text-[1.05rem] text-black leading-relaxed">
              Having grown up between Johannesburg, Lahore, and Houston, I bring a global lens to every problem I take on. That diverse background has shaped how I connect with people across different contexts, cultures, and perspectives; which turns out to be a superpower when your passion is to understand users.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[0.95rem] lg:text-[1.05rem] text-black leading-relaxed">
              I started on the engineering side with an undergraduate background in Computer Science and Mathematics: building systems, co-authoring research on robotics and sleep science, solving hard technical problems. But I kept hitting the same wall, the hardest part was never the code. It was making it make sense for the person using it. The Google UX Professional Certification is what really clicked for me; it gave me the tools to actually study users, map how they think, and let real findings drive what I build.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="text-[0.95rem] lg:text-[1.05rem] text-black leading-relaxed">
              What I love most about being a UX Design Engineer is collaborating with others to create products that actually make a difference. I enjoy blending creativity and coding as it helps me bridge the gap between design and engineering, and speak both languages when working across teams.
            </p>
          </FadeUp>
        </div>

        {/* Right: photo + buttons */}
        <div className="flex-shrink-0 w-80 lg:w-96 xl:w-[420px] self-start mt-4 flex flex-col items-center gap-3">
          <img
            src="/about/fatima-grad.webp"
            alt="Fatima Tanvir"
            className="w-full object-cover rounded-[2.5rem] shadow-2xl"
          />
          <div className="pt-5 flex gap-3 justify-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <MagneticButton
              href="https://drive.google.com/file/d/12Q6qwtyPIwyoS9ieF3p5yD3oTjOWUeJO/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >Resume</MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/fatimaatanvir/"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-black text-black text-sm font-medium hover:bg-gray-50 transition-colors"
            >LinkedIn</MagneticButton>
          </div>
        </div>
      </main>

      {/* Spanning paragraph */}
      <FadeUp delay={400}>
        <div className="hidden md:block px-8 lg:px-16 xl:px-24 pt-6 pb-12 max-w-screen-xl mx-auto w-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <p className="text-[0.95rem] lg:text-[1.05rem] text-black leading-relaxed">
            When I'm not online, you'll find me training for my next race (if I'm not injured), boxing, or making Hojicha for a friend. Feel free to explore my portfolio and learn more about my journey so far.
          </p>
        </div>
      </FadeUp>

      {/* ── Desk Setup + Plants ──────────────────────────────────── */}
      <section className="py-12 px-4 lg:px-8 xl:px-12 max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <a href="https://youtu.be/TyHQDUdiljc" target="_blank" rel="noopener noreferrer" className="block cursor-pointer flex-1">
            <img src="/about/desk-setup.webp" alt="Current desk setup" className="w-full object-contain transition-opacity hover:opacity-90" />
          </a>
          <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
            <img
              src="/plants-static.png"
              alt="plants"
              className="w-72 object-contain"
              onMouseEnter={e => { e.currentTarget.src = '/gifs/plants.gif' }}
              onMouseLeave={e => { e.currentTarget.src = '/plants-static.png' }}
            />
            <span className="text-xs text-gray-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hover to bust a move :)</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
