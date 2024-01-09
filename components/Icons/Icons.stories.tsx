import type { Meta, StoryObj } from "@storybook/react"
import Icons from "./"

const meta = {
  title: "Components/Icons",
  component: Icons,
  args: {},
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Icons {...args} />
  },
}
