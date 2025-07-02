import { cn } from "@/utlis/cn"

export const WorkCard = ({ href, name, category, grid = '' }: { href: string, category: string, name: string, grid?: string }) => {
  return (
    <a href={href} className={cn("block relative rounded-lg border overflow-hidden  text-white bg-primary", grid)} target="_blank" rel="noopener noreferrer">
      {/* <Image c/> */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <p className="font-staatliches text-4xl">{name}</p>
        <p className="text-xl">{category}</p>
      </div>
    </a>
  )
}
