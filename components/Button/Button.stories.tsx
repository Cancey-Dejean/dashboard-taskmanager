import type { Meta, StoryObj } from "@storybook/react"
import Button from "./"

const meta = {
  title: "Components/Button",
  component: Button,
  args: {},
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Button {...args} />
  },
}
