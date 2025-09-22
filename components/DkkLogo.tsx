import React from 'react'
import Image from 'next/image'

export default function DkkLogo({textOnly = false, color = 'light'}: {textOnly?: boolean, color?: 'light' | 'dark'}) {

    const textContent = (
        <div className={`leading-5 absolute ${textOnly ? 'left-0' : 'left-12'} bottom-0 font-cinzel-decorative z-20`}>
            <div className="text-[1.00rem] tracking-wide">little</div>
            <div className="text-[1.56rem] tracking-wide">Colossus</div>
        </div>
    )

    const imageContent = (
        <Image
            src="/dkklogosmall.png"
            alt="wezentje"
            width={64}
            height={64}
            className={`w-16 h-16 absolute top-0 left-0 z-10 ${textOnly ? 'hidden' : 'block'}`}
        />
    )

    if (textOnly) {
        return (
            <div className={`flex items-center relative h-10 w-22 ${color === 'light' ? 'text-text-primary' : 'text-bg-primary'}`}>
                {textContent}
            </div>
        )
    }

    return (
        <div className={`flex items-center relative h-14 w-35 ${color === 'light' ? 'text-text-primary' : 'text-bg-primary'}`}>
            {imageContent}
            {textContent}
        </div>
    )
}
