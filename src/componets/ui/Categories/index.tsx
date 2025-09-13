'use client';

const work = [
    {
        title: "Sonic Identities",
        href: "#sonic-identities",
        count: 7
    },
    {
        title: "Ads",
        href: "#ads",
        count: 19
    },
    {
        title: "Originals",
        href: "#originals",
        count: 4
    },
    {
        title: "Produced for Artists",
        href: "#produced-for-artists",
        count: 2
    }, {
        title: "Films & Series",
        href: "#films-series",
        count: 7
    }
]
const Categories = () => {
    return (
        <section  className="flex flex-row overflow-x-scroll xl:overflow-hidden lg:grid md:grid-cols-5 gap-4 md:gap-6 slider md:w-full">
            {
                work.map((item, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.querySelector(item.href);
                            if (el) {
                                const yOffset = -109; // adjust offset as needed
                                const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }
                        }
                        className="aspect-[259/250] bg-white rounded-lg text-primary p-2 md:p-4 border bg-yellow text-left flex justify-start items-start transition-colors duration-200 hover:bg-primary  hover:text-white shrink-0  cursor-pointer"
                        type="button"
                    >
                        <span className="items-start">
                            <span className="inline text-[28px] lg:text-5xl leading-none font-medium lg:font-normal">{item.title}</span>
                            <sup className='text-xs md:text-[16px] relative -top-[13px] md:-top-2.5 lg:-top-5 font-medium'>({item.count})</sup>
                        </span>
                    </button>
                ))
            }
        </section>
    )
}

export default Categories