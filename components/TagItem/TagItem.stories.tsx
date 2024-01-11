import type { Meta, StoryObj } from "@storybook/react"
import TagItem from "./"

const meta = {
  title: "Components/TagItem",
  component: TagItem,
  args: {
    variant: "primary",
    label: "Tag",
  },
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
} satisfies Meta<typeof TagItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <TagItem {...args} />
  },
}
