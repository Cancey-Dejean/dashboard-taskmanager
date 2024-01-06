import { twMerge } from "tailwind-merge"

const TagItem = ({
  variant = "primary",
  label,
}: {
  variant?:
    | "primary"
    | "blue"
    | "blue-2"
    | "success"
    | "red"
    | "warning"
    | "critical"
  label: string
}) => {
  return (
    <div
      className={twMerge(
        variant === "primary" && "bg-primary",
        variant === "blue" && "bg-blue",
        variant === "blue-2" && "bg-blue-2",
        variant === "success" && "bg-success",
        variant === "red" && "bg-red",
        variant === "warning" && "bg-warning",
        variant === "critical" && "bg-critical",
        "text-white inline-flex gap-[10px] items-start justify-center px-4 py-2 rounded-[10px] text-sm font-medium"
      )}
    >
      {label || "Tag"}
    </div>
  )
}

export default TagItem
