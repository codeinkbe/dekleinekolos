'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='section-container gap-6'>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.5, delay: 0.5 }}
                className='font-cinzel-decorative text-text-primary text-4xl  z-10'
            >
                A World Scorch<span className='pl-[0.1rem]'>ed</span> by a Deadly Day-Night Cycle.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.5, delay: 2.5 }}
                className='font-cinzel-decorative text-text-primary text-4xl z-10'
            >
                Three Desperate Travelers.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.5, delay: 4.5 }}
                className='font-cinzel-decorative text-text-primary text-4xl z-10'
            >
                A Baby Colossus In Pursuit.
            </motion.div>

        </div>
    )
}
