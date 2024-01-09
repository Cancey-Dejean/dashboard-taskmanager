import Image from "next/image"
import { ChatIcon, IconBell, IconSearch } from "../Icons"
import Avatar from "../Avatar"

const TopBar = ({}: {}) => {
  return (
    <header className="bg-white py-8 px-6 flex items-center gap-5">
      <div className="border rounded-md border-gray-300 overflow-hidden flex bg-[#F3F3F3] items-center flex-1">
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border-0 py-4 px-5 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm bg-transparent "
          placeholder="Search something"
        />

        <div className="h-6 w-[1px] bg-[#858585]" />

        <button className="p-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          <IconSearch />
        </button>
      </div>

      <div className="flex items-center gap-[10px]">
        <button className="focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          <IconBell />
        </button>

        <button className="focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          <ChatIcon activeMessages />
        </button>

        <button className="focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          <Avatar imgSrc="https://dummyimage.com/64x64.png/C4C4C4/000000" />
        </button>
      </div>
    </header>
  )
}

export default TopBar
