import { WorkCard } from "../WorkCard"

const SonicIdentities = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6" id="sonic-identities">
      <h2
        className="aspect-[351/222] lg:aspect-[826/250] col-span-2 lg:col-span-3 rounded-lg text-primary p-4 border text-left flex justify-start items-start transition-colors duration-200  bg-primary text-white"
      >
        <span className="items-start">
          <span className="inline font-staatliches text-white text-[40px] lg:text-5xl xl:text-5xl 2xl:text-[64px] leading-none lg:leading-11 xl:leading-13 2xl:leading-14">Sonic<br /> Identities</span>
          <sup className='text-xs text-white  md:text-[16px] relative -top-5 xl:-top-8 font-medium'>(7)</sup>
        </span>
      </h2>
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
      <WorkCard img={{ desktop: "", mobile: "", alt: "" }} name="O Maara" category="Series & Films" href="" grid="aspect-[259/250]" /> 
    </section>
  )
}

export default SonicIdentities