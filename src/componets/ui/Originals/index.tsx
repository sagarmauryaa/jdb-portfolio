import { WorkCard } from "../WorkCard"; 


const Originals = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6" id="originals">
            <h2 className="aspect-[351/222] lg:aspect-[524/250] col-span-2 lg:col-span-2  rounded-lg text-primary p-4 border text-left flex justify-start items-start transition-colors duration-200  bg-primary text-white w-full">
                <span className="items-start">
                    <span className="inline font-staatliches text-[40px] lg:text-5xl xl:text-5xl 2xl:text-[64px] leading-none lg:leading-11 xl:leading-13 2xl:leading-14 text-white">Originals</span>
                    <sup className='text-xs md:text-[16px] text-white relative -top-5 xl:-top-8 font-medium'>(4)</sup>
                </span>
            </h2> 
            <WorkCard img={{ desktop: "/assets/work/originals/desktop/0.png", mobile: "/assets/work/originals/mobile/0.png", alt: "" }} name="Midnite Djong" category="Spotify" href="https://open.spotify.com/artist/4kIsd6vtW4fxTPDMyNcLdC" grid="col-span-2 lg:col-span-3 row-span-2 aspect-[351/222] lg:aspect-[826/524]" />
            <WorkCard img={{ desktop: "/assets/work/originals/desktop/1.png", mobile: "/assets/work/originals/mobile/1.png", alt: "" }} name="Joydeep Banerji" category="Originals" href="https://www.youtube.com/watch?v=OdmyNnaya4Y&ab_channel=JoydeepBanerji" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" /> 
            <WorkCard img={{ desktop: "/assets/work/originals/desktop/2.png", mobile: "/assets/work/originals/mobile/2.png", alt: "" }} name="Tripolar" category="YouTube" href="https://www.youtube.com/watch?v=7h9w3H93M0o&ab_channel=TripolarTV" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" /> 
            <WorkCard img={{ desktop: "/assets/work/originals/desktop/3.png", mobile: "/assets/work/originals/mobile/3.png", alt: "" }} name="the pulse construct" category="Spotify" href="https://www.youtube.com/watch?v=ByzThabh0t8&ab_channel=pshiftbis" grid="col-span-2 lg:col-span-3 aspect-[351/222] lg:aspect-[826/250]" /> 
        </section>
    )
}

export default Originals