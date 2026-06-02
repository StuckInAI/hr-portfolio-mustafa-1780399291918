import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-10 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Mustafa Shakil. All rights reserved.
    </footer>
  )
}