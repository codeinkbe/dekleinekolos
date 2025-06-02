'use client';

import React from 'react'
import { motion } from 'framer-motion'

interface LoadingScreenProps {
  imagesLoaded: boolean;
  loadedCount: number;
  totalImages: number;
}

export default function LoadingScreen({ imagesLoaded, loadedCount, totalImages }: LoadingScreenProps) {
  return (
    <motion.div
      className='fixed inset-0 bg-bg-primary flex items-center justify-center z-50'
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: imagesLoaded ? 0 : 1, scale: imagesLoaded ? 0.5 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='text-text-primary font-a-bee-zee text-2xl'>Loading...</div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='text-text-primary font-a-bee-zee text-sm'>Please wait while we load the page</div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='text-text-primary font-a-bee-zee text-sm'>{loadedCount} / {totalImages} images loaded</div>
      </div>
    </motion.div>
  )
}
