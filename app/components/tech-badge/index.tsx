type TechBadgeProps = {
  name:string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-amber-50 bg-amber-600 text-xs py-1 px-3 rounded-lg hover:bg-amber-500">{name}</span>
  )
}