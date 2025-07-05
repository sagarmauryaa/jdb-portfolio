'use client';

import { cn } from "@/utlis/cn";
import { useEffect, useState } from "react";

const links = [
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "About",
        href: "#about",
    }];
const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    const [activeLabel, setActiveLabel] = useState<string>('')
    const handlScrollTO = (id: string, label: string) => {
        const el = document.querySelector(id);
        if (el) {
            const yOffset = -109; // adjust offset as needed
            const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveLabel(label)
        }
    }
    // Set active label on scroll
    useEffect(() => {
        const handleScroll = () => {
            let found = false;
            for (const link of links) {
                const el = document.querySelector(link.href);
                if (el) {
                    const rect = (el as HTMLElement).getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        setActiveLabel(link.label);
                        found = true;
                        break;
                    }
                }
            }
            if (!found || window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                setActiveLabel('Contact');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="fixed top-0 z-50 flex items-start justify-between w-full p-3 md:p-6 font-normal pointer-events-none">
            <p className="text-lg md:text-xl bg-white p-3 md:p-4 rounded-lg text-primary border pointer-events-auto">
                Joydeep Banerji
            </p>
            <nav className="p-2 rounded-lg border bg-white pointer-events-auto">
                {/* Dropdown for mobile */}
                <div className="block md:hidden relative">
                    <button
                        className="p-1 text-primary text-lg md:text-xl flex flex-row items-center gap-1 min-w-28 justify-between"
                        onClick={() => setDropdownOpen((open) => !open)}
                    >
                        {activeLabel}

                        <svg className={cn("w-4 h-4 text-primary" , dropdownOpen ? 'rotate-180' :'')} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"></path>
                        </svg>
                    </button>
                    <div className={cn("grid transition-all", dropdownOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")} tabIndex={!dropdownOpen ? -1 : 0}>
                        <ul className="overflow-hidden ">
                            {links.map((link) => {
                                if (link.label === activeLabel) return null;
                                return (
                                    <li key={link.label}>
                                        <button
                                            type="button"
                                            className="w-full text-left p-1 text-xl hover:bg-gray-100 text-primary"
                                            onClick={() => {
                                                handlScrollTO(link.href, link.label);
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                )
                            })}
                            {
                                ('Contact' !== activeLabel) &&
                                <li>
                                    <button
                                        type="button"
                                        className="w-full text-left p-1 text-xl hover:bg-gray-100 text-primary"
                                        onClick={() => {
                                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                            setDropdownOpen(false);
                                            setActiveLabel('Contact');
                                        }}
                                    >
                                        Contact
                                    </button>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                {/* Desktop nav */}
                <ul className="hidden md:flex items-center justify-end text-primary">
                    {
                        links.map((link) => (
                            <li key={link.label} className="">
                                <button type="button" onClick={() => handlScrollTO(link.href, link.label)} className="cursor-pointer block text-xl text-primary p-2 tracking-tight">
                                    {link.label}
                                </button>
                            </li>
                        ))
                    }
                    <li className="">
                        <button
                            type="button"
                            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                            className="cursor-pointer block text-xl text-primary p-2 tracking-tight"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header