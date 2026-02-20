import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import { projectExtras } from '../data/projectExtras'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectShowcase from '../components/ProjectShowcase'

export default function ProjectDetail() {
  const { slug } = useParams()
  useEffect(() => { window.scrollTo(0, 0) }, [slug])
  const projectIndex = projects.findIndex(p => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
              src="/Error.svg"
              alt="Project not found"
              className="mx-auto mb-4 w-80 h-52 object-contain"
            />
          <div className="">
            <Link to="/projects" className="flex text-center items-center gap-1.5 text-blue-800 hover:underline py-6">
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  // const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <div className=" min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-4 md:pt-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
      <div className="flex-1 flex items-center">
      <ProjectShowcase
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        gifs={project.gifs}
        gifSide={project.gifSide}
        gifSize={project.gifSize}
        tools={project.tools}
        link={project.link}
        link2={project.link2}
        extra={projectExtras[project.slug]}
      />
      </div>

      {/* Next / Prev navigation
      {(prevProject || nextProject) && (
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-10">
          <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors py-2"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-widest text-gray-300 group-hover:text-gray-400 transition-colors mb-1">Previous</p>
                  <p className="text-base font-medium">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors py-2"
              >
                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-widest text-gray-300 group-hover:text-gray-400 transition-colors mb-1">Next</p>
                  <p className="text-base font-medium">{nextProject.title}</p>
                </div>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )} */}

      <div className="flex-1" />
      <Footer />
    </div>
  )
}
