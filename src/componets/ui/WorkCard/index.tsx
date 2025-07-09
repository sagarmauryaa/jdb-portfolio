import Image from "@/componets/core/image"
import { cn } from "@/utlis/cn"

export const WorkCard = ({ href, name = "", category = "", grid = '', img = { desktop: "", mobile: "", alt: "" } }: { href: string, category?: string, name?: string, grid?: string, img: { common?: string, desktop?: string, mobile?: string, alt: string } }) => {
  return (
    <a href={href} className={cn("block relative rounded-lg border overflow-hidden  group", grid)} target="_blank" rel="noopener noreferrer">
      <Image className="object-cover absolute bottom-0 left-0 w-full h-full group-hover:scale-110 transition-transform duration-400" commonSrc={img.common} desktopSrc={img.desktop} mobileSrc={img.mobile} alt={img.alt ?? ''} width={100} height={100} />
      {
        (name || category) &&
        <div className="absolute bottom-0 left-0 w-full h-fit flex flex-col justify-end min-h-20 md:min-h-32 gap-0 md:gap-1 p-2 md:p-4 text-white"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 100%)"
          }}
        >
            <p className="workCardTitle w-40 md:w-full">{name}</p>
          <p className="text-sm md:text-xl m-0 p-0 leading-none ">{category}</p>
        </div>
      }
    </a>
  )
}
