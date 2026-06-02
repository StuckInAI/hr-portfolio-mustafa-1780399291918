import React from 'react'

const experiences = [
  { role: 'Head of People', company: 'TechNova Solutions', period: '2021 — Present', desc: 'Led HR transformation including talent acquisition, leadership development, and performance frameworks for 300+ employees.' },
  { role: 'Senior HR Manager', company: 'GlobalFin Services', period: '2017 — 2021', desc: 'Managed end-to-end recruitment, employee engagement, and diversity initiatives across 5 offices.' },
  { role: 'HR Business Partner', company: 'Aether Labs', period: '2014 — 2017', desc: 'Partnered with product and engineering teams to scale teams and improve retention.' }
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="font-medium text-xl">{exp.role}</div>
              <div className="text-sm text-gray-500">{exp.period}</div>
            </div>
            <div className="text-blue-600 font-medium mb-3">{exp.company}</div>
            <p className="text-gray-700 leading-snug">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}