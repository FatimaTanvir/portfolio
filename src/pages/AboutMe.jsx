import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Instagram, Linkedin, Paperclip } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}


const skills = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
  { name: 'Ros', icon: 'https://cdn.simpleicons.org/ros' },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },

];

export default function AboutMe() {
  useEffect(() => { document.title = "About | Fatima Tanvir" }, [])

  return (
    <div className="h-screen overflow-hidden bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">

        <motion.div
          // variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="absolute left-4 sm:left-6 md:left-8 lg:left-20 top-0 bottom-0 w-[24%] flex flex-col justify-start py-24"
        >
          <h2
            className="text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[1.05] tracking-tight text-gray-800 "
            style={{ fontFamily: "'Squada One', 'Montserrat', sans-serif" }}
          >
            Developer<br />
            Designer<br />
            Researcher
          </h2>
          <div className="items-start flex flex-col gap-4 sm:gap-6 md:gap-4 text-gray-400 mb-2 md:mb-3 lg:mb-4 pt-10">
  <span className="text-sm text-gray-500 font-bold">Expertise</span>

  {skills.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-3"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-5 h-5"
      />
      <span className="text-sm font-medium hover:text-gray-600  text-gray-400">
        {skill.name}
      </span>
    </div>
  ))}
</div>

        </motion.div>

        <motion.div
          // variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="absolute bottom-0 flex items-end justify-center"
          style={{ left: '18%', right: '28%', height: '100%' }}
        >
          <img
            src="/AboutMe.png"
            alt="Fatima Tanvir"
            className="w-auto object-contain object-bottom"
            style={{ height: '90%', maxHeight: '90%' }}
          />
        </motion.div>

        
        <motion.div
          //variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="absolute right-4 sm:right-6 md:right-8 lg:right-20 top-0 bottom-0 w-[29%] flex flex-col justify-center"
        >
          <p
            className="text-md lg:text-md text-black leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Howdy! I'm a user-focused full stack developer and designer from Houston, TX.
          </p>
          <p
            className="text-md lg:text-md text-black leading-relaxed mt-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Academically, I am a recent graduate from the University of Houston-Downtown
            in Computer Science with minors in Data Science and Mathematics.
            Looking for my first real role in software dev.
          </p>
          <p
            className="text-md lg:text-md text-black leading-relaxed mt-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            When I'm not online, I can be found training for my next race (if I'm not injured),
            journaling, having matcha with a friend, or learning random new things.
          </p>
          
          <div className="items-left flex flex-col gap-4 sm:gap-8 md:gap-3 text-gray-400 mb-2 md:mb-3 lg:mb-4 pt-10">
            <span className="text-sm text-gray-500 font-bold">Contacts</span>
            <a href="mailto:fatimatanvir80@gmail.com" aria-label="Email" className="flex items-center gap-3 hover:text-gray-600 transition-colors"><Mail size={16}/><span className="text-sm">fatimatanvir80@gmail.com</span></a>
            <a href="https://www.instagram.com/iamfatimatanvir/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-3 hover:text-gray-600 transition-colors"><Instagram size={16}/><span className="text-sm">Instagram</span></a>
            <a href="https://www.linkedin.com/in/fatimaatanvir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-3 hover:text-gray-600 transition-colors"><Linkedin size={16}/><span className="text-sm">linkedin</span></a>
            <a href="https://drive.google.com/file/d/1-YSLSFpyreTIDwHI4SDFM-f2rJ38YBSc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-600 transition-colors"><Paperclip size={16}/><span className="text-sm">resume</span></a>
          </div>
        </motion.div>


        {/* MATCHA — bottom right, wiggle + border */}
        {/* <motion.div
          initial={{ rotate: 4 }}
          animate={{ rotate: [4, -4, 4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 right-4 sm:right-6 md:right-8 lg:right-20"
          style={{ zIndex: 10 }}
        >
          <img
            src="/Matcha.png"
            alt="Matcha"
            className="w-16 md:w-20 lg:w-24 object-contain rounded-sm"
          />
        </motion.div>

        <motion.div
          initial={{ rotate: 3 }}
          animate={{ rotate: [8, -8, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-24 right-4 sm:right-6 md:right-8 lg:right-40"
          style={{ zIndex: 10 }}
        >
          <img
            src="/Matcha.png"
            alt="Matcha"
            className="w-14 md:w-16 lg:w-20 object-contain rounded-sm"
          />
        </motion.div> */}

      </main>
      {/* <Footer /> */}
    </div>
  )
}
