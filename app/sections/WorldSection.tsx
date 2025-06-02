import React from 'react'
import SectionHeader from '@/components/SectionHeader'

export default function WorldSection() {
  return (
    <div className='section-container'>
      <SectionHeader title={worldHeader.title} description={worldHeader.description} align='center' />
      {/* <div className='text-text-primary font-a-bee-zee text-center'>
        Set in an endless sandy wasteland dotted with towering sequoia forests, The Little Colossus uses fixed camera angles and painterly visuals to evoke the feeling of classic fantasy art.
      </div>
      <div className='text-text-primary font-a-bee-zee text-center'>
        Expect silhouettes, wide vistas, and a sense of quiet sorrow.
      </div> */}
    </div>
  )
}


const worldHeader = {
  title: "World",
  description: "Set in an endless sandy wasteland dotted with towering sequoia forests, The Little Colossus uses fixed camera angles and painterly visuals to evoke the feeling of classic fantasy art. Expect silhouettes, wide vistas, and a sense of quiet sorrow."
}
