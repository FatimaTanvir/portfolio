import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─── Design project data ────────────────────────────────────────────────────
// images: drop your screenshot files into public/designs/ and list them here.
// Each array entry is a path like '/designs/ecommerce-1.png'.
// Up to 3 images show as a scattered phone stack per section.
const designs = [
  {
    id: 1,
    title: 'Hive Food Co. Internal Dashboard',
    context: 'In Progress',
    tagline: 'Designing for a fast-growing local brand one source of truth for their operations.',
    colorClass: 'bg-amber-400',
    textDark: true,
    coloredSide: 'left',
    images: ['/projects/Hive food Co./Mockup.gif'],
    link: { href: '#', label: 'Case Study coming soon' },
  },
  {
    id: 2,
    title: 'Pivot',
    context: 'Google UX Professional Certificate — Capstone',
    tagline: 'A mobile app that helps adults with ADHD start tasks, take real breaks, and actually come back.',
    colorClass: 'bg-blue-500',
    textDark: false,
    coloredSide: 'right',
    images: ['/projects/Pivot/Pivot Wireframes.png'],
    link: { href: '#', label: 'Case Study coming soon' },
  },
  {
    id: 3,
    title: 'UHD ACM Site Redesign',
    tagline: "Rebuilding a university tech organization's presence around their actual users.",
    colorClass: 'bg-zinc-900',
    textDark: false,
    coloredSide: 'left',
    images: ['/projects/UHDACM/Mockup.gif'],
    link: { href: '/designs/acm', label: 'View Case Study', internal: true },
  },
  {
    id: 4,
    title: 'WeBuild',
    tagline: 'A platform that helps students find the right teammates for hackathons and side projects. Users can browse profiles, filter by skills and experience level, and get matched with people who actually complement their stack.',
    colorClass: 'bg-[#7A3C84]',
    textDark: false,
    coloredSide: 'right',
    images: ['/projects/webuild/WeBuild Mockup.png'],
    link: { href: 'https://www.figma.com/design/sFw67CtcNdN9TdHmdjo8BY/WeBuild?node-id=0-1&t=tes7BgOaOWgHqXMa-1', label: 'View Figma File', internal: false },
  },
  {
    id: 5,
    title: 'Cookaroo',
    context: 'AmazonNext × CodePath Design Challenge - Summer 2025',
    tagline: 'Helping college students cook at home, starting from where they actually are.',
    colorClass: 'bg-[#D2551E]',
    textDark: false,
    coloredSide: 'left',
    images: ['/gifs/Cookaroo-Demo.gif'],
    link: { href: '/designs/cookaroo', label: 'View Case Study', internal: true },
  },
]

// ─── Image scatter ──────────────────────────────────────────────────────────
// Generic cards — no phone frame, works for any mockup shape
const SCATTER_TRANSFORMS = [
  { translateX: '-56px', translateY: '10px',  rotate: '-9deg', scale: '0.84', zIndex: 0 },
  { translateX: '0px',   translateY: '0px',   rotate: '-1deg', scale: '1',    zIndex: 2 },
  { translateX: '56px',  translateY: '8px',   rotate: '8deg',  scale: '0.88', zIndex: 1 },
]

function ImageScatter({ images }) {
  const single = images.length === 1
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {images.map((src, i) => {
        const t = SCATTER_TRANSFORMS[i] ?? SCATTER_TRANSFORMS[0]
        const transform = single
          ? 'none'
          : `translateX(${t.translateX}) translateY(${t.translateY}) rotate(${t.rotate}) scale(${t.scale})`
        return (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute max-h-[80%] w-auto object-contain transition-transform duration-500"
            style={{ transform, zIndex: t.zIndex }}
          />
        )
      })}
    </div>
  )
}

// ─── Individual section ─────────────────────────────────────────────────────
function DesignSection({ title, context, tagline, colorClass, textDark, coloredSide, images, link }) {
  const isComingSoon = !link?.internal && link?.href === '#'
  const LinkEl = link?.internal ? Link : 'a'
  const linkProps = link?.internal
    ? { to: link.href }
    : isComingSoon
      ? { href: '#', onClick: (e) => e.preventDefault() }
      : { href: link?.href, target: '_blank', rel: 'noopener noreferrer' }
  const isLeft = coloredSide === 'left'
  const textBase = textDark ? 'text-gray-900' : 'text-white'
  const contextText = textDark ? 'text-gray-500' : 'text-white/50'
  const taglineText = textDark ? 'text-gray-700' : 'text-white/80'
  const btnStyle = textDark
    ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
    : 'border-white text-white hover:bg-white hover:text-gray-900'

  const clipPath = isLeft
    ? 'polygon(0 0, 100% 0, 92% 100%, 0 100%)'
    : 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)'

  const coloredBlock = (
    <div
      className={`${colorClass} h-full flex items-center transition-[filter] duration-500 group-hover:brightness-[1.06]`}
      style={{ clipPath }}
      data-cursor="dark"
    >
      <div
        className={`flex flex-col justify-center h-full transition-transform duration-500 group-hover:translate-y-[-4px]
          ${isLeft ? 'pl-10 sm:pl-16 lg:pl-20 pr-16 sm:pr-24' : 'pl-24 sm:pl-32 lg:pl-36 pr-10 sm:pr-16 lg:pr-20'}`}
      >
        {context && (
          <p className={`text-[10px] uppercase tracking-widest font-medium mb-2 ${contextText}`}>{context}</p>
        )}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display mb-3 leading-tight ${textBase}`}>
          {title}
        </h2>
        {tagline && (
          <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isLeft ? 'max-w-md' : 'max-w-lg'} ${taglineText}`}>{tagline}</p>
        )}
        {link && (
          <LinkEl
            {...linkProps}
            className={`self-start border rounded-full px-5 py-2 text-xs font-medium transition-colors ${btnStyle} ${isComingSoon ? 'opacity-50 cursor-default' : ''}`}
          >
            {link.label}
          </LinkEl>
        )}
      </div>
    </div>
  )

  const imagesBlock = (
    <div className="h-full flex items-center justify-center overflow-hidden py-6">
      <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.07]">
        <ImageScatter images={images} placeholderColor={colorClass} />
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop: side-by-side */}
      <section
        className="group hidden md:grid h-[400px] lg:h-[440px] overflow-hidden cursor-pointer"
        style={{ gridTemplateColumns: isLeft ? '2fr 2fr' : '2fr 2fr' }}
      >
        {isLeft ? (
          <>{coloredBlock}{imagesBlock}</>
        ) : (
          <>{imagesBlock}{coloredBlock}</>
        )}
      </section>

      {/* Mobile: image on top, text block below */}
      <section className="md:hidden overflow-hidden">
        <div className="bg-white h-56 relative flex items-center justify-center rounded-b-3xl overflow-hidden">
          <ImageScatter images={images} placeholderColor={colorClass} />
        </div>
        <div className={`${colorClass} pt-10 pb-12 px-10 flex flex-col`} data-cursor="dark">
          {context && <p className={`text-[10px] uppercase tracking-widest font-medium mb-2 ${contextText}`}>{context}</p>}
          <h2 className={`text-2xl font-display mb-2 leading-tight ${textBase}`}>{title}</h2>
          {tagline && <p className={`text-xs mb-5 leading-relaxed ${taglineText}`}>{tagline}</p>}
          {link && (
            <LinkEl
              {...linkProps}
              className={`self-start border rounded-full px-5 py-2 text-xs font-medium transition-colors ${btnStyle} ${isComingSoon ? 'opacity-50 cursor-default' : ''}`}
            >
              {link.label}
            </LinkEl>
          )}
        </div>
      </section>
    </>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Designs() {
  useEffect(() => { document.title = 'Designs | Fatima Tanvir' }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center px-4 pt-4 sm:pt-6 pb-8 sm:pb-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display text-center leading-tight mb-3">
          Design work.
        </h1>
        <p className="text-sm sm:text-base text-gray-500 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Every project starts with a problem. Here's how I solved them.
        </p>
      </div>
      <div className="flex-1 pb-20 pt-10 space-y-12">
        {designs.map((d) => (
          <DesignSection key={d.id} {...d} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
