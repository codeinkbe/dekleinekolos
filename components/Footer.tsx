import React from 'react'
import DkkLogo from './DkkLogo'

export default function Footer() {
  return (
    <div className='h-[250px] flex  w-full flex-col items-center justify-center gap-10'>
      <DkkLogo textOnly={true} color='dark' />
      <div className='flex flex-col items-center justify-center gap-2'>
         
        <div className='text-bg-primary font-a-bee-zee text-sm flex flex-row items-center justify-center gap-2'>
          <p>© 2025 Studio Traveling Light</p>
          <p>|</p>
          <p>All rights reserved</p>
          <p>|</p>
          <p>timovergauwen.be</p>
        </div>
        <div className='text-bg-primary text-center font-a-bee-zee text-sm'>website by <a href="https://codeink.be" target='_blank' className='underline'>codeink</a></div>
      </div>
    </div>
  )
}
