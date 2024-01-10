"use client"
import Image from "next/image"
import { useState } from "react"

const ActivityCard = ({
  userImg,
  userName,
  title,
  text,
}: {
  userImg?: string
  userName?: string
  title?: string
  text?: string
}) => {
  const [showMore, setShowMore] = useState(false)

  const truncateText = (str: string, n: number) => {
    if (str.length < n) {
      return str
    } else {
      return str.substring(0, str.lastIndexOf(" ", n)) + "..."
    }
  }

  return (
    <div className="max-w-[366px] w-full">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <Image
            src={userImg || "https://dummyimage.com/48x48.png/C4C4C4/000000"}
            width={48}
            height={48}
            className="rounded-full border-2 border-[#EFEFEF]"
            alt={userName || "User Name"}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-1">
            <p className="text-base">{title || "Your Title Here"}</p>

            <p className="text-sm italic text-[#858585]">
              <span>2</span> <span>hours</span> ago by{" "}
              <span className=" font-medium text-black ">
                {userName || "John Smith"}
              </span>
            </p>
          </div>

          {text ? (
            <p className="text-sm text-[#6A6A6A]">
              {showMore ? text : truncateText(text, 128)}

              {text.length < 128 ? null : (
                <button
                  className="inline-block ml-1 text-blue-2"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Read less" : "Read more"}
                </button>
              )}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
