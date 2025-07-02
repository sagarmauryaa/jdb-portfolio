import Link from "next/link"

const links = [
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Contact",
        href: "#contact",
    }];
const Header = () => {
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
                                <Link href={link.href} className="block text-xl text-primary p-2 tracking-tight">
                                    {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header