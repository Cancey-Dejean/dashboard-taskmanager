import type { Meta, StoryObj } from "@storybook/react"
import BoardHeader from "./"

const meta = {
  title: "Components/BoardHeader",
  component: BoardHeader,
  args: {
    boardTitle: "Board Title",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[1278px] w-full mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof BoardHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <BoardHeader {...args} />
  },
}
