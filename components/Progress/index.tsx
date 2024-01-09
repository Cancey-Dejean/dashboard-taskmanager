import { twMerge } from "tailwind-merge"

const Progress = ({
  timeLeft,
  percentage,
  className,
}: {
  timeLeft: number
  percentage: number
  className?: string
}) => {
  return (
    <div className={twMerge("flex flex-col gap-[10px]", className)}>
      <div className="flex gap-4 justify-between items-center text-sm ">
        <p>{timeLeft || 3} days left</p>
        <p className="text-blue">{percentage || 35}%</p>
      </div>

      <div className="bg-[#D9D9D9] h-3 rounded-3xl">
        <div
          className="bg-blue h-3 rounded-3xl"
          style={{
            width: percentage || 35 + "%",
          }}
        />
      </div>
    </div>
  )
}

export default Progress
