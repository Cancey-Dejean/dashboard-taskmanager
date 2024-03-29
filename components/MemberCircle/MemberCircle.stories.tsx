import type { Meta, StoryObj } from "@storybook/react"
import MemberCircle from "./"
import { PlusIcon } from "../Icons"

const meta = {
  title: "Components/MemberCircle",
  component: MemberCircle,
  args: {
    imgSrc: "https://picsum.photos/200/",
  },
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MemberCircle>

export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {
  render: (args) => {
    return <MemberCircle {...args} />
  },
}

export const AddUser: Story = {
  render: (args) => {
    return (
      <div className="flex gap-5 justify-center">
        <MemberCircle {...args} />
        <button
          className="h-[66px] w-[66px] flex items-center justify-center border border-black rounded-full"
          onClick={() => {
            alert("Add User")
          }}
        >
          <PlusIcon />
        </button>
      </div>
    )
  },
}

export const UserRow: Story = {
  render: (args) => {
    return (
      <div className="flex gap-[10px] justify-start max-w-[366px] mx-auto ">
        <div className="flex gap-3 flex-wrap">
          <MemberCircle {...args} />
          <MemberCircle {...args} />
          <MemberCircle {...args} />
          <MemberCircle {...args} />
          <MemberCircle {...args} />
          <MemberCircle {...args} />
        </div>
        <button
          className="h-16 w-16 flex items-center justify-center border border-black rounded-full shrink-0"
          onClick={() => {
            alert("Add User")
          }}
        >
          <PlusIcon />
        </button>
      </div>
    )
  },
}
