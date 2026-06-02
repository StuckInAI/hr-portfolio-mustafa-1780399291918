import React from 'react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
      <div className="inline-block px-4 py-1 bg-gray-100 text-sm rounded-full mb-4">HR Leader • Talent Strategist</div>
      <h1 className="text-6xl font-semibold tracking-tighter mb-6">Mustafa Shakil</h1>
      <p className="text-2xl text-gray-600 max-w-md mx-auto">Building exceptional workplaces and empowering people through strategic HR.</p>
      <div className="mt-8">
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">Get in touch</a>
      </div>
    </section>
  )
}