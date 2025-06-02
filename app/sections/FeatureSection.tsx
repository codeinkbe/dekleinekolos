'use client';


import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"]
  })
  
  // Create animations for each feature index
  const feature0Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const feature0Y = useTransform(scrollYProgress, [0.15, 0.35], [50, 0])
  
  const feature1Opacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1])
  const feature1Y = useTransform(scrollYProgress, [0.2, 0.45], [50, 0])
  
  const feature2Opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const feature2Y = useTransform(scrollYProgress, [0.25, 0.45], [50, 0])
  
  const feature3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const feature3Y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])
  
  const animations = [
    { opacity: feature0Opacity, y: feature0Y },
    { opacity: feature1Opacity, y: feature1Y },
    { opacity: feature2Opacity, y: feature2Y },
    { opacity: feature3Opacity, y: feature3Y }
  ]
  
  return (
    <div className='section-container'>
      <SectionHeader title={featuresHeader.title} description={featuresHeader.description} align='center' />

      <div className='grid grid-cols-4 gap-16' ref={ref}>
        {features.map((feature, index) => (
          <motion.div
            style={{ opacity: animations[index].opacity, y: animations[index].y }}
            key={index} 
            className='flex flex-col items-center justify-start gap-3'
          >
            <Image src={feature.image} alt={feature.title} width={100} height={100} className='h-24 object-contain' />
            <h1 className='text-lg text-center font-cinzel-decorative text-text-secondary h-20'>{feature.title}</h1>
            <p className='text-text-primary font-a-bee-zee text-center'>{feature.description}</p>
          </motion.div>
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
    image: "/SVG/StealthAdventure.svg",
    title: "Atmospheric Stealth Adventure",
    description: "Play as a silent observer, clinging to shadows and overheard stories."
  },
  {
    image: "/SVG/Narrative.svg",
    title: "Companion-Based Narrative",
    description: "Follow a human traveler unaware of your presence—until the moment he must confront you."
  },
  {
    image: "/SVG/CreatureAbilities.svg",
    title: "Unique Creature Abilities",
    description: "Wiggle into tight spaces and find clever paths to survive."
  },
  {
    image: "/SVG/DyingWorld.svg",
    title: "A Dying World That Never Stops Moving",
    description: "The world migrates. Rest is deadly. You must stay close, stay hidden, and keep moving."
  }
]