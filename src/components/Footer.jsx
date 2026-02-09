import React from 'react'
import { Mail, Instagram, Linkedin, Paperclip } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <div className="items-center flex justify-center gap-6 sm:gap-8 md:gap-10 scale-75 text-gray-400 mb-2 md:mb-3">
        <a href="mailto:fatimatanvir80@gmail.com" className="hover:text-gray-600 transition-colors"><Mail /></a>
        <a href="https://www.instagram.com/iamfatimatanvir/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Instagram /></a>
        <a href="https://www.linkedin.com/in/fatimaatanvir/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Linkedin /></a>
        <a href="https://drive.google.com/file/d/1-YSLSFpyreTIDwHI4SDFM-f2rJ38YBSc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors"><Paperclip /></a>
      </div>
      <div className="text-center text-xs md:text-12px text-gray-500 pb-4 md:gap-7" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        © 2026 by Fatima Tanvir
      </div>
    </footer>
  )
}
