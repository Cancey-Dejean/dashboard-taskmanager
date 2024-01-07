"use client"
import Image from "next/image"
import { useState } from "react"

type Props = {
  text?: string
}

const ActivityCard = ({
  text = "Lorem ipsum dolor sit amet coLorem ipsum dolor sit amet coLorem ipsum dolor sit amet coLorem ipsum dolor sit amet coLorem ipsum dolor sit amet coLorem ipsum dolor sit amet coLorem ipsum dolor sit amet colop",
}: Props) => {
  const [showMore, setShowMore] = useState(false)

  const truncateText = (str: string, n: number) => {
    return str.length > n
      ? str.substring(0, str.lastIndexOf(" ", n)) + "..."
      : str
  }

  return (
    <div className="max-w-[366px] w-full">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <Image
            src="https://dummyimage.com/48x48.png/C4C4C4/000000"
            width={48}
            height={48}
            className="rounded-full border-2 border-[#EFEFEF]"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-1">
            <p className="text-base">Your Title Here</p>
            <p className="text-sm italic text-[#858585]">
              2 hours ago by{" "}
              <span className=" font-medium text-black ">Jame Thrones</span>
            </p>
          </div>

          <p className="text-sm text-[#6A6A6A]">
            {showMore ? text : truncateText(text, 128)}

            <button
              className="inline-block ml-1 text-blue-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
