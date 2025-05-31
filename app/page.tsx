import React from 'react'
import TopMenuBar from '@/components/TopMenuBar'
import Image from 'next/image'

// sections:
import ParallaxHeader from '@/app/sections/ParallaxHeader'
import HeroSection from '@/app/sections/HeroSection'
import StorySection from '@/app/sections/StorySection'
import FeatureSection from '@/app/sections/FeatureSection'
import GameplaySection from '@/app/sections/GameplaySection'
import WorldSection from '@/app/sections/WorldSection'
import ContactSection from '@/app/sections/ContactSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className='bg-bg-primary'>
      <TopMenuBar />
      <ParallaxHeader />
      <section id='hero'>
        <HeroSection />
      </section>
      <section id='story' className='bg-bg-secondary relative'>
        <StorySection />
        <Image src="/bgs/storybg.png" alt="story background" width={1000} height={1000} className='absolute top-0 left-0 w-full h-full object-cover z-10 opacity-50' />
      </section>
      <section id='gameplay'>
        <GameplaySection />
      </section>
      <section id='features' className='bg-bg-secondary relative'>
        <FeatureSection />
      </section>
      <section id='world' className='bg-bg-secondary relative'>
        <WorldSection />
        <Image src="/bgs/world.png" alt="world background" width={1000} height={1000} className='absolute top-0 left-0 w-full h-full object-cover z-10 opacity-50' />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>
      <Footer />
    </div>
  )
}
