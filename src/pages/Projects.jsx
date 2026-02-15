import { useEffect } from 'react'
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-1 sm:mb-2 text-center px-2 pb-16">
          Noteworthy <span className="text-blue-800">Projects</span>
        </h1>
        
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} {...project} index={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
