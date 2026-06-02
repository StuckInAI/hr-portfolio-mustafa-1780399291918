import React from 'react'

const skills = ['Talent Acquisition', 'Employee Relations', 'HR Strategy', 'Leadership Development', 'Diversity & Inclusion', 'Performance Management', 'Compensation', 'Change Management']

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8">Core Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="px-5 py-2 bg-white border rounded-full text-sm hover:bg-blue-50 transition">{skill}</div>
        ))}
      </div>
    </section>
  )
}