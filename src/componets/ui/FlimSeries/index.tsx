import { WorkCard } from "../WorkCard";


const FlimSeries = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 flimWork" id="films-series">
            <p className="aspect-[259/250] lg:aspect-[524/250]  lg:col-span-2  rounded-lg text-primary p-2 md:p-4 border text-left justify-start items-start text-2xl md:text-4xl text-pretty font-staatliches w-full leading-none lg:leading-snug hidden lg:flex">
                AR Rahman • Adda  •  Spook Seekers •
                Oh! Mother
            </p>
            <h2 className="aspect-[259/250] lg:aspect-[524/250] col-span-1 lg:col-span-2 p-2 md:p-4 rounded-lg text-primary border text-left flex justify-start items-start bg-primary text-white md:w-full">
                <span className="items-start ">
                    <span className="inline font-staatliches text-[40px] lg:text-5xl xl:text-5xl 2xl:text-[64px] leading-none lg:leading-11 xl:leading-13 2xl:leading-14 text-white text-pretty">Flims & Series</span>
                    <sup className='text-xs md:text-[16px] text-white relative -top-5 xl:-top-8 font-medium'>(7)</sup>
                </span>
            </h2>
            <p className="aspect-[259/250] lg:aspect-[524/250]  lg:col-span-2  rounded-lg text-primary p-2 md:p-4 border text-left justify-start items-start text-2xl md:text-4xl text-pretty font-staatliches md:w-full leading-none lg:leading-snug flex lg:hidden">
                AR Rahman • Adda  •  Spook Seekers •
                Oh! Mother
            </p> 
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/0.png", mobile: "/assets/work/flims/mobile/0.png", alt: "" }} name="Thik Bhul" category="Film: Adda" href="https://www.youtube.com/watch?v=BFk6dJvWNbw&ab_channel=MaximPictures" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/1.png", mobile: "/assets/work/flims/mobile/1.png", alt: "" }} name="O Maara" category="Film: Thug Life" href="https://www.youtube.com/watch?v=jNUINOVYYoE&ab_channel=SaregamaTamil" grid="col-span-2 lg:col-span-3 row-span-2 --full-width aspect-[351/222] lg:aspect-[826/524]   --full" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/2.png", mobile: "/assets/work/flims/mobile/2.png", alt: "" }} name="Shut Up" category="Film: Adda" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/3.png", mobile: "/assets/work/flims/mobile/3.png", alt: "" }} name="Oh Ma! bengali" category="Series: Oh! Mother" href="https://www.youtube.com/watch?v=ByzThabh0t8&ab_channel=pshiftbis" grid="aspect-[170/220] lg:aspect-[259/250]" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/4.png", mobile: "/assets/work/flims/mobile/4.png", alt: "" }} name="Spook Seekers" category="Short Film" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/5.png", mobile: "/assets/work/flims/mobile/5.png", alt: "" }} name="Oh Ma! Hindi" category="Series: Oh! Mother" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/6.png", mobile: "/assets/work/flims/mobile/6.png", alt: "" }} name="Ami Chini Go" category="Film: Adda" href="https://www.youtube.com/watch?v=jNUINOVYYoE&ab_channel=SaregamaTamil" grid="col-span-1 lg:col-span-3 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[826/524]" />
        </section>
    )
}

export default FlimSeries