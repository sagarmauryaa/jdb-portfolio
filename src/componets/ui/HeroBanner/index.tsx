import Image from "@/componets/core/image"

const HeroBanner = () => {
    return (
        <section className="w-full banner h-full relative border rounded-lg overflow-hidden">
            <Image desktopSrc="/assets/banner/desktop.png" mobileSrc="/assets/banner/mobile.png" alt="" priority width={1392} height={720} className="top-0 left-0 object-cover w-full h-full z-0" />
            <h1 className="text-[28px]  md:text-5xl absolute bottom-0 left-0 p-4 md:p-6 text-white">
                Music Composer<br />
                Producer<br />
                Sonic Architect<br />
                Dog Dad<br />
            </h1>
        </section>
    )
}

export default HeroBanner