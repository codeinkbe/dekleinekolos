'use client';

import React from 'react'
import { motion } from 'framer-motion'
import DkkLogo from './DkkLogo';

interface LoadingScreenProps {
  imagesLoaded: boolean;
}

export default function LoadingScreen({ imagesLoaded }: LoadingScreenProps) {
  return (
    <motion.div
      className='fixed inset-0 bg-bg-primary flex flex-col items-center justify-center z-50 gap-4'
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: imagesLoaded ? 0 : 1, scale: imagesLoaded ? 0.5 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        <DkkLogo />
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='text-text-primary font-a-bee-zee text-2xl'>Loading...</div>
      </div>

    </motion.div>
  )
}
