import { ArrowDown } from "../Icons"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const DropdownOptions = [
  {
    id: 1,
    title: "Date Added",
  },
  {
    id: 2,
    title: "Rename Section",
  },
  {
    id: 3,
    title: "Add Section",
  },
  {
    id: 4,
    title: "Delete Section ",
  },
]

const status = cva("h-4 w-4 bg-black rounded-full", {
  variants: {
    variant: {
      todo: "bg-critical",
      "in-progress": "bg-warning",
      done: "bg-success",
    },
  },
  defaultVariants: {
    variant: "todo",
  },
})

const ColumnHead = ({
  title,
  variant,
}: {
  title: string
  variant?: "todo" | "in-progress" | "done"
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-[10px]">
        <div className={twMerge(status({ variant }))} />

        <p className="text-lg uppercase font-semibold text-[#6A6A6A]">
          {title || "Title"}
        </p>
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
          className="relative z-[1] py-1.5 px-3 pr-7 rounded-lg  text-gray-900 border-2 border-gray-300 focus:ring-2 focus:rounded-lg focus:ring-indigo-600 sm:text-sm sm:leading-6 min-w-[110px] text-sm bg-transparent "
          defaultValue="Date Added"
        >
          {DropdownOptions.map((option) => (
            <option key={option.id}>{option.title}</option>
          ))}
        </select>

        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default ColumnHead
