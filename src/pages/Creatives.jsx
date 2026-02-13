import React from 'react'
import Navbar from '../components/Navbar'
import CircularCarousel from '../components/CircularCarousel'
import Footer from '../components/Footer'

export default function Creatives() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-1 sm:mb-2 text-center px-2 pt-4 pb-2">
            I like to <span className="text-blue-800">get creative</span>, and <span className="text-green-700">make things</span>.
          </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-0 sm:mb-2 text-center px-2">
          Here are a few pieces from crocheting, clay art, and lego builds!
        </p>

        <div className="w-full sm:-mt-6 md:-mt-10">
          <CircularCarousel />
        </div>
      </div>

      {/* Lego Builds Section RAHHH */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-2">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-serif text-center mb-2 py-4">
          Lego <span className="text-yellow-500">Builds</span>
        </h2>
        <div className="max-w-5xl mx-auto columns-2 sm:columns-3 gap-3 sm:gap-4">
          {[
            { src: '/legos/Pink&White.jpg', alt: 'Pink & White Pant Set' },
            { src: '/legos/Porche.jpg', alt: 'Most Expensive RAHH' },
            { src: '/legos/Lamborgini.jpg', alt: 'First ever' },
            { src: '/legos/Wall E.jpg', alt: 'Wall E' },
            { src: '/legos/Sunflowers.png', alt: 'Most recent' },
            { src: '/legos/Tokyo.jpg', alt: 'Tokyo Skyline' },
            
          ].map((img, i) => (
            <div key={i} className="mb-3 sm:mb-4 break-inside-avoid">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
          
        </div>
        <div className="pb-8"></div>
      </div>

      <Footer />
    </div>
  )
}
