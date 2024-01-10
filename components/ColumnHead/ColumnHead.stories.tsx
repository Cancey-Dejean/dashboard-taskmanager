import type { Meta, StoryObj } from "@storybook/react"
import ColumnHead from "./"

const meta = {
  title: "Components/ColumnHead",
  component: ColumnHead,
  args: {
    variant: "todo",
    title: "Title",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[406px] w-full mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof ColumnHead>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <ColumnHead {...args} />
  },
}
