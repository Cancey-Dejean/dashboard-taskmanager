import Link from "next/link"
import Breadcrumb from "../Breadcrumb"
import Button from "../Button"

const SidebarHeader = () => {
  return (
    <div className="flex justify-between items-stretch gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold  text-[#202226]">Teams</h1>
      </div>

      <Link href="#" className="text-sm text-[#6A6A6A] flex items-center">
        See all
      </Link>
    </div>
  )
}

export default SidebarHeader
