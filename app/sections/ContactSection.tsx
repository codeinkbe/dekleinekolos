import SectionHeader from '@/components/SectionHeader'
import React from 'react'

export default function ContactSection() {
  return (
    <div className='section-container'>
      <SectionHeader title={contactHeader.title} description={contactHeader.description} />
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-xl font-a-bee-zee py-6 px-10 bg-btn hover:bg-hover transition-all duration-300 cursor-pointer rounded-2xl text-text-secondary'>Follow us on social media!</h1>
        </div>
      </div>
    </div>
  )
}

const contactHeader = {
  title: "Keep in informed",
  description: "Want to know more about The Little Colossus and follow the development?"
}