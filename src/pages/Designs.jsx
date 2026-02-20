import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectShowcase from '../components/ProjectShowcase'

export default function Designs() {
  useEffect(() => { document.title = "Designs | Fatima Tanvir" }, [])
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6 w-full max-w-[1600px] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display mb-1 sm:mb-2 text-center px-2">
            A collection of design work. <br /> <span className="text-blue-800">Prototypes</span>, mockups, <span className="text-green-700">and more</span>.
          </h1>
      </div>
      <div className="flex-1 flex items-center py-6">
      <ProjectShowcase
        title="Cookaroo"
        subtitle="Amazon x CodePath Design Challenge - Summer 2025"
        description="A mobile-first cooking companion designed to make meal planning and recipe discovery feel structured, calm, and accessible. The core idea was simple: cooking shouldn't feel overwhelming."
        gifs={['/gifs/Cookaroo-Demo.gif']}
        gifSide="right"
        gifSize = '2xl'
        link={{ href: 'https://www.figma.com/proto/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-200&t=jnSyfce8LuHwoBOB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=152%3A193', label: "View Figma Prototype" }}
        extra={
          <>
            <p className="text-sm text-gray-600 mb-3 font-medium">As the primary UI prototyper, I focused on:</p>
            <ul className="text-sm text-gray-600 list-disc list-inside mb-4 space-y-1">
              <li>Designing a clean, welcoming landing experience</li>
              <li>Creating both light and dark mode for visual comfort</li>
              <li>Building a streamlined sign-up flow</li>
              <li>Designing a personalized user profile interface</li>
              <li>Applying accessibility considerations in spacing, contrast, and hierarchy</li>
            </ul>
            <p className="text-sm text-gray-500 mb-4 italic">
              Every screen was built to reduce cognitive load and make the experience feel effortless.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              (View Figma Design File: <a href="https://www.figma.com/design/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-193&t=ATxnthw3rNWeDOgg-1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">here</a>)
            </p>
          </>
        }
        tools={[
    { name: 'Made in Figma', icon: 'https://cdn.simpleicons.org/figma' },
  ]}
      />
    
      {/* <ProjectShowcase
        title="WeBuild"
        subtitle="Senior Project"
        description="BOOPOMAX5000"
        //gifs={['/Webuild-Landing.gif']}
        gifSide="left"
        gifSize="xl"
        link={{ href: 'https://github.com/FatimaTanvir/WeBuild', label: "View GitHub Repo" }}
        extra={
          <p className="text-sm text-gray-500 mb-6">
            (View Figma Design File: <a href="https://www.figma.com/design/sFw67CtcNdN9TdHmdjo8BY/WeBuild?node-id=0-1&t=qeM9ceewfWvNmgHx-1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">here</a>)
          </p>
        }
      /> */}

      {/* <div className="pb-20"></div> */}
      </div>
      <Footer />
    </div>
  )
}
