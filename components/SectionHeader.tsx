'use client';

import { motion } from 'framer-motion'
import React from 'react'

export default function SectionHeader({ title, description }: { title: string, description: string }) {
  return (
      <div className='section-header'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <h1 className='text-4xl font-cinzel-decorative text-text-secondary'>{title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className='section-description'>
            {description}
          </div>
        </motion.div>
      </div>
  )
}
