'use client';


import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function GameplayCard({ title, description, image, alignment, index }: { title: string, description: string, image: string, alignment: 'left' | 'right', index: number }) {
    const isRight = alignment === 'right'
    
    const textContent = (
        <div className={`text-text-primary font-a-bee-zee flex flex-col gap-2 col-span-1 ${isRight ? 'text-right' : 'text-left'}`}>
            <h1 className='text-4xl font-bold text-text-secondary font-east-sea-dokdo'>{title}</h1>
            <p className='text-text-primary font-a-bee-zee'>{description}</p>
        </div>
    )
    
    const imageContent = (
        <Image src={image} alt="gameplay" width={1000} height={1000} className='rounded-2xl col-span-3 w-full h-[300px] object-cover' />
    )

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='items-start justify-center z-50  mx-auto w-full grid grid-cols-4 gap-4'
        >
            {isRight ? (
                <>
                    {textContent}
                    {imageContent}
                </>
            ) : (
                <>
                    {imageContent}
                    {textContent}
                </>
            )}
        </motion.div>
    )
}
