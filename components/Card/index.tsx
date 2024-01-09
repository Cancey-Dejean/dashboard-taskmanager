import Image from "next/image"
import TagItem from "../TagItem"
import {
  ChatIcon,
  IconClock,
  IconEye,
  IconTag,
  IconThreeDots,
  IconThreeLines,
} from "../Icons"
import UserRow from "../UserRow"
import IconNumber from "../IconNumber"
import Progress from "../Progress"

const userImgs = [
  {
    imgSrc: "https://dummyimage.com/30x30.png/C4C4C4/000000",
    name: "Name 1",
  },
  {
    imgSrc: "https://dummyimage.com/30x30.png/C4C4C4/000000",
    name: "Name 2",
  },
  {
    imgSrc: "https://dummyimage.com/30x30.png/C4C4C4/000000",
    name: "Name 3",
  },
  {
    imgSrc: "https://dummyimage.com/30x30.png/C4C4C4/000000",
    name: "Name 4",
  },
  {
    imgSrc: "https://dummyimage.com/30x30.png/C4C4C4/000000",
    name: "Name 5",
  },
]

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[356px] mx-auto w-full p-6 rounded-[10px] bg-white flex flex-col gap-4">
      <div className="flex gap-4 justify-between items-start">
        <div className="text-[#6A6A6A] flex flex-col gap-1">
          <h3 className=" text-[#202226] font-semibold text-xl">
            Mobile App Development
          </h3>
          <p className="font-medium">Project Manager - Richy Gang</p>
          <div className="flex text-sm gap-[10px] items-center">
            <div>
              <IconClock />
            </div>

            <p>Mon, Aug 24 - Tue, Aug 26</p>
          </div>
        </div>

        <button>
          <IconThreeDots />
        </button>
      </div>

      <div className="grid grid-cols-[auto_1fr]  gap-[10px]">
        <div className="mt-[6px]">
          <IconTag />
        </div>

        <div className="flex items-center gap-[10px] flex-wrap">
          <TagItem label="Ads" />
          <TagItem label="Illustration" variant="red" />
        </div>
      </div>

      <div>
        <Image
          src="https://dummyimage.com/356x170.png/C4C4C4/000000"
          width={356}
          height={170}
          className="rounded-[10px]"
          alt="Card Image"
        />
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-[10px]">
        <Progress timeLeft={4} percentage={22} />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-3">
          {/* Users Row */}
          <UserRow users={userImgs} />
        </div>

        <div className="flex item gap-6">
          <IconNumber icon={<IconEye />} number={22} />
          <IconNumber icon={<ChatIcon activeMessages={false} />} number={9} />
          <IconNumber icon={<IconThreeLines />} number={5} />
        </div>
      </div>
    </div>
  )
}

export default Card
