import { IoMdHeart } from "react-icons/io"

export const Footer = () => {
  return(
    <footer className="h-14 w-full flex items-center justify-center bg-zinc-950">
      <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400">Made by 
        <IoMdHeart size={13} className="text-amber-500"/>
        <strong className="font-medium">Gabriel Augusto</strong>
      </span>
    </footer>
  )
}