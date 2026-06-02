import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur z-50 border-b">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">Mustafa Shakil</div>
        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}