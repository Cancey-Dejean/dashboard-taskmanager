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

const Card = ({
  title,
  assignee,
  dateRange,
  tags,
  previewImage,
  progress,
  userRow,
  watchers,
  messages,
  subtasks,
}: {
  title: string
  assignee?: boolean
  dateRange?: boolean
  tags?: boolean
  previewImage?: boolean
  progress?: boolean
  userRow?: boolean
  watchers?: boolean
  messages?: boolean
  subtasks?: boolean
}) => {
  return (
    <div className="p-6 rounded-[10px] bg-white flex flex-col gap-4">
      <div className="flex gap-4 justify-between items-start">
        <div className="text-[#6A6A6A] flex flex-col gap-1">
          <h3 className=" text-[#202226] font-semibold text-xl">
            {title || "Mobile App Development"}
          </h3>

          {assignee ? (
            <p className="font-medium">Project Manager - Richy Gang</p>
          ) : null}

          {dateRange ? (
            <div className="flex text-sm gap-[10px] items-center">
              <div>
                <IconClock />
              </div>
              <p>Mon, Aug 24 - Tue, Aug 26</p>
            </div>
          ) : null}
        </div>

        <button>
          <IconThreeDots />
        </button>
      </div>

      {tags ? (
        <div className="grid grid-cols-[auto_1fr]  gap-[10px]">
          <div className="mt-[6px]">
            <IconTag />
          </div>

          <div className="flex items-center gap-[10px] flex-wrap">
            <TagItem label="Ads" />
            <TagItem label="Illustration" variant="red" />
          </div>
        </div>
      ) : null}

      {previewImage ? (
        <div>
          <Image
            src="https://dummyimage.com/356x170.png/C4C4C4/000000"
            width={356}
            height={170}
            className="rounded-[10px] w-full"
            alt="Card Image"
          />
        </div>
      ) : null}

      {/* Progress */}
      {progress ? (
        <div className="flex flex-col gap-[10px]">
          <Progress timeLeft={3} percentage={66} />
        </div>
      ) : null}

      <div className="flex items-center justify-between">
        {/* Users Row */}
        <div className="flex -space-x-3">
          {userRow ? <UserRow users={userImgs} /> : null}
        </div>

        <div className="flex item gap-6">
          {watchers ? <IconNumber icon={<IconEye />} number={22} /> : null}
          {messages ? (
            <IconNumber icon={<ChatIcon activeMessages={false} />} number={9} />
          ) : null}
          {subtasks ? (
            <IconNumber icon={<IconThreeLines />} number={5} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
