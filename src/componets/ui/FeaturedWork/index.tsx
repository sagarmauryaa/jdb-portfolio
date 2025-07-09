import { SonicWorkCard } from "../SonicWorkCard";
import { WorkCard } from "../WorkCard";


const FeaturedWork = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6" id="featured-work">
            <h2 className="aspect-[259/250] col-span-1 rounded-lg text-primary p-2 lg:p-4 border text-left flex justify-start items-start transition-colors duration-200  bg-primary text-white w-fit md:w-full">
                <span className="items-start">
                    <span className="inline workHeading">Featured<br />
                        Work</span>
                    <sup className='workSuperscript'>(3)</sup>
                </span>
            </h2> 
        <SonicWorkCard src="/assets/work/sonic-identities/audio/0.mp3" img={{ common: "/assets/work/sonic-identities/0.webp", alt: "" }} grid="aspect-[259/250] grid lg:hidden col-span-1 mobile" />
            <WorkCard img={{ desktop: "/assets/work/flims/desktop/1.png", mobile: "/assets/work/flims/mobile/1.png", alt: "" }} name="O Maara" category="" href="https://www.youtube.com/watch?v=jNUINOVYYoE&ab_channel=SaregamaTamil" grid="col-span-2 lg:col-span-3 row-span-2 --full-width aspect-[351/222] lg:aspect-[826/524]" />
            <WorkCard img={{ desktop: "/assets/work/flims/1-desktop.png", mobile: "/assets/work/flims/1-mobile.png", alt: "" }} name="Raymond" category="" href="https://www.youtube.com/watch?v=0f4oNqvli4k&ab_channel=EthnixByRaymond" grid="col-span-2 lg:col-span-1 row-span-2 --full-width aspect-[351/222] lg:aspect-[259/524]" />
            <SonicWorkCard src="/assets/work/sonic-identities/audio/0.mp3" img={{ common: "/assets/work/sonic-identities/0.webp", alt: "" }} grid="aspect-[259/250] lg:block hidden" /> 
        </section>
    )
}

export default FeaturedWork