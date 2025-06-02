'use client';

import React, { useEffect, useState } from 'react'
import DkkLogo from './DkkLogo';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/UseActiveSection';

const menuItems = [
   {
      name: 'Home',
      href: '#hero'
   },
   {
      name: 'Story',
      href: '#story'
   },
   {
      name: 'Gameplay',
      href: '#gameplay'
   },
   {
      name: 'Features',
      href: '#features'
   },
   {
      name: 'World',
      href: '#world'
   },
   {
      name: 'Development',
      href: '#development'
   },
   {
      name: 'About',
      href: '#about'
   }
];

export default function TopMenuBar() {
   const [showNavbar, setShowNavbar] = useState(false);
   const activeSection = useActiveSection(menuItems.map(item => item.href.replace('#', '')));

   useEffect(() => {
      const handleScroll = () => {
         setShowNavbar(window.scrollY > 600);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);


   return (
      <nav className={`fixed w-full h-20 flex items-center justify-between z-150  px-8 transition-all duration-500 ease-in-out  backdrop-blur-md ${showNavbar ? 'translate-y-0 bg-gray-950/30' : '-translate-y-full bg-gray-950/10'}`}>
         {/* Logo Section */}
         <Link href="/">
            <DkkLogo textOnly={false} color='light' />
         </Link>

         <div className="flex items-center justify-center  gap-8 text-white">
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center justify-center  gap-8 text-white">
               {menuItems.map((item) => (
                  <Link
                     key={item.name}
                     href={item.href}
                     className={`text-stone-200 text-base font-normal font-['ABeeZee'] hover:text-white transition-colors cursor-pointer ${activeSection === item.href.replace('#', '') ? 'text-text-secondary' : 'text-text-primary'}`}
                  >
                     {item.name}
                  </Link>
               ))}
            </div>

            <div className='divider-vertical w-px h-7 bg-white hidden md:block' />

            {/* Language Selector */}
            <div className="flex items-center gap-4">
               <button className="text-stone-200 text-base font-normal font-['ABeeZee'] hover:text-white transition-colors">
                  English
               </button>
            </div>
         </div>
      </nav>
   )
}
