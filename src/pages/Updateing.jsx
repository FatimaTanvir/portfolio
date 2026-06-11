import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BRAND = '#D2551E'

export default function Case() {
  useEffect(() => {
    document.title = 'Cookaroo Case Study | Fatima Tanvir'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Updating notice ── */}
      <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Case Study</p>
        <h2 className="text-3xl sm:text-4xl font-montserrat text-gray-900 mb-4 leading-tight">
          Updating case study.
        </h2>
        <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-10">
          Full write-up coming soon. In the meantime, take a look at the prototype.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/designs"
            className="border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors"
          >
            ← Back to Designs
          </Link>
          <a
            href="https://www.figma.com/proto/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-200&t=jnSyfce8LuHwoBOB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=152%3A193"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND }}
          >
            View Figma Prototype
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
