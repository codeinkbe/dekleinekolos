import React from 'react'
import Image from 'next/image'

export default function SocialLink({ href, icon, text }: { href: string, icon: string, text: string }) {
  return (
    <div className='flex flex-row items-center justify-center gap-1 hover:scale-110 transition-all duration-300'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <Image src={icon} alt={text} width={100} height={100} className='w-8 h-8 text-text-primary font-a-bee-zee ' />
      </a>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <div>{text}</div>
      </a>
    </div>
  )
}
