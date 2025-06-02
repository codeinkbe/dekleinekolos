'use client';

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function SectionHeader({ title, description, align = 'right' }: { title: string, description: string, align: 'center' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"]
  })

  const opacity1 = useTransform(scrollYProgress, [0.05, 0.45], [0, 1])
  const y1 = useTransform(scrollYProgress, [0.05, 0.45], [50, 0])
  
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const y2 = useTransform(scrollYProgress, [0.1, 0.5], [50, 0])
  
  const opacity3 = useTransform(scrollYProgress, [0.15, 0.55], [0, 1])
  const y3 = useTransform(scrollYProgress, [0.15, 0.55], [25, 0])

  
  
  const alignClass = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }

  const alignLineClass = {
    center: 'w-32 mx-auto',
    left: 'w-32 ml-0',
    right: 'w-32 mr-0',
  }

  return (
    <div className={`flex flex-col items-stretch justify-center z-50 mx-auto gap-4 ${alignClass[align]}`} ref={ref}>
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
      >
        <h1 className='text-4xl font-cinzel-decorative text-text-secondary w-full'>{title}</h1>
      </motion.div>
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className={`h-[1px] bg-text-secondary/20 w-full ${alignLineClass[align]}`}
      />
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
      >
        <div className='flex flex-col items-center justify-center z-50 mx-auto text-text-primary font-east-sea-dokdo text-3xl leading-10 whitespace-pre-line'>
          {description}
        </div>
      </motion.div>
    </div>
  )
}
