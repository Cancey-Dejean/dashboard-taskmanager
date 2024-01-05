import React from "react"

type Props = {}

const ColumnHead = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <div
          className="h-4 w-4 bg-black rounded-full"
          style={{
            backgroundColor: "#FF6A55",
          }}
        />

        <p className="text-lg uppercase font-semibold text-[#6A6A6A]">Text</p>
      </div>

      <div className="relative">
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-gray-900 sr-only"
        >
          Location
        </label>
        <select
          id="location"
          name="location"
          className=" border-0 py-1.5 pl-3 pr-7 text-gray-900focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 min-w-[110px] text-sm"
          defaultValue="Date Added"
        >
          <option selected>Date Added</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <path
            d="M5.5 8.25L11 13.75L16.5 8.25"
            stroke="#6A6A6A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default ColumnHead
