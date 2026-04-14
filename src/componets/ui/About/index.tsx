import Image from "@/componets/core/image"

const About = () => {
    return (
        <section id="about" className="w-full h-full relative border rounded-lg flex items-center justify-end overflow-hidden p-4 md:p-6 ">
            <div className="absolute bottom-0 left-0 w-full h-full ">
                <Image desktopSrc="/assets/about/desktop.webp" mobileSrc="/assets/about/mobile.webp" alt="" priority width={1392} height={720} className="top-0 left-0 object-cover w-full h-full z-[0]" />
            </div>
            <p className="text-xl md:text-2xl leading-snug md:w-1/2 w-full py-12 md:py-24 font-medium relative text-white">
                I make music. I compose, direct, produce, and play live. Mumbai is home, but my work travels everywhere.<br /><br />Over the past ten years, I’ve scored films, web series, ads, and collaborations with artists across styles. From gritty dramas to playful food commercials, I’m always chasing that one moment where the sound fits perfectly with the feeling.<br /><br />Over the past few years I've worked across sonic branding, ad films, and short-form content. Some of the brands I've collaborated on include Air India, Raymond, Asian Paints, Federal Bank, Nippon, ConfirmTkt, MMA Smarties, Myy Sports, Income and Red Taxi. In 2025 I moved independent, and now work directly with brands and agencies.</p>
        </section>
    )
}

export default About