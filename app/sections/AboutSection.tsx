'use client';

import SectionHeader from '@/components/SectionHeader'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import SocialLink from '@/components/SocialLink';

export default function AboutSection() {
  return (
    <div className='section-container'>
      <div className='grid grid-cols-3 gap-40'>
        <div className='col-span-2'>
          <SectionHeader title={aboutHeader.title} description={aboutHeader.description} align='left' />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center justify-center'
        >
          <Image src="/tl-orange4x.png" alt="About" width={1000} height={1000} />
        </motion.div>
      </div>
      <div className='flex flex-col items-start w-full text-text-primary justify-center gap-4'>
        <p className='text-text-primary font-a-bee-zee'>Follow their journey and get a behind-the-scenes look on Instagram</p>
        <div className='flex flex-row items-center justify-start gap-4'>
          {socialLinks.map((link) => (
            <SocialLink key={link.id} href={link.href} icon={link.icon} text={link.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

const aboutHeader = {
  title: 'Who are we',
  description: 'Little Colossus is the brainchild of Timo Vergauwen, a filmmaker and game designer, and is currently in development at his independent studio, Studio Traveling Light. Combining cinematic visuals and atmospheric stealth mechanics, Vergauwen brings his unique artistic vision to life in this emotional journey across a world on the brink of collapse.'
}


const socialLinks = [
  {
    id: 1,
    href: 'https://www.instagram.com/timovergauwen',
    icon: '/SVG/square-instagram-brands.svg',
    text: 'Timo Vergauwen'
  },
  // {
  //   id: 2,
  //   href: 'https://www.instagram.com/studiotravelinglight/',
  //   icon: '/SVG/square-instagram-brands.svg',
  //   text: 'DeKleineKolos'
  // },
  // {
  //   id: 3,
  //   href: 'https://www.instagram.com/studiotravelinglight/',
  //   icon: '/SVG/square-bluesky-brands.svg',
  //   text: 'DeKleineKolos'
  // }
]