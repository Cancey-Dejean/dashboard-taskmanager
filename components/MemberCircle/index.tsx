import Avatar from "../Avatar"

const MemberCircle = ({
  imgSrc,
  userFirstName,
}: {
  imgSrc?: string

  userFirstName?: string
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Avatar imgSrc={imgSrc || "https://picsum.photos/200/"} size="large" />
      <p className="font-medium  text-[#202226] text-sm">
        {userFirstName || "Name"}
      </p>
    </div>
  )
}

export default MemberCircle
