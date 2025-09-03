import { WorkCard } from "../WorkCard"; 


const ProducedArtists = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6" id="produced-for-artists">
            <h2 className="col-span-2 lg:col-span-1 row-span-2 --full-width aspect-[351/162] lg:aspect-[259/524] rounded-lg text-primary p-2 lg:p-4 border text-left flex justify-start items-start transition-colors duration-200  bg-primary text-white">
                <span className="items-start">
                    <span className="inline workHeading">Produced<br/>for<br/>
                        Artists</span>
                    <sup className='workSuperscript'>(2)</sup>
                </span>
            </h2>
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/produced-for-artists/desktop/0.png", mobile: "/assets/work/produced-for-artists/mobile/0.png", alt: "" }} name="Hum" category="Sanaea Bubber" href="https://www.youtube.com/watch?v=8k6Q-4sDp6U&ab_channel=SanaeaBubber-Topic" grid="row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" /> 
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/produced-for-artists/desktop/1.png", mobile: "/assets/work/produced-for-artists/mobile/1.png", alt: "" }} name="Infatuated" category="Asmi Aderay" href="https://www.youtube.com/watch?v=Ax4kitPdNy4&ab_channel=AsmiAderay-Topic" grid="aspect-[170/220] lg:aspect-[826/524] col-span-1 lg:col-span-3 row-span-1 lg:row-span-2" />
           </section>
    )
}

export default ProducedArtists