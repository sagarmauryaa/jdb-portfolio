'use client';

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
    const handlScrollTO = (id: string) => {
        const el = document.querySelector(id);
        if (el) {
            const yOffset = -109; // adjust offset as needed
            const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <header className="fixed top-0 z-50 flex items-center justify-between w-full p-3 md:p-6 font-normal">
            <p className="text-lg md:text-xl bg-white p-3 md:p-4 rounded-lg text-primary border">
                Joydeep Banerji
            </p>
            <nav className="p-2 hidden md:block  rounded-lg border bg-white">
                <ul className="flex items-center justify-end text-primary">
                    {
                        links.map((link) => (
                            <li key={link.label} className="">
                                <button type="button" onClick={() => handlScrollTO(link.href)} className="cursor-pointer block text-xl text-primary p-2 tracking-tight">
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