'use client'

import React from 'react'

export default function Loading() {
  return (
    <div className='h-screen w-full bg-bg-primary flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center z-50 max-w-screen-lg mx-auto'>
        <h1 className='text-4xl text-text-secondary animate-pulse' style={{ fontFamily: 'var(--font-cinzel-decorative)' }}>
          Loading...
        </h1>
      </div>
    </div>
  )
}
