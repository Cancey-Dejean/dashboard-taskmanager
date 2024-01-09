import Avatar from "../Avatar"

const MemberCircle = ({
  imgSrc,
  userFirstName,
}: {
  imgSrc: string

  userFirstName?: string
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Avatar imgSrc={imgSrc} size="large" />
      {/* <Image
        src="https://dummyimage.com/48x48.png/C4C4C4/000000"
        width={66}
        height={66}
        className="rounded-full border-2 border-[#EFEFEF]"
        alt=""
      /> */}
      <p className="font-medium  text-[#202226] text-sm">
        {userFirstName || "Name"}
      </p>
    </div>
  )
}

export default MemberCircle
