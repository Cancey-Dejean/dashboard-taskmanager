import type { Meta, StoryObj } from "@storybook/react"
import Progress from "./"

const meta = {
  title: "Components/Progress",
  component: Progress,
  args: {},
  decorators: [
    (Story) => (
      <div className="max-w-[356px] mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Progress {...args} />
  },
}
