import { twMerge } from "tailwind-merge"

const IconNumber = ({
  icon,
  number,
  className,
}: {
  icon: React.ReactNode
  number: number
  className?: string
}) => {
  return (
    <div className={twMerge("flex items-center gap-[10px]", className)}>
      {icon}

      <span className="text-sm">{number}</span>
    </div>
  )
}

export default IconNumber
