'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'


type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name:string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span className="text-amber-50 bg-amber-600 text-xs py-1 px-3 rounded-lg hover:bg-amber-500"
    {...props}
    >{name}</motion.span>
  )
}