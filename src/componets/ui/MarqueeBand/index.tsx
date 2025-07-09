'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueeBand = ({ titles }: { titles: string[] }) => {
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
        <section className="overflow-hidden bg-primary leading-none py-2.5 pb-1.5 text-white text-[64px] rounded-lg sm:text-[96px] md:text-[128px] whitespace-nowrap">
            <div ref={containerRef} className="relative w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="marquee-track flex will-change-transform font-normal"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-4 items-center">
                            {titles.map((item, index) => (
                                <React.Fragment key={`${i}-${index}`}>
                                    <span className="px-0">
                                        {item}
                                    </span>
                                    <span className="text-7xl">
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
