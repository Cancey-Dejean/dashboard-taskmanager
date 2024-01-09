import Image from "next/image"
import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const avatar = cva(
  "rounded-md text-base flex items-center justify-center gap-2 duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: "h-[30px] max-w-[30px]",
        medium: "h-[48px] max-w-[48px]",
        large: "h-[64px] max-w-[64px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
)

export type AvatarProps = {
  /**
   * Description goes here
   */
  size?: "small" | "medium" | "large"
  /**
   * Description goes here
   */
  imgSrc: string
  /**
   * Description goes here
   */
  name?: string
}

const Avatar = ({ imgSrc, name, size }: AvatarProps) => {
  return (
    <div
      className={twMerge("relative w-full overflow-hidden", avatar({ size }))}
    >
      <Image
        src={imgSrc || "https://dummyimage.com/64x64.png/C4C4C4/000000"}
        alt={name || "Avatar"}
        width={64}
        height={64}
        className={twMerge(
          avatar({ size }),
          `object-cover rounded-full border-2 border-[#EFEFEF]`
        )}
      />
    </div>
  )
}

export default Avatar
