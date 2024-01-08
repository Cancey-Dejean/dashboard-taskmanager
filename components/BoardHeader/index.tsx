import Breadcrumb from "../Breadcrumb"
import Button from "../Button"

const BoardHeader = ({ boardTitle }: { boardTitle: string }) => {
  return (
    <div className="flex justify-between gap-4 max-w-[1278px] w-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold uppercase text-[#202226]">
          {boardTitle || "Board Title"}
        </h1>

        <Breadcrumb />
      </div>

      <div>
        <Button label="Show More" />
      </div>
    </div>
  )
}

export default BoardHeader
