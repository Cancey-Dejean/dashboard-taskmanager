import type { Meta, StoryObj } from "@storybook/react"
import MemberCircle from "./"
import { PlusIcon } from "../Icons"

const meta = {
  title: "Components/MemberCircle",
  component: MemberCircle,
  args: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MemberCircle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <MemberCircle {...args} />
  },
}

export const AddUser: Story = {
  render: (args) => {
    return (
      <div className="flex gap-5">
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
