"use client"

import Image from "@/componets/core/image"
import { motion } from "framer-motion"

const HeroBanner = () => {
    return (
        <section className="w-full banner h-full relative border border-white rounded-lg overflow-hidden">
            {/* Animated Image */}
            <motion.div
                initial={{ scale: 1.3, x: 0, y: 0 }}  // start zoomed in (fullscreen feel)
                animate={{ scale: 1, x: 0, y: 0 }}    // shrink to fit container
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    desktopSrc="/assets/banner/desktop.webp"
                    mobileSrc="/assets/banner/mobile.webp"
                    alt=""
                    priority
                    width={1392}
                    height={720}
                    className="object-cover w-full h-full z-0"
                />
            </motion.div>

            {/* Text */}
            <motion.h1
                className="text-[28px] md:text-5xl absolute bottom-0 left-0 p-4 md:p-6 text-white leading-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
                Music Composer <br />
                Producer <br />
                Sonic Architect <br />
                Dog Dad <br />
            </motion.h1>
        </section>
    )
}

export default HeroBanner
