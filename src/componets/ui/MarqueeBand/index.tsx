'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueeBand = ({ titles, theme = 'Dark' }: { titles: string[], theme?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const SPEED = 100; // pixels per second

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const totalWidth = track.scrollWidth / 2; // Only one content block repeated twice
        const duration = totalWidth / SPEED;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: `-${totalWidth}`,
                    duration,
                    ease: 'linear',
                    repeat: -1,
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [titles]);

    return (
        <section className={`
    overflow-hidden leading-none pb-1.5 md:pb-2.5 text-[64px] rounded-lg sm:text-[96px] md:text-[128px] whitespace-nowrap
    `}
    // ${theme === "light" ? "bg-white text-black border" : "bg-primary text-white"}
        >
            <div ref={containerRef} className="relative w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="marquee-track flex gap-4 will-change-transform font-normal"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-4 items-center leading-none">
                            {titles.map((item, index) => (
                                <React.Fragment key={`${i}-${index}`}>
                                    <span className="px-0 leading-none">
                                        {item}
                                    </span>
                                    <span className="text-2xl lg:text-7xl leading-none">
                                        •
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeBand;
