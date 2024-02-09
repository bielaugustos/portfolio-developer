import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-amber-500 transition-colors">
       made with
        <IoMdHeart size={13} className="text-amber-500" />
        2024
        <strong className="font-medium">@ Gabriel Augusto</strong>
      </span>
    </footer>
  )
}
