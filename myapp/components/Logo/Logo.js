'use client'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href={'/'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#0077cc">
        <ellipse cx="12" cy="12" rx="8" ry="4" />

        <polygon points="2,12 6,16 6,8" fill="#00cc99" />

        <circle cx="15" cy="10" r="1" fill="#ffffff" />
        </svg>
        </Link>
    </div>
  )
}

export default Logo