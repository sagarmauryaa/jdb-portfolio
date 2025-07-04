'use client';

const work = [
    {
        title: "sonic identities",
        href: "#sonic-identities",
        count: 7
    },
    {
        title: "ads",
        href: "#ads",
        count: 19
    },
    {
        title: "originals",
        href: "#originals",
        count: 4
    },
    {
        title: "PRODUCED FOR ARTISTS",
        href: "#produced-for-artists",
        count: 2
    }, {
        title: "films & series",
        href: "#films-series",
        count: 7
    }
]
const Categories = () => {
    return (
        <section  className="flex flex-row overflow-x-scroll xl:overflow-hidden xl:grid md:grid-cols-5 gap-4 md:gap-6 slider md:w-full">
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
                        className="aspect-[259/250] bg-white rounded-lg text-primary p-4 border text-left flex justify-start items-start transition-colors duration-200 hover:bg-primary  hover:text-white shrink-0 w-1/2 xl:w-full cursor-pointer"
                        type="button"
                    >
                        <span className="items-start">
                            <span className="inline font-staatliches text-[40px] lg:text-5xl xl:text-5xl 2xl:text-[64px] leading-none lg:leading-11 xl:leading-13 2xl:leading-14">{item.title}</span>
                            <sup className='text-xs md:text-[16px] relative -top-5 xl:-top-8 font-medium'>({item.count})</sup>
                        </span>
                    </button>
                ))
            }
        </section>
    )
}

export default Categories