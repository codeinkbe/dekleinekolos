'use client';

import { useState, useEffect } from 'react';

export const useActiveSection = (sections: string[]) => {
    const [activeSection, setActiveSection] = useState(sections[0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const activeSection = sections.find(section => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionBottom = sectionTop + sectionElement.offsetHeight;
                    return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
                }
            });
            setActiveSection(activeSection || sections[0]);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return activeSection;
}