import Image from "@/componets/core/image"

const About = () => {
    return (
        <section id="about" className="w-full h-full relative border rounded-lg flex items-center justify-end overflow-hidden p-4 md:p-6 ">
            <div className="absolute bottom-0 left-0 w-full h-full ">
                <Image desktopSrc="/assets/about/desktop.png" mobileSrc="/assets/about/mbile.png" alt="" priority width={1392} height={720} className="top-0 left-0 object-cover w-full h-full z-[0]" />
            </div>
            <p className="text-[16px] md:text-xl leading-snug md:w-1/2 w-full py-10 font-normal relative text-white">Hey there! I’m a musician—but before all the notes and noise, I’m a human being and a full-time animal lover. (Enzo, my Labrador, insists I lead with that.)<br /><br />

                By day (and let’s be real, often by night), I compose, direct, and produce music. I’m based in Mumbai and have been telling stories through sound for over a decade—across films, web series, ads, and artist collabs. From intense drama scores to quirky jingles for food commercials, I live for that moment when the music locks in perfectly with the emotion. You know the one.<br /><br />

                Since 2022, I’ve been crafting sonic identities at BrandMusiq, helping brands find their sound—because every brand deserves a voice as unique as their story.<br /><br />

                Outside of client work, I jam with two bands: Midnite Djong (don’t ask about the name—it’s a vibe) and indiva, where the music’s always flowing and the grooves are real.<br /><br />

                When I’m not glued to Cubase (yes, it’s the best DAW—don’t @ me), I’m usually noodling on guitars, chasing tone, or more likely, being judged by Enzo for playing the wrong chord. He’s four, fluffy, and has surprisingly strong opinions about Metal, Jazz and Blues. You miss a cue, he will walk out of the room.</p>
        </section>
    )
}

export default About