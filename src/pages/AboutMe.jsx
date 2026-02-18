import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Instagram, Linkedin, Paperclip } from 'lucide-react'

const contactLink = "flex items-center gap-3 hover:text-gray-600 transition-colors group"
const contactText = "text-sm [text-decoration-thickness:2px] [text-underline-offset:3px] group-hover:underline group-hover:[text-decoration-style:double]"

export default function AboutMe() {
  useEffect(() => { document.title = "About | Fatima Tanvir" }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col md:h-screen md:overflow-hidden">
      <Navbar />

      {/*MOBILE layout*/}
      <main className="flex md:hidden flex-col flex-1 px-6 pt-8 overflow-y-auto">
        <h2
          className="text-[clamp(2.8rem,14vw,4.5rem)] ml-4 leading-[1.05] tracking-tight text-gray-800"
          style={{ fontFamily: "'Squada One', 'Montserrat', sans-serif" }}
        >
          Developer<br />
          Designer<br />
          Leader
        </h2>

        <img src="/AboutMe.svg" alt="Fatima Tanvir" className="w-full max-w-xs mx-auto object-contain my-6" />

        <div className="flex flex-col gap-4 text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <p className="text-md ml-4 leading-relaxed">
            Howdy! I'm a user-focused full stack developer and designer from Houston, TX.
          </p>
          <p className="text-md ml-4 leading-relaxed">
            Academically, I am a recent graduate from the University of Houston-Downtown
            in Computer Science with minors in Data Science and Mathematics.
            Looking for my first real role in software dev.
          </p>
          <p className="text-md ml-4 leading-relaxed">
            When I'm not online, I can be found training for my next race (if I'm not injured),
            journaling, having matcha with a friend, or learning whatever's caught my interest that week.
          </p>
        </div>
        <div className="flex justify-end pb-2">
          <img src="/plants.gif" alt="plants" className="w-40 object-contain" />
        </div>
        <div className="mt-auto">
          <Footer/>
        </div>
      </main>

      {/*DESKTOP / TABLET layout*/}
      <main className="hidden md:flex flex-1 relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">

        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-20 top-0 bottom-0 w-[24%] flex flex-col justify-start py-24">
          <h2
            className="text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[1.05] tracking-tight text-gray-800"
            style={{ fontFamily: "'Squada One', 'Montserrat', sans-serif" }}
          >
            Developer<br />
            Designer<br />
            Leader
          </h2>
          <div className="items-left flex flex-col gap-4 sm:gap-8 md:gap-3 text-gray-400 mb-2 md:mb-3 lg:mb-4 pt-20">
            <span className="text-sm text-gray-500 font-bold">Contacts</span>
            <a href="mailto:fatimatanvir80@gmail.com" aria-label="Email" className={contactLink}><Mail size={16}/><span className={contactText}>fatimatanvir80@gmail.com</span></a>
            <a href="https://www.instagram.com/iamfatimatanvir/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={contactLink}><Instagram size={16}/><span className={contactText}>Instagram</span></a>
            <a href="https://www.linkedin.com/in/fatimaatanvir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={contactLink}><Linkedin size={16}/><span className={contactText}>linkedin</span></a>
            <a href="https://drive.google.com/file/d/1-YSLSFpyreTIDwHI4SDFM-f2rJ38YBSc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={contactLink}><Paperclip size={16}/><span className={contactText}>resume</span></a>
          </div>
        </div>

        <div className="absolute bottom-0 flex items-end justify-center" style={{ left: '18%', right: '28%', height: '100%' }}>
          <img
            src="/AboutMe.svg"
            alt="Fatima Tanvir"
            className="w-auto object-contain object-bottom"
            style={{ height: '90%', maxHeight: '90%' }}
          />
        </div>

        <div className="absolute right-4 sm:right-6 md:right-8 lg:right-20 top-8 bottom-0 w-[29%] flex flex-col justify-center">
          <p className="text-md lg:text-md text-black leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Howdy! I'm a user-focused full stack developer and designer from Houston, TX.
          </p>
          <p className="text-md lg:text-md text-black leading-relaxed mt-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Academically, I am a recent graduate from the University of Houston-Downtown
            in Computer Science with minors in Data Science and Mathematics.
            Looking for my first real role in software dev.
          </p>
          <p className="text-md lg:text-md text-black leading-relaxed mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            When I'm not online, I can be found training for my next race (if I'm not injured),
            journaling, having matcha with a friend, or learning whatever's caught my interest that week.
          </p>
          <div className="flex justify-end pt-12">
            <img src="/plants.gif" alt="plants" className="w-48 object-contain" />
          </div>
        </div>

      </main>
    </div>
  )
}
