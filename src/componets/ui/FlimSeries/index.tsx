import { WorkCard } from "../WorkCard";
import { motion } from "framer-motion"


const FlimSeries = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 flimWork" id="films-series">
            <h2 className="aspect-[259/250] lg:aspect-[524/250] col-span-1 lg:col-span-2 p-2 md:p-4 rounded-lg border text-left flex justify-start items-start bg-black text-white md:w-full">
                <motion.span className="items-start "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="inline workHeading text-pretty">Flims <br/>& Series</span>
                    <sup className='workSuperscript'>(7)</sup>
                </motion.span>
            </h2>
            <p className="aspect-[259/250] lg:aspect-[524/250]  lg:col-span-2  rounded-lg text-black p-2 md:p-4 border text-left justify-start items-start text-2xl md:text-[32px] text-pretty w-full leading-snug hidden lg:flex font-medium ">
                Thug Life - AR Rahman • Adda  •  Spook Seekers •
                Oh! Mother
            </p>
            <p className="aspect-[259/250] lg:aspect-[524/250]  lg:col-span-2  rounded-lg text-black p-2 md:p-4 border text-left justify-start items-start text-2xl md:text-[32px] text-pretty md:w-full leading-none flex lg:hidden font-medium">
                Thug Life - AR Rahman • Adda  •  Spook Seekers •
                Oh! Mother
            </p> 
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/0.png", mobile: "/assets/work/flims/mobile/0.png", alt: "" }} name="Thik Bhul" category="Film: Adda" href="https://www.youtube.com/watch?v=BFk6dJvWNbw&ab_channel=MaximPictures" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/1.png", mobile: "/assets/work/flims/mobile/1.png", alt: "" }} name="O Maara" category="Film: Thug Life" href="https://www.youtube.com/watch?v=jNUINOVYYoE&ab_channel=SaregamaTamil" grid="col-span-2 lg:col-span-3 row-span-2 --full-width aspect-[351/222] lg:aspect-[826/524]   --full" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/2.png", mobile: "/assets/work/flims/mobile/2.png", alt: "" }} name="Shut Up" category="Film: Adda" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/3.png", mobile: "/assets/work/flims/mobile/3.png", alt: "" }} name="Oh Ma! bengali" category="Series: Oh! Mother" href="https://www.youtube.com/watch?v=ByzThabh0t8&ab_channel=pshiftbis" grid="aspect-[170/220] lg:aspect-[259/250]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/4.png", mobile: "/assets/work/flims/mobile/4.png", alt: "" }} name="Spook Seekers" category="Short Film" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/5.png", mobile: "/assets/work/flims/mobile/5.png", alt: "" }} name="Oh Ma! Hindi" category="Series: Oh! Mother" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/flims/desktop/6.png", mobile: "/assets/work/flims/mobile/6.png", alt: "" }} name="Ami Chini Go" category="Film: Adda" href="https://www.youtube.com/watch?v=jNUINOVYYoE&ab_channel=SaregamaTamil" grid="col-span-1 lg:col-span-3 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[826/524]" />
        </section>
    )
}

export default FlimSeries