'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import html2canvas from "html2canvas-pro";

const ProfileFocusCard: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lensRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const lens = lensRef.current;
        if (!container || !lens || window.innerWidth < 1024) return;

        const lensSize = 200;
        const scale = 1.5;

        const styles = window.getComputedStyle(container);
        console.log('Computed background-color:', styles.backgroundColor);
        console.log('Computed color:', styles.color);

        // Capture container as image
        html2canvas(container, { backgroundColor: '#F6F1EB', scale: 3 })
            .then(canvas => {
                const dataUrl = canvas.toDataURL(); 
                lens.style.backgroundImage = `url(${dataUrl})`;
                lens.style.backgroundRepeat = 'no-repeat';
                lens.style.backgroundSize = `${container.offsetWidth * scale}px ${container.offsetHeight * scale}px`;
            });
 
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            // Clamp so lens doesn’t go outside
            x = Math.max(lensSize / 2, Math.min(x, rect.width - lensSize / 2));
            y = Math.max(lensSize / 2, Math.min(y, rect.height - lensSize / 2));

            // Move lens itself
            gsap.to(lens, {
                duration: 0.1,
                x: x - lensSize / 2,
                y: y - lensSize / 2,
                opacity: 1,
                ease: "power2.out"
            });

            // Correct background offset:
            const bgX = -((x * scale) - lensSize / 2);
            const bgY = -((y * scale) - lensSize / 2);

            lens.style.backgroundPosition = `${bgX}px ${bgY}px`;
        };
            

        const handleMouseLeave = () => {
            gsap.to(lens, { opacity: 0, duration: 0.2 });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full px-3 py-12 md:p-16 rounded-xl overflow-hidden bg-yellow text-black border shadow"
            style={{ backgroundColor: '#F6F1EB' }}
        >
            {/* Magnifier lens */}
            <div
                ref={lensRef}
                style={{
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                    backgroundColor:'#F6F1EB',                
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover' // replaced dynamically after capture
                  }}
                className="absolute top-0 left-0 w-[200px] h-[200px] border border-gray-200 rounded-full overflow-hidden pointer-events-none opacity-0 z-20"
            ></div>

            {/* Normal text */}
            <div className="relative text-black gap-6 text-center flex flex-col space-y-2 md:space-y-3 font-normal">
                <div className="text-xs lg:text-base uppercase font-medium m-0">Music Producer & Composer</div>
                <div className="flex flex-wrap justify-center md:space-x-6 text-lg md:text-2xl leading-none">
                    <span>
                        <span className="text-xs lg:text-base uppercase font-medium">Name&nbsp;&nbsp;</span>
                        <span className="inline text-3xl lg:text-5xl font-normal">Joydeep Banerji</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase font-medium">Experience&nbsp;&nbsp;</span>
                        <span className="inline text-3xl lg:text-5xl font-normal">11 Years&nbsp;&nbsp;</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase font-medium">City&nbsp;&nbsp;</span>
                        <span className="inline text-3xl lg:text-5xl font-normal">Mumbai</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase font-medium">Services&nbsp;&nbsp;</span>
                        <span className="inline text-3xl lg:text-5xl font-normal">
                            Music Direction, Composition, Production, Sonic <br className="hidden md:block" />Branding & Advertisements, Sound Design, Session <br className="hidden md:block" />Musician, Live Musician&nbsp;&nbsp;
                        </span> 
                        <span className="text-xs lg:text-base uppercase font-medium">BANDS&nbsp;&nbsp;</span>
                        <span className="inline text-3xl lg:text-5xl font-normal">Midnite Djong, Indiva</span>
                    </span>
                    <span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileFocusCard;
