import { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  useEffect(() => { document.title = "Projects | Fatima Tanvir" }, [])
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-1 sm:mb-2 text-center px-2 pb-8 sm:pb-10">
          Noteworthy <span className="text-[#bd6a16]">Projects</span>
        </h1>

      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-12 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} {...project} index={i} />
          ))}

          {/* "More coming soon" placeholder to fill the grid?
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projects.length * 0.08 }}
            className="rounded-xl border-2 border-dashed border-[#887c6a] flex flex-col items-center justify-center min-h-[280px] text-center p-8"
          >
            <span className="text-3xl mb-3">💻</span>
            <p className="text-sm font-display text-[#000000]">More coming soon...</p>
            <p className="text-[11px] text-[#38250b] mt-1">Always building something new</p>
          </motion.div> */}
        </div>
      </div>

      <Footer />
    </div>
  )
}
