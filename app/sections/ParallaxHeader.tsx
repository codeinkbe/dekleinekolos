'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ParallaxHeader() {
    const [scrollY, setScrollY] = useState(0)


    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className="relative w-full h-screen overflow-hidden">
            <motion.div
                className='absolute w-full h-full flex items-end justify-center p-14 text-text-primary font-a-bee-zee text-md font-bold z-199 bottom-0'
                animate={{
                    opacity: Math.max(0, 1 - scrollY / 300)
                }}
                transition={{ duration: 0 }}
            >
                <Link href="#hero" className='flex flex-col items-center justify-center gap-2 hover:scale-110 transition-all duration-300'>
                    <div>Explore</div>
                    <Image src="/SVG/arrowdown.svg" alt="arrow-down" width={100} height={100} className='w-4 h-4 hover:scale-110 transition-all duration-300' />
                </Link>
            </motion.div>
            {/* Layer 1 - Fastest (Foreground) */}
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.95}px, 0)`
                }}
            />
            {/* Layer 2 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_2.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.9}px, 0)`
                }}
            />
            {/* Layer 3 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_3.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.85}px, 0)`
                }}
            />
            {/* Layer 4 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_4.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.8}px, 0)`
                }}
            />
            {/* Layer 5 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_5.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.75}px, 0)`
                }}
            />
            {/* Layer 6 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_6.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.7}px, 0)`
                }}
            />
            {/* Layer 7 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_7.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.65}px, 0)`
                }}
            />
            {/* Layer 8 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_8.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.6}px, 0)`
                }}
            />
            {/* Layer 9 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_9.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.55}px, 0)`
                }}
            />
            {/* Layer 10 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_10.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.5}px, 0)`
                }}
            />
            {/* Layer 11 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_11.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.45}px, 0)`
                }}
            />
            {/* Layer 12 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_12.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.4}px, 0)`
                }}
            />
            {/* Layer 13 */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_13.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    transform: `translate3d(0, ${scrollY * 0.35}px, 0)`
                }}
            />
            {/* Layer 14 - Slowest (Background) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url("/layers/deKleineKolos_14.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    willChange: 'transform',
                    // transform: `translate3d(0, ${scrollY * 0.1}px, 0)`
                }}
            />
        </div>
    )
}