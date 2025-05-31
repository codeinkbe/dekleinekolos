import React from 'react'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'

export default function FeatureSection() {
  return (
    <div className='section-container'>
      <SectionHeader title={featuresHeader.title} description={featuresHeader.description} />

      <div className='grid grid-cols-4 gap-16'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center justify-start gap-3'>
            <Image src={feature.image} alt={feature.title} width={1000} height={1000} className='w-20 h-20 object-cover' />
            <h1 className='text-xl text-center font-cinzel-decorative text-text-secondary h-20'>{feature.title}</h1>
            <p className='text-text-primary font-a-bee-zee text-center'>{feature.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

const featuresHeader = {
  title: "Core Features",
  description: "Nullam eget nisl risus. Nullam aliquam, ligula eu consequat accumsan, mauris mauris mollis purus, vitae posuere nibh ligula in arcu. Donec cursus enim ut euismod aliquam. Nam in volutpat dui. Proin elementum varius vulputate."
}

const features = [
  {
    image: "/dkklogosmall.png",
    title: "Atmospheric Stealth Adventure",
    description: "Play as a silent observer, clinging to shadows and overheard stories."
  },
  {
    image: "/dkklogosmall.png",
    title: "Companion-Based Narrative",
    description: "Follow a human traveler unaware of your presence—until the moment he must confront you."
  },
  {
    image: "/dkklogosmall.png",
    title: "Unique Creature Abilities",
    description: "Wiggle into tight spaces and find clever paths to survive."
  },
  {
    image: "/dkklogosmall.png",
    title: "A Dying World That Never Stops Moving",
    description: "The world migrates. Rest is deadly. You must stay close, stay hidden, and keep moving."
  }
]