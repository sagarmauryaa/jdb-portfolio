import React from 'react'
import { WorkCard } from '../WorkCard'
import { cn } from '@/utlis/cn';
interface WorkItem {
    href: string;
    name: string;
    category?: string;
    grid?: string;
    rowSpan?: string;
}
const WorkSection = ({ category, grid, items }: { category: string, grid: string, items: WorkItem[] }) => {
    if (items.length === 0) {
        return null;
    }
    return (
        <section id={category.toLowerCase().replace('-', '')} className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            <h2 className={cn("rounded-lg text-[40px] lg:text-5xl  xl:text-6xl 2xl:text-[64px] font-bold bg-primary font-staatliches text-white p-4 lg:leading-11 xl:leading-13  2xl:leading-14", grid)}>
                {category}<sup className='font-satoshi text-xs md:text-[16px] align-super relative lg:-top-1.5 xl:-top-2.5'>&nbsp;({items.length})</sup>
            </h2>
            {items.map((item, index) => {
                if (item.name && item.href) {
                    return (
                        <WorkCard
                            key={index}
                            href={item.href}
                            name={item.name}
                            grid={item.grid}
                            category={item.category ?? category}
                        />
                    );
                }
                return null;
            })}
        </section>
    )
}

export default WorkSection