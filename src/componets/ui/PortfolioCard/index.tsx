'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProfileFocusCard: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const mask = maskRef.current;
        if (!container || !mask || window.innerWidth < 1024) return;

        const radius = 180;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(mask, {
                duration: 0.2,
                ease: "power2.out",
                WebkitMaskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,1) 80%)`,
                maskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,1) 80%)`,
            });
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // Move patch off screen (or to center & shrink) so entire text stays blurred
            gsap.to(mask, {
                duration: 0.2,
                ease: "power2.out",
                WebkitMaskImage: `radial-gradient(circle 0px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,1) 80%)`,
                maskImage: `radial-gradient(circle 0px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,1) 80%)`,
            });
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
            className="relative w-full px-3 py-12 md:p-10 rounded-xl overflow-hidden bg-white border shadow "
        >
            {/* Blurred text overlay */}
            <div
                ref={maskRef}
                className="absolute inset-0 pointer-events-none backdrop-blur-sm z-[1] hidden lg:block"
                style={{
                    WebkitMaskImage: "radial-gradient(circle 0px at 50% 50%, transparent 0%, rgba(0,0,0,1) 80%)",
                    maskImage: "radial-gradient(circle 0px at 50% 50%, transparent 0%, rgba(0,0,0,1) 80%)",
                }}
            />

            {/* Text content */}
            <div className="relative  text-black gap-6 text-center flex flex-col space-y-2 md:space-y-3 font-semibold">
                <div className="text-xs lg:text-base uppercase m-0">Music Producer & Composer</div>
                <div className="flex flex-wrap justify-center md:space-x-6 text-lg md:text-2xl leading-none">
                    <span>
                        <span className="text-xs lg:text-base uppercase">Name&nbsp;&nbsp;</span><span className="inline text-4xl lg:text-[64px] font-staatliches">Joydeep Banerji</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase">Experience&nbsp;&nbsp;</span><span className="inline text-4xl lg:text-[64px] font-staatliches">11 Years</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase">City&nbsp;&nbsp;</span><span className="inline text-4xl lg:text-[64px] font-staatliches">Mumbai</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase">Services&nbsp;&nbsp;</span><span className="hidden lg:inline text-4xl lg:text-[64px] font-staatliches">Music Direction, Composition, Production<br /> Sonic Branding & Advertisements, Sound Design <br />Session Musician, Live Musician</span>
                        <span className="inline lg:hidden text-4xl lg:text-[64px] font-staatliches">Music Direction,<br /> Composition, Production<br /> Sonic Branding & ads, Sound Design <br />Session Musician, Live Musician</span>
                    </span>
                    <span>
                        <span className="text-xs lg:text-base uppercase">BANDS&nbsp;&nbsp;</span><span className="inline text-4xl lg:text-[64px] font-staatliches">Midnite Djong, Tripolar, Indiva</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileFocusCard;
