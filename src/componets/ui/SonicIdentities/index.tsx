import { SonicWorkCard } from "../SonicWorkCard" 
import { motion } from "framer-motion"

const SonicIdentities = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6" id="sonic-identities">
      <h2
        className="--full-width aspect-[351/162] lg:aspect-[826/250] col-span-2 lg:col-span-3 rounded-lg text-primary p-2 lg:p-4 border text-left flex justify-start items-start transition-colors duration-200  bg-primary text-white"
      >
        <motion.span className="items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline workHeading">Sonic<br /> Identities</span>
          <sup className='workSuperscript'>(7)</sup>
        </motion.span>
      </h2>
      <SonicWorkCard src="/assets/work/sonic-identities/audio/0.mp3" img={{ common: "/assets/work/sonic-identities/0.webp", alt: "" }}grid="aspect-[259/250]" />  
      <SonicWorkCard src="/assets/work/sonic-identities/audio/1.mp3" img={{ common: "/assets/work/sonic-identities/1.webp", alt: "" }}grid="aspect-[259/250]" />     
      <SonicWorkCard src="/assets/work/sonic-identities/audio/2.mp3" img={{ common: "/assets/work/sonic-identities/2.webp", alt: "" }}grid="aspect-[259/250]" />     
      <SonicWorkCard src="/assets/work/sonic-identities/audio/3.mp3" img={{ common: "/assets/work/sonic-identities/3.webp", alt: "" }}grid="aspect-[259/250]" />     
      <SonicWorkCard src="/assets/work/sonic-identities/audio/4.mp3" img={{ common: "/assets/work/sonic-identities/4.webp", alt: "" }}grid="aspect-[259/250]" />     
      <SonicWorkCard src="/assets/work/sonic-identities/audio/5.mp3" img={{ common: "/assets/work/sonic-identities/5.webp", alt: "" }}grid="aspect-[259/250]" />     
      <SonicWorkCard src="/assets/work/sonic-identities/audio/6.mp3" hasBrand={false} img={{ common: "/assets/work/sonic-identities/6.webp", alt: "" }}grid="aspect-[259/250]" />     
    </section>
  )
}

export default SonicIdentities