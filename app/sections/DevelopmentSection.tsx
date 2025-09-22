"use client";

import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DevelopmentSection() {
    return (
        <div className='section-container'>
            <div className='grid grid-cols-3 gap-40'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col items-center justify-center'
                >
                    <Image src="/Unreal_Engine_Logo4x.png" alt="Development" width={1000} height={1000} className='' />
                </motion.div>
                <div className='col-span-2'>
                    <SectionHeader title={developmentHeader.title} description={developmentHeader.description} align='right' />
                </div>
            </div>
        </div>
    )
}

const developmentHeader = {
    title: 'Development',
    description: 'Development on The Little Colossus is a meticulous, ongoing journey at Studio Traveling Light. Led by Timo Vergauwen, the team is refining every detail of this stealth-based fantasy adventure—crafting painterly visuals, fine-tuning atmospheric lighting, and playtesting traversal puzzles to ensure an immersive experience. Vergauwen’s passion for storytelling and evocative worldbuilding fuels each design decision, with a constant push to balance cinematic aesthetics and gameplay fluidity. Follow their progress on social media to see sneak peeks, updates, and behind-the-scenes glimpses as this unique game comes to life.'
}