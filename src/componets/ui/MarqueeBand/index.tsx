'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MarqueeBand = ({ titles }: { titles: string[] }) => {
    const SPEED = 1000; // pixels per second

    return (
        <section
            className={`
        overflow-hidden marquee-sec leading-none pb-1.5 md:pb-2.5 text-[64px] rounded-lg 
        sm:text-[96px] md:text-[128px] whitespace-nowrap
      `}
        >
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="marquee-track flex gap-4 will-change-transform font-normal"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: SPEED ? 50 / (SPEED / 100) : 20, // adjust speed
                    }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-4 items-center leading-none">
                            {titles.map((item, index) => (
                                <React.Fragment key={`${i}-${index}`}>
                                    <span className="px-0 leading-none">{item}</span>
                                    <span className="text-2xl lg:text-7xl leading-none">•</span>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MarqueeBand;
