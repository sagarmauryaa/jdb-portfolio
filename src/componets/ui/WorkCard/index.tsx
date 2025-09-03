import Image from "@/componets/core/image"
import { cn } from "@/utlis/cn"

export const WorkCard = ({ href, name = "", category = "", grid = '', img = { desktop: "", mobile: "", alt: "", }, hasBrand = true }: { href: string, category?: string, name?: string, grid?: string, img: { common?: string, desktop?: string, mobile?: string, alt: string }, hasBrand?: boolean }) => {
  return (
    <a href={href} className={cn("block relative rounded-lg border overflow-hidden  group", grid)} target="_blank" rel="noopener noreferrer">
      {
        hasBrand &&
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute z-[2] top-4 left-4" width="24" height="43" viewBox="0 0 24 43" fill="white" aria-hidden="true">
          <path d="M1.597 16.776s2.849-.199 4.048.086c1.664.394 4.339 1.94 4.047 4.988-.26 2.689-3.32 2.934-4.9 2.382-2.108-.737-4.789-2.948-4.789-5.95V.708L1.597 0v16.776Z" />
          <path d="M22.373 25.559s-2.993.288-4.238-.005c-1.728-.409-4.614-2.03-4.206-5.182.446-3.437 3.451-3.048 5.096-2.472 2.191.766 4.976 3.063 4.976 6.183v18.259l-1.598.659-.026-17.438-.004-.004Z" />
        </svg>
      }
      <Image className="object-cover absolute bottom-0 left-0 w-full h-full group-hover:scale-110 transition-transform duration-400" commonSrc={img.common} desktopSrc={img.desktop} mobileSrc={img.mobile} alt={img.alt ?? ''} width={100} height={100} />
      {
        (name || category) &&
        <div className="absolute bottom-0 left-0 w-full h-fit flex flex-col justify-end min-h-20 md:min-h-32 gap-1 p-2 md:p-4 text-white"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 100%)"
          }}
        >
          <p className="workCardTitle w-40 md:w-full">{name}</p>
          <p className="text-xs md:text-base m-0 p-0 leading-none font-medium md:font-normal">{category}</p>
        </div>
      }
    </a>
  )
}
