import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="max-w-md mx-auto px-6 py-16 border-t">
      <h2 className="text-3xl font-semibold mb-8">Let's Connect</h2>
      {submitted ? (
        <div className="text-center py-12">
          <p className="text-xl">Thank you! I'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Your Name" required className="w-full border p-3 rounded-lg" />
          <input type="email" placeholder="Your Email" required className="w-full border p-3 rounded-lg" />
          <textarea placeholder="Message" required rows={5} className="w-full border p-3 rounded-lg"></textarea>
          <button type="submit" className="w-full py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800">Send Message</button>
        </form>
      )}
      <div className="mt-8 text-center text-sm text-gray-500">
        LinkedIn: <a href="https://www.linkedin.com/in/mustafa-shakil/" target="_blank" className="underline">mustafa-shakil</a>
      </div>
    </section>
  )
}