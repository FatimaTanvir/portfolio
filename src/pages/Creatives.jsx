import React from 'react'
import Navbar from '../components/Navbar'
import CircularCarousel from '../components/CircularCarousel'
import Footer from '../components/Footer'

export default function Creatives() {
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-2 sm:mb-3 text-center px-2">
            I like to <span className="text-blue-500">get creative</span>, and <span className="text-green-500">make things</span>.
          </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-2 sm:mb-5 text-center px-2">
          Here a few peices from crocheting and making art from clay!
        </p>

        <div className="-mt-8 sm:-mt-10 md:-mt-12 w-full flex-1">
          <CircularCarousel />
        </div>
      </div>

      <Footer />
    </div>
  )
}
