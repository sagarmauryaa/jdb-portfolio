import { WorkCard } from "../WorkCard";
import { motion } from "framer-motion"


const AdsWork = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 adsWork" id="ads">
            <h2 className="col-span-2 lg:col-span-1 row-span-2 --full-width aspect-[351/162] lg:aspect-[259/524] rounded-lg text-primary p-2 lg:p-4 border text-left flex justify-start items-start transition-colors duration-200  bg-primary text-white">
                <motion.span className="items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}>
                    <span className="inline workHeading">Ads</span>
                    <sup className='workSuperscript'>(19)</sup>
                </motion.span>
            </h2>
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/ads/desktop/0.webp", mobile: "/assets/work/ads/mobile/0.webp", alt: "" }} name="Caratlane" category="Ads" href="https://www.youtube.com/watch?v=iK2oPfFaIik&ab_channel=Caratlane" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/ads/desktop/1.webp", mobile: "/assets/work/ads/mobile/1.webp", alt: "" }} name="Razorpay" category="Ads" href="https://www.youtube.com/watch?app=desktop&fbclid=PAAaY01bwXN2uvyHH_Aa0Fkyawh8sTtzXKQa97GbMwcunNY8zSbcNbXQCotzI&v=cQe5uK3SD1s&feature=youtu.be&ab_channel=Razorpay" grid="aspect-[170/220] lg:aspect-[826/524] col-span-1 lg:col-span-3 row-span-1 lg:row-span-2" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/ads/desktop/2.webp", mobile: "/assets/work/ads/mobile/2.webp", alt: "" }} name="Caratlane" category="Ads" href="https://www.youtube.com/watch?v=Ppo8T4tKXOY&ab_channel=Caratlane" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/ads/desktop/3.webp", mobile: "/assets/work/ads/mobile/3.webp", alt: "" }} name="Pigeon India" category="Ads" href="https://www.youtube.com/watch?v=Cudx5RQnA3I&ab_channel=PigeonIndia" grid="col-span-1 lg:col-span-3 row-span-2 aspect-[170/220] lg:aspect-[826/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/ads/desktop/4.webp", mobile: "/assets/work/ads/mobile/4.webp", alt: "" }} name="Caratlane" category="Ads" href="https://www.youtube.com/watch?v=2DZRyys1cSs&ab_channel=Caratlane" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/5.webp", mobile: "/assets/work/ads/mobile/5.webp", alt: "" }} name="Raymond" category="Ads" href="https://www.youtube.com/watch?v=0f4oNqvli4k&ab_channel=EthnixByRaymond" grid="col-span-1 lg:col-span-3 row-span-1 md:row-span-2 aspect-[170/220] lg:aspect-[826/524]" />
            <WorkCard hasBrand={false} img={{ desktop: "/assets/work/ads/desktop/6.webp", mobile: "/assets/work/ads/mobile/6.webp", alt: "" }} name="Goel TMT" category="Ads" href="https://www.youtube.com/watch?v=JfJAvA_Tmqg&ab_channel=GOELTMT" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/7.webp", mobile: "/assets/work/ads/mobile/7.webp", alt: "" }} name="Raymond" category="Ads" href="https://www.instagram.com/reel/C2BtSvbod3Z/?igsh=dzZla2VxZ2hsNDdo" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/8.webp", mobile: "/assets/work/ads/mobile/8.webp", alt: "" }} name="Asian Paints" category="Ads" href="https://www.instagram.com/reel/DJveVt0IPM0/?igsh=d2I5dmRxMDhucWFr" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/9.webp", mobile: "/assets/work/ads/mobile/9.webp", alt: "" }} name="Asian Paints" category="Ads" href="https://www.instagram.com/reel/DJvmxLZIrmI/?igsh=cHB6dHZra3R0Ymky" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/10.webp", mobile: "/assets/work/ads/mobile/10.webp", alt: "" }} name="Asian Paints" category="Ads" href="https://www.instagram.com/reel/DJvkgEzIsf8/?igsh=MWs1cjV2eTZleDd5OA%3D%3D" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/11.webp", mobile: "/assets/work/ads/mobile/11.webp", alt: "" }} name="Asian Paints" category="Ads" href="https://www.instagram.com/reel/DJvfU5Oom-v/?igsh=MTFzZHg0YnM0eTR0MA%3D%3D" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/12.webp", mobile: "/assets/work/ads/mobile/12.webp", alt: "" }} name="Air India" category="Ads" href="https://www.instagram.com/p/C7UN8vQNC-w/" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/13.webp", mobile: "/assets/work/ads/mobile/13.webp", alt: "" }} name="Air India" category="Ads" href="https://www.instagram.com/reel/C84SYGUyY9C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/14.webp", mobile: "/assets/work/ads/mobile/14.webp", alt: "" }} name="Asian Paints" category="Ads" href="https://www.youtube.com/watch?v=QuCFWqViV6I&ab_channel=AsianPaints" grid="col-span-1 lg:col-span-3 row-span-2 aspect-[170/220] lg:aspect-[826/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/15.webp", mobile: "/assets/work/ads/mobile/15.webp", alt: "" }} name="Federal Bank" category="Ads" href="https://www.youtube.com/watch?v=vGDEU8qb-tg&ab_channel=FederalBank" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/16.webp", mobile: "/assets/work/ads/mobile/16.webp", alt: "" }} name="Nippon India" category="Ads" href="https://www.youtube.com/watch?v=S8-yEMwn8a8&ab_channel=NipponIndiaMutualFund" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/17.webp", mobile: "/assets/work/ads/mobile/17.webp", alt: "" }} name="Air India" category="Ads" href="https://www.youtube.com/watch?v=ZRyIkmQL5nI&ab_channel=AirIndiaOfficial" grid="col-span-1 row-span-1 lg:row-span-2 aspect-[170/220] lg:aspect-[259/524]" />
            <WorkCard img={{ desktop: "/assets/work/ads/desktop/18.webp", mobile: "/assets/work/ads/mobile/18.webp", alt: "" }} name="Asian Paints" category="Ads" href="https://www.youtube.com/watch?v=dynGK7IbfsU&ab_channel=AsianPaints" grid="col-span-1 lg:col-span-3 row-span-2 --full-width aspect-[351/222] lg:aspect-[170/220] lg:aspect-[826/524]" />
        </section>
    )
}

export default AdsWork