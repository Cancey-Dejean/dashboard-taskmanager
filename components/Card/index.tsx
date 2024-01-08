import Image from "next/image"
import TagItem from "../TagItem"

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#6A6A6A"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="#6A6A6A"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>Mon, Aug 24 - Tue, Aug 26</p>
          </div>
        </div>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="black"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
              stroke="black"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
              stroke="black"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="mt-[6px]"
        >
          <path
            d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z"
            stroke="#6A6A6A"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7H7.01"
            stroke="#6A6A6A"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

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
        <div className="flex gap-4 justify-between items-center text-sm text-blue">
          <p>3 days left</p>
          <p>35%</p>
        </div>

        <div className="bg-[#D9D9D9] h-3 rounded-3xl">
          <div
            className="bg-blue h-3 rounded-3xl"
            style={{
              width: "35%",
            }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {/* Users */}
        <div className="flex -space-x-3">
          <Image
            src="https://dummyimage.com/30x30.png/C4C4C4/000000"
            width={30}
            height={30}
            className="rounded-full border-2 border-[#EFEFEF]"
            alt=""
          />
          <Image
            src="https://dummyimage.com/30x30.png/C4C4C4/000000"
            width={30}
            height={30}
            className="rounded-full border-2 border-[#EFEFEF]"
            alt=""
          />
          <Image
            src="https://dummyimage.com/30x30.png/C4C4C4/000000"
            width={30}
            height={30}
            className="rounded-full border-2 border-[#EFEFEF]"
            alt=""
          />

          <span className="h-[30px] w-[30px] flex items-center justify-center border-2 border-blue-2 text-blue-2 bg-white rounded-full text-sm leading-[1]">
            +2
          </span>
        </div>

        <div className="flex item gap-6">
          <div className="flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-sm">22</span>
          </div>

          <div className="flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-sm">9</span>
          </div>

          <div className="flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 6H21"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H21"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 18H21"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 6H3.01"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12H3.01"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 18H3.01"
                stroke="#6A6A6A"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-sm">5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
