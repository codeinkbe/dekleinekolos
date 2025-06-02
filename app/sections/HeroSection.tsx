'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.6", "end 0.4"]
    })
    
    const opacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
    const y1 = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])
    
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
    const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])
    
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])
    const y3 = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

    return (
        <div className='section-container gap-6' ref={ref}>
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className='font-cinzel-decorative text-text-primary text-4xl z-10'
            >
                A World Scorch<span className='pl-[0.1rem]'>ed</span> by a Deadly Day-Night Cycle.
            </motion.div>
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className='font-cinzel-decorative text-text-primary text-4xl z-10'
            >
                Three Desperate Travelers.
            </motion.div>
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className='font-cinzel-decorative text-text-primary text-4xl z-10'
            >
                A Baby Colossus In Pursuit.
            </motion.div>

        </div>
    )
}
