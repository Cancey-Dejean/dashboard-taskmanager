import type { Meta, StoryObj } from "@storybook/react"
import Card from "./"

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Mobile App Development",
    assignee: true,
    dateRange: true,
    tags: true,
    previewImage: true,
    progress: true,
    userRow: true,
    watchers: true,
    messages: true,
    subtasks: true,
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
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Card {...args} />
  },
}
