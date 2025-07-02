'use client';

import NextImage from 'next/image';
import { useState, useCallback } from 'react';
import './index.scss';

type ImageElementProps = {
    basePath?: string;
    commonSrc?: string;
    desktopSrc?: string;
    mobileSrc?: string;
    className?: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
};

const Image: React.FC<ImageElementProps> = ({
    basePath = '',
    commonSrc,
    desktopSrc,
    mobileSrc,
    className = '',
    alt,
    width,
    height,
    priority = false,
}) => {  
    const fallbackSrc = '/assets/common/empty.webp';
    const initialDesktopSrc = commonSrc ? basePath + (commonSrc || fallbackSrc) : basePath + (desktopSrc || fallbackSrc);
    const initialMobileSrc = mobileSrc ? basePath + (mobileSrc || fallbackSrc) : basePath + fallbackSrc;

    const [desktopSrcState, setDesktopSrcState] = useState(initialDesktopSrc);
    const [mobileSrcState, setMobileSrcState] = useState(initialMobileSrc);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => setIsLoaded(true);

    const handleError = useCallback(
        (type: 'desktop' | 'mobile') => {
            if (type === 'desktop' && desktopSrcState !== fallbackSrc) {
                setDesktopSrcState(basePath + fallbackSrc);
                setIsLoaded(false);
            }
            if (type === 'mobile' && mobileSrcState !== fallbackSrc) {
                setMobileSrcState(basePath + fallbackSrc);
                setIsLoaded(false);
            }
        },
        [desktopSrcState, mobileSrcState, basePath, fallbackSrc]
    );

    if (commonSrc) {
        return (
            <div className={`m-image__wrapper ${className} ${isLoaded ? 'is-loaded' : ''}`}>
                <NextImage
                    className={`m-image`}
                    src={desktopSrcState}
                    alt={alt}
                    width={width}
                    height={height}
                    priority={priority}
                    loading={priority ? 'eager' : 'lazy'}
                    onLoad={handleLoad}
                    onError={() => handleError('desktop')}
                    quality={100}

                />
            </div>
        );
    }

    return (
        <picture className={`m-image__wrapper ${className} ${isLoaded ? 'is-loaded' : ''}`}>
            {mobileSrc && <source media="(max-width: 768px)" srcSet={mobileSrcState} onError={() => handleError('mobile')} />}
            <source media="(min-width: 769px)" srcSet={desktopSrcState} />
            <NextImage
                className={`m-image`}
                src={desktopSrcState}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                onLoad={handleLoad}
                quality={100}
                loading={priority ? 'eager' : 'lazy'}
                onError={() => handleError('desktop')}
            />
        </picture>
    );
};

export default Image;
