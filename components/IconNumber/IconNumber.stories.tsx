import type { Meta, StoryObj } from "@storybook/react"
import IconNumber from "./"
import { IconEye } from "../Icons"

const meta = {
  title: "Components/IconNumber",
  component: IconNumber,
  args: {
    number: 22,
    icon: <IconEye />,
  },

  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return (
      <IconNumber icon={<IconEye />} className="justify-center" number={22} />
    )
  },
}
