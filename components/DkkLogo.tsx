import React from 'react'
import Image from 'next/image'

export default function DkkLogo() {
    return (
        <div className="flex items-center relative w-35 h-14">
            <Image
                src="/dkklogosmall.png"
                alt="wezentje"
                width={64}
                height={64}
                className="w-16 h-16 absolute top-0 left-0 z-10"
            />
            <div className="text-text-primary leading-5 absolute left-12 bottom-0 font-cinzel-decorative z-20">
                <div className="text-[1.00rem] tracking-wide">De kleine</div>
                <div className="text-[1.56rem] tracking-wide">kolos</div>
            </div>
        </div>
    )
}
