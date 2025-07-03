import Image from "@/componets/core/image"
import { cn } from "@/utlis/cn"

export const WorkCard = ({ href, name = "", category = "", grid = '', img = { desktop: "", mobile: "", alt: "" } }: { href: string, category?: string, name?: string, grid?: string, img: { common?: string, desktop?: string, mobile?: string, alt: string } }) => {
  return (
    <a href={href} className={cn("block relative rounded-lg border overflow-hidden  ", grid)} target="_blank" rel="noopener noreferrer">
      <Image className="object-cover absolute bottom-0 left-0 w-full h-full" commonSrc={img.common} desktopSrc={img.desktop} mobileSrc={img.mobile} alt={img.alt ?? ''} width={100} height={100} />
      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <p className="font-staatliches text-4xl">{name}</p>
        <p className="text-xl">{category}</p>
      </div>
    </a>
  )
}
