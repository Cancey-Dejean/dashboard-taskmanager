import React from "react"
import Avatar from "../Avatar"

const UserRow = ({
  users,
}: {
  users: {
    imgSrc: string
    name: string
  }[]
}) => {
  return (
    <div className="flex -space-x-3">
      {users.slice(0, 3).map((user) => (
        <Avatar
          size="small"
          imgSrc={user.imgSrc}
          name={user.name}
          key={user.name}
        />
      ))}

      {users.length > 3 && (
        <span className="h-[30px] w-[30px] flex items-center justify-center border-2 border-blue-2 text-blue-2 bg-white rounded-full text-sm leading-[1] relative">
          +{users.length - 3}
        </span>
      )}
    </div>
  )
}

export default UserRow
