'use client';

import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        if (imageUrls.length === 0) {
            setImagesLoaded(true);
            return;
        }

        let loadedImages = 0;
        const imagePromises = imageUrls.map((url) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    loadedImages++;
                    setLoadedCount(loadedImages);
                    resolve();
                };
                img.onerror = () => {
                    loadedImages++;
                    setLoadedCount(loadedImages);
                    resolve();
                };
                img.src = url;
            });
        });

        setTimeout(() => {
            Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
            });
        }, 1500);

    }, [imageUrls]);

    return { imagesLoaded, loadedCount, totalImages: imageUrls.length };

};