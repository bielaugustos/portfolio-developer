'use client'

import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"; //hook para saber se link está ativo(ou em hover)

type NavItemProps = {
  label: string,
  href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  // essa é uma validação se o usuario estiver na rota selecionada
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
    className={cn( "text-zinc-400 items-center flex gap-2 text-sm font-medium hover:text-amber-400 transition-colors",
    isActive && 'text-amber-400',)}>
      <span 
        className="text-zinc-400 font-mono hover:text-amber-400 transition-colors"
        >#</span>{label}
    </Link>
  )
}