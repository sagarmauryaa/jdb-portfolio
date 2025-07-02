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
        <section id="categories" className="flex flex-row overflow-x-scroll lg:overflow-visible xl:grid md:grid-cols-5 gap-4 md:gap-6 slider md:w-full">
            {
                work.map((item, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            const el = document.querySelector(item.href);
                            if (el) {
                                const yOffset = -80; // adjust offset as needed
                                const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }
                        }
                        className="aspect-[259/254] bg-white rounded-lg text-[40px] lg:text-5xl xl:text-5xl 2xl:text-[64px] font-bold font-staatliches text-primary p-4 lg:leading-11 xl:leading-13 2xl:leading-14 border text-left flex justify-start items-start transition-colors duration-200 hover:bg-primary leading-none hover:text-white shrink-0 w-1/2 xl:w-full"
                        style={{ cursor: 'pointer' }}
                        type="button"
                    >
                        <span className="items-start">
                            <span className="inline">{item.title}</span>
                            <sup className='font-satoshi text-xs md:text-[16px] relative -top-5'>&nbsp;({item.count})</sup>
                        </span>
                    </button>
                ))
            }
        </section>
    )
}

export default Categories